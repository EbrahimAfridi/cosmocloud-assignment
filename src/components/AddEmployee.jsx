import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { postEmployeeData } from "@/api/employeeAPI";

function AddEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address_line_1: "",
    city: "",
    country: "",
    zip_code: "",
    email: "",
    phone_number: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postEmployeeData(formData);
      navigate("/");
    } catch (err) {
      setError("Error adding employee");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Employee</CardTitle>
      </CardHeader>
      <CardContent>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="address_line_1">Address Line 1</Label>
            <Input
              id="address_line_1"
              name="address_line_1"
              value={formData.address_line_1}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="zip_code">Zip Code</Label>
            <Input
              id="zip_code"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone_number">Phone_number</Label>
            <Input
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Add Employee</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddEmployee;
