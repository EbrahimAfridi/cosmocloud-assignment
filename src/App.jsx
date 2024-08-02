import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    (
      <main className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto mt-8">
          <Outlet />
        </div>
      </main>
    )
  );
}

export default App;
