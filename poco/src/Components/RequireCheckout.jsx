import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../Context/useApp";

export default function RequireCheckout({ children }) {
  const { cart } = useApp();
  const location = useLocation();

  const totalItems = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
    : 0;

  if (totalItems === 0) {
    // redirect to shop with an optional state message
    return <Navigate to="/shop" state={{ from: location, reason: "empty-cart" }} replace />;
  }

  return children;
}
