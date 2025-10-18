import { Outlet, ScrollRestoration } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";

export default function App() {
  return (
    <div>
      <AppProvider>
        <Outlet />
        <ScrollRestoration />
      </AppProvider>
    </div>
  );
}
