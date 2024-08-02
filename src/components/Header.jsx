import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Employee Manager
        </Link>
        <Link
          to="/add-employee"
          className="bg-white text-blue-600 px-4 py-2 rounded"
        >
          Add Employee
        </Link>
      </nav>
    </header>
  );
}

export default Header;
