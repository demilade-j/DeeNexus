import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/index.css";
// import Loader from "./Components/Main Components/Loader";



import App from "./App";
import Home from "./Components/Main Components/Home";
import Menu from "./Components/Main Components/Menu";
import Contact from "./Components/Main Components/Contact";
import Team from "./Components/Pages/Teams/Team";
import History from "./Components/Pages/History/History";
import FAQS from "./Components/Pages/FAQS/FAQS";
import About from "./Components/Main Components/About";
import Blog from "./Components/Main Components/Blog";
import Shop from "./Components/Main Components/Shop";
import LazyLoader from "./Components/Main Components/Loader";
import ShopBig from "./Components/Shop/ShopMain/ShopBig";
import MainCheckout from "./Components/Main Components/MainCheckout";
import SucOrder from "./Components/Main Components/SucOrder";
import ThemeContext2 from "./Components/TRYFOLDER/ThemeContext2";
import SearchBar from "./Components/Main Components/SearchBar";



// const SuspenseWithMinDelay = ({ children, fallback, minDelay = 3000, maxDelay = 10000 }) => {
//   const [isMinDelayPassed, setIsMinDelayPassed] = useState(false);

//   useEffect(() => {
//     let adjustedDelay = minDelay;
//     const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
//     if (connection.effectiveType) {
//       if (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
//         adjustedDelay = minDelay * 2;
//       } else if (connection.effectiveType === "3g") {
//         adjustedDelay = minDelay * 1.5;
//       }
//     }

//     adjustedDelay = Math.min(adjustedDelay, maxDelay);

//     const timer = setTimeout(() => {
//       setIsMinDelayPassed(true);
//     }, adjustedDelay);

//     return () => clearTimeout(timer);
//   }, [minDelay, maxDelay]);

//   return <Suspense fallback={fallback}>{isMinDelayPassed ? children : fallback}</Suspense>;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
      { path: "/page/Team", element: <Team /> },
      { path: "/page/History", element: <History /> },
      { path: "/page/FAQS", element: <FAQS /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/big", element: <ShopBig /> },
      { path: "/loader", element: <LazyLoader /> },
      { path: "/checkout1", element: <MainCheckout /> },
      { path: "/sucOrder", element: <SucOrder /> },
      { path: "/search", element: <SearchBar /> },
      { path: "/context", element: <ThemeContext2 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <SuspenseWithMinDelay fallback={<Loader />} minDelay={2000} maxDelay={5000}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  /* </SuspenseWithMinDelay> */
);