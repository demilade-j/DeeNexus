import React from "react";
import { Heart } from "lucide-react";
import { useApp } from "../Context/useApp";

export default function FavoriteToggle({ product, className = "" }) {
  const { favorites, setFavorites } = useApp();

  // Use the same toggle logic as your modal: check by name and add/remove
  const isFav = favorites.some((f) => f.name === product.name);

  const toggleFav = (e) => {
    e.stopPropagation();
    if (isFav) {
      setFavorites((prev) => prev.filter((p) => p.name !== product.name));
    } else {
      setFavorites((prev) => [...prev, { ...product }]);
    }
  };

  // Former UI: small circular button in top-right, amber when active, subtle hover
  const baseClasses =
    "h-10 w-10 rounded-full flex items-center justify-center shadow-sm transition-transform duration-150 ";

  const activeClasses =
    "bg-amber-400 text-white border border-amber-400 hover:scale-105";

  const inactiveClasses = "bg-white text-black border border-gray-200 hover:scale-105";

  return (
    <span
      onClick={toggleFav}
      onMouseDown={(e) => e.stopPropagation()}
      aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
      title={isFav ? "Remove from wishlist" : "Add to wishlist"}
      className={`${baseClasses} ${isFav ? activeClasses : inactiveClasses} ${className}`}
    >
      <Heart size={18} color={isFav ? "white" : "black"} />
    </span>
  );
}
