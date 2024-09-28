import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import FilterContext from "./components/FilterContext";

function App() {
  return (
    <>
      <Router>
        <div className="flex h-screen">
          <SideBar></SideBar>
          <FilterContext></FilterContext>
          {/* <Home></Home> */}
        </div>
      </Router>
    </>
  );
}

export default App;
