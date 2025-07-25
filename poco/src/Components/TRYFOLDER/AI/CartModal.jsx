// import { useCart } from "./CartContext";

// export default function CartModal() {
//   const { cart, removeFromCart, modal, setModal } = useCart();

//   if (!modal) return null;

//   return (
//     <>
//       <div
//         className="fixed inset-0 bg-[#0808081f] bg-opacity-50 z-[12000]"
//         onClick={() => setModal(false)}
//       />
//       <div className="fixed top-0 right-0 h-full overflow-y-scroll w-80 pr-4 px-3 bg-white text-black border-l-2 border-black z-[19000] shadow transform transition-transform duration-190">
//         <article className="flex items-center mt-10 justify-between">
//           <h1 className="font-medium text-[1.5rem]">SHOPPING CART</h1>
//           <button
//             onClick={() => setModal(false)}
//             className="text-sm font-extrabold cursor-pointer text-red-600 hover:text-red-800"
//           >
//             CLOSE &times;
//           </button>
//         </article>
//         <br />
//         <hr className="text-gray-300 bg-gray-300" />
//         <div className="flex flex-col gap-4 p-2">
//           {cart.length === 0 ? (
//             <p className="text-center text-gray-500">Cart is empty.</p>
//           ) : (
//             cart.map((item, index) => (
//               <nav key={index} className="flex items-center gap-3">
//                 <span
//                   onClick={() => removeFromCart(item.id)}
//                   className="h-4 w-4 rounded-full text-amber-400 border-1 border-amber-500 flex items-center pb-1 justify-center cursor-pointer"
//                 >
//                   &times;
//                 </span>
//                 <img className="size-20 rounded-lg" src={item.src} alt={item.name} />
//                 <div className="text-left">
//                   <p className="font-bold">{item.name}</p>
//                   <p className="text-sm text-gray-600">{item.price}</p>
//                   <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
//                 </div>
//               </nav>
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   );
// }