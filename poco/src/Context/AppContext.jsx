import { useState, useEffect } from "react";
import { AppContext } from "./context";

export function AppContextProvider({ children }) {
  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Cart
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Modals
  const [favModal, setFavModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        favorites,
        setFavorites,
        cart,
        setCart,
        favModal,
        setFavModal,
        cartModal,
        setCartModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Alias export for compatibility with imports that use `AppProvider`
export const AppProvider = AppContextProvider;
