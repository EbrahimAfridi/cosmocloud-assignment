import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>Employee Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {employee.name}
          </p>
          <p>
            <strong>Employee ID:</strong> {employee._id}
          </p>
          <p>
            <strong>Address:</strong>
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Line 1: {employee.address_line_1}</li>
            <li>City: {employee.city}</li>
            <li>Country: {employee.country}</li>
            <li>Zip Code: {employee.zip_code}</li>
          </ul>
          <p>
            <strong>Contact Methods:</strong>
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Email: {employee.email}</li>
            <li>Phone: {employee.phone_number}</li>
          </ul>
          <Link to={`/update-employee/${employee._id}`}>
            <Button className="mt-4">Update Employee</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserDetails;
