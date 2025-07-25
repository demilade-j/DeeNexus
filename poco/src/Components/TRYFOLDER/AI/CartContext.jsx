// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);
//   const [modal, setModal] = useState(false);

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) setCart(JSON.parse(storedCart));
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const idx = prevCart.findIndex((i) => i.id === item.id);
//       if (idx !== -1) {
//         const updated = [...prevCart];
//         updated[idx].quantity = (updated[idx].quantity || 1) + 1;
//         return updated;
//       }
//       return [...prevCart, { ...item, quantity: 1 }];
//     });
//     setModal(true);
//   };

//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, modal, setModal }}>
//       {children}
//     </CartContext.Provider>
//   );
// }