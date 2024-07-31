import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="p-10 bg-black h-screen w-screen text-zinc-200">
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2  translate-x-1/2">
        <h1 className="text-3xl font-semibold mb-4">404 Not Found.</h1>
        <Link to="/">
          <p className="text-blue-600 hover:underline underline-offset-4">Go back to home ⬅️</p>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage
