import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getEmployeeDataById } from "@/api/employeeAPI";

function UserDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEmployee = async () => {
      setIsLoading(true);
      try {
        const data = await getEmployeeDataById(id);
        setEmployee(data);
      } catch (err) {
        setError("Error fetching employee details");
      } finally {
        setIsLoading(false);
      }
    };

    loadEmployee();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!employee) return null;

  return (
    <div className="w-full min-h-full bg-muted/40 ">
      <div className="grid gap-8 rounded-lg border bg-background p-6 sm:p-8 md:p-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <BriefcaseIcon className="mr-2 h-4 w-4" />
            Employee
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative">
            <span>{employee.name}</span>
          </h1>
          <div className="flex items-center gap-2">
            <LocateIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {employee.city}
              {", "}
              {employee.country}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-muted p-4 rounded-lg">
            <div className="text-md font-medium text-muted-foreground">
              Address
            </div>
            <div className="text-sm mt-2">
              <div className="font-medium">{employee.address_line_1}</div>
              <div>
                {employee.city}
                {", "}
                {employee.country}
              </div>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <div className="text-md font-medium text-muted-foreground">
              Contact
            </div>
            <div className="text-sm mt-2">
              <div className="font-medium">{employee.email}</div>
              <div>{employee.phone_number}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            to={`/update-employee/${employee._id}`}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow 
            transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none 
            disabled:opacity-50"
          >
            Update Details
          </Link>
          <Button variant="outline" size="sm">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

export default UserDetails;
