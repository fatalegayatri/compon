import NavigateContext from "../Context/NavigationContext";
import { useContext } from "react";
const NavigationContext = () => {
  return useContext(NavigateContext);
};

export default NavigationContext;
