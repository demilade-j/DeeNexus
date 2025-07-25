import React, { Suspense, lazy, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/index.css";
import Loader from "./Components/Main Components/Loader";

// Lazily loaded components
const App = lazy(() => import("./App"));
const Home = lazy(() => import("./Components/Main Components/Home")); // Lazy-load Home
const Menu = lazy(() => import("./Components/Main Components/Menu"));
const Contact = lazy(() => import("./Components/Main Components/Contact"));
const Team = lazy(() => import("./Components/Pages/Teams/Team"));
const History = lazy(() => import("./Components/Pages/History/History"));
const FAQS = lazy(() => import("./Components/Pages/FAQS/FAQS"));
const About = lazy(() => import("./Components/Main Components/About"));
const Blog = lazy(() => import("./Components/Main Components/Blog"));
const Shop = lazy(() => import("./Components/Main Components/Shop"));
const LazyLoader = lazy(() => import("./Components/Main Components/Loader"));

// Error Boundary for handling lazy-loading errors
// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Error loading component. Please try again.</div>;
//     }
//     return this.props.children;
//   }
// }

// Custom Suspense wrapper with minimum and maximum loading time
const SuspenseWithMinDelay = ({ children, fallback, minDelay = 3000, maxDelay = 10000 }) => {
  const [isMinDelayPassed, setIsMinDelayPassed] = useState(false);

  useEffect(() => {
    let adjustedDelay = minDelay;

    // Check network conditions safely
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
    if (connection.effectiveType) {
      if (connection.effectiveType === "slow-2g" || connection.effectiveType === "2g") {
        adjustedDelay = minDelay * 2; // 4 seconds for slow networks
      } else if (connection.effectiveType === "3g") {
        adjustedDelay = minDelay * 1.5; // 3 seconds for 3g
      }
    }

    // Cap the delay at maxDelay
    adjustedDelay = Math.min(adjustedDelay, maxDelay);

    const timer = setTimeout(() => {
      setIsMinDelayPassed(true);
    }, adjustedDelay);

    return () => clearTimeout(timer);
  }, [minDelay, maxDelay]);

  return <Suspense fallback={fallback}>{isMinDelayPassed ? children : fallback}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <
    element: (
      // <ErrorBoundary>
        <App />
      // </ErrorBoundary>
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
      { path: "/loader", element: <LazyLoader /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SuspenseWithMinDelay fallback={<Loader />} minDelay={2000} maxDelay={5000}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </SuspenseWithMinDelay>
);