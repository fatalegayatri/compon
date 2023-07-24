import React from "react";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/Dropdown">
          <DropdownPage />
        </Route>
        <Route path="/Accordion">
          <AccordionPage />
        </Route>
        <Route path="/Button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
