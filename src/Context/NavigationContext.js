import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onNavigate = (event) => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onNavigate);
    return () => {
      window.removeEventListener("popstate", onNavigate);
    };
  }, []);
  const Nagivate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ Nagivate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationProvider };

export default NavigationContext;
