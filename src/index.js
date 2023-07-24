import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigationProvider } from "./Context/NavigationContext";

const el = document.getElementById("root");
const root = reactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
