import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname == "/" ? <EmployeeList />: ""}
      <Outlet />
      </>
  );
}

export default App
