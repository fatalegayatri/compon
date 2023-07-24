import NavigationContext from "../Hooks/Navigate-hook";
function Route({ children, path }) {
  const { currentPath } = NavigationContext();
  if (currentPath === path) {
    return children;
  }
  return null;
}

export default Route;
