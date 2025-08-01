import { Outlet, ScrollRestoration } from "react-router-dom";

export default function App() {
  return (
    <div>
        <Outlet />
        <ScrollRestoration/>
    </div>
  );
}
