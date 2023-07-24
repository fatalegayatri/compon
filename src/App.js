import React from "react";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ModalPage from "./pages/ModalPage";
function App() {
  return (
    <div className="container mx-auto flex flex-row sticky   top-0  gap-10">
      <Sidebar className={"flex flex-col "} />
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
        <Route path="/Modal">
          <ModalPage />
        </Route>
      </div>
    </div>
  );
}
export default App;
