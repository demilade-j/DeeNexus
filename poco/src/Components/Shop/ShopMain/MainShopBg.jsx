import ShopSmall from "./ShopSmall";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vanilla Bean Milkshake",
    deletedPrice: "£5.49",
    price: "£4.99",
    description:
      "Creamy vanilla bean goodness in every sip. Simple, smooth, and satisfying.",
    src: "/vanillabeanmilkshake.webp",
  },
  {
    id: 2,
    name: "Spicy Arrabbiata",
    price: "£8.99",
    description:
      "Penne pasta in a fiery tomato sauce with garlic, chili flakes, and fresh basil. Perfect for spice lovers!",
    src: "/spicyarrabbiata.webp",
  },
  {
    id: 3,
    name: "Butternut Squash Ravioli",
    description:
      "Homemade ravioli stuffed with roasted butternut squash, served in a sage brown butter sauce. Sweet...",
    price: "£11.99",
    src: "/butternutsquashravioli.webp",
  },
  {
    id: 4,
    name: "Cajun Chicken Pasta",
    price: "£10.99",
    deletedPrice: "£11.99",
    description:
      "Spicy Cajun-seasoned chicken breast served over penne pasta in a creamy Alfredo sauce. Bold and...",
    src: "/cajunshrimppasta.webp",
  },
  {
    id: 5,
    name: "White Chocolate Mocha",
    deletedPrice: "£5.99",
    price: "£5.49",
    description:
      "Espresso, steamed milk, and white chocolate sauce. A sweet, creamy indulgence!",
    src: "/whitechocolatemocha.webp",
  },
  {
    id: 6,
    name: "Pasta Primavera",
    price: "£9.49",
    description:
      "A colorful mix of fresh vegetables tossed with penne pasta in a light garlic olive oil sauce. Healthy and...",
    src: "/pastaprimavera.webp",
  },
  {
    id: 7,
    name: "Strawberry Banana Smoothie",
    price: "£4.49",
    description:
      "A classic combo of strawberries and bananas, blended to creamy perfection.",
    src: "/strawberrybananasmoothie.webp",
  },
  {
    id: 8,
    name: "Spicy Jalapeño Burger",
    price: "£6.49",
    description:
      "For heat lovers! A beef patty topped with jalapeños, pepper jack cheese, and spicy mayo. Fire up...",
    src: "/spicyjalapenoburger.webp",
  },
  {
    id: 9,
    name: "Spiced Apple Cider",
    price: "£4.99",
    description:
      "Warm apple cider infused with cinnamon, cloves, and orange zest. A fall favorite!",
    src: "/spicedapplecider.webp",
  },
  {
    id: 10,
    name: "Spicy Sausage Rigatoni",
    deletedPrice: "£11.49",
    price: "£10.49",
    description:
      "Rigatoni pasta with spicy Italian sausage in a rich tomato cream sauce. Bold and hearty!",
    src: "/spicysausagerigatoni.webp",
  },
  {
    id: 11,
    name: "Southern Fried Chicken Burger",
    deletedPrice: "£6.99",
    price: "£5.99",
    description:
      "Crispy fried chicken, coleslaw, and pickles on a soft bun. A Southern classic!",
    src: "/southernfriedchickenburger.webp",
  },
  {
    id: 12,
    name: "Spicy Sriracha Chicken Burger",
    description:
      "Grilled chicken breast smothered in spicy sriracha mayo, topped with crispy onions. A fiery delight!",
    price: "£6.99",
    src: "/spicysrirachachickenburger.webp",
  },
];

export default function MainShopBg() {
  const navigate = useNavigate()
  return (
    <div className="flex">
      <ShopSmall />
      <main className='hidden lg:flex md:hidden sm:hidden flex-col w-[30%] px-3 mt-32'>

            <aside className='px-2'>
            <article className='py-3 px-2 border-1 rounded-xl border-gray-500 flex flex-col gap-3'>
                <h1 className='font-bold'>Categories</h1>

                <div onClick={()=>{navigate('/shop')}} className='rounded-xl bg-pink-100 px-4 py-2 flex flex-col gap-1'>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Burgers</p>(21)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Cold Drinks</p>(15)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Hot Drinks</p>(12)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Pasta</p>(20)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Pizza</p>(3)</span>
                    <span className='border-b-1 border-dotted flex cursor-pointer py-1 text-[1.1rem] font-semibold hover:text-amber-400 items-center justify-between border-b-gray-600'><p>Uncategorized</p>(2)</span>
                </div>
            </article>
            <br />
            <form action="">
                <input type="search" onClick={()=>navigate('/search')} className='border-amber-400 h-12 w-full rounded-3xl border-1 flex items-center px-7 pe-15 ouline-1 outline-amber-400' placeholder='Search...' />
                {/* <span><Search className='hover:text-amber-400 absolute -mt-9 ml-[23.3%]'/></span> */}
            </form>
            <br />

            <div className='px-1 flex flex-col gap-4'>
                <h1 className='h-8 font-bold text-xl border-b-1 border-dotted'>Filter Search By Price</h1>
                <input type="range" minLength={10} maxLength={10} className="text-amber-400 -mt-1 -mb-2 bg-amber-400" />
                <div className='flex font-semibold text-lg text-gray-600'>Price: £0 — £20</div>
                <button className="bg-amber-400 px-2 py-1 rounded-sm font-bold text-xl tracking-wider">Filter</button>
                <br />

                <h1 className='h-8 font-bold text-2xl border-b-1 border-dotted'>Best Deals</h1>
                <div className='flex flex-col gap-9'>
                    {products.map((products)=>(
                    <article className='border-1 border-gray-800 bg-pink-50 py-2  gap-1 flex items-center justify-center rounded-xl' key={products.id}>
                        <main className="w-[35%] h-36 rounded-xl bg-pink-400 flex items-center justify-center">
                            <img className="size-25" src={products.src} alt={products.name} />
                        </main>

                        <main className="w-[60%] flex flex-col items-center justify-center">
                            <h1 className="font-semibold">{products.name}</h1>
                            <p className="w-full text-center">{products.description}</p>
                            <p className="w-full flex gap-3"><del>{products.deletedPrice}</del> {products.price}</p>
                        </main>
                    </article>
                    ))}
                    </div>
            </div>
            </aside>
        </main>
    </div>
  );
}