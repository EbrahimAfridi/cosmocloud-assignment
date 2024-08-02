import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteEmployeeData, getEmployeeData } from "@/api/employeeAPI";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    setIsLoading(true);
    try {
      const data = await getEmployeeData();
      setEmployees(data.data);
    } catch (err) {
      setError("Error fetching employees");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployeeData(id);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (err) {
      setError("Error deleting employee");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>
      <Link to="/add-employee">
        <Button className="mb-4">Add Employee</Button>
      </Link>
      <div className="border rounded-lg overflow-hidden">
        {employees.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead> <TableHead>Name</TableHead>
                <TableHead className="text-right">Options</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee._id}>
                  <TableCell>{employee._id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => navigate(`/employee/${employee._id}`)}
                        >
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            navigate(`/update-employee/${employee._id}`)
                          }
                        >
                          Update
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(employee._id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-8">No employees in the system</div>
        )}
      </div>
    </div>
  );
}

export default UserList;

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}