import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { postEmployeeData } from "@/api/employeeAPI";
import countries from "../constants/countries.json";

function AddEmployee() {
  console.log(countries);

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

  const handleSelectChange = (name, value) => {
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
    // <Card>
    //   <CardHeader>
    //     <CardTitle>Add New Employee</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     {error && <div className="text-red-500 mb-4">{error}</div>}
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <Label htmlFor="name">Name</Label>
    //         <Input
    //           id="name"
    //           name="name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <Label htmlFor="address_line_1">Address Line 1</Label>
    //         <Input
    //           id="address_line_1"
    //           name="address_line_1"
    //           value={formData.address_line_1}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <Label htmlFor="city">City</Label>
    //         <Input
    //           id="city"
    //           name="city"
    //           value={formData.city}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <Label htmlFor="country">Country</Label>
    //         <Input
    //           id="country"
    //           name="country"
    //           value={formData.country}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <Label htmlFor="zip_code">Zip Code</Label>
    //         <Input
    //           id="zip_code"
    //           name="zip_code"
    //           value={formData.zip_code}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <Label htmlFor="email">Email</Label>
    //         <Input
    //           id="email"
    //           name="email"
    //           type="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <Label htmlFor="phone_number">Phone_number</Label>
    //         <Input
    //           id="phone_number"
    //           name="phone_number"
    //           value={formData.phone_number}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <Button type="submit">Add Employee</Button>
    //     </form>
    //   </CardContent>
    // </Card>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Add New Employee
          </h1>
          <p className="text-muted-foreground text-lg">
            Fill out the form below to add a new employee to your team.
          </p>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
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
          </div>
          <div className="space-y-2">
            <Label htmlFor="address_line_1">Address Line 1</Label>
            <Input
              id="address_line_1"
              name="address_line_1"
              value={formData.address_line_1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select
                id="country"
                name="country"
                value={formData.country}
                onValueChange={(value) => handleSelectChange("country", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.Code} value={country.Name}>
                      {country.Name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip_code">Zip Code</Label>
              <Input
                id="zip_code"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone_number</Label>
            <Input
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add Employee</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
