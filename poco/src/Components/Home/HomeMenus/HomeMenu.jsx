import { Heart, ShoppingBasketIcon, Star } from 'lucide-react'

const burgerApi=[
    {
      "id": 1,
      "name": "Trio Cheese",
      "price": '£16.93',
      "image": "/trio cheese.png",
      "description" : 'Mouth Watering Pepperoni,Cabanossi,Mushroom,...'
    },
    {
      "id": 2,
      "name": "Trio Cafe",
      "price": '£12.18',
      "image": "/trio cafe.png",
      "description" : 'Trio Cafe Is Family Owned Establishment Located In...'
    },
    {
      "id": 3,
      "name": "Water Bottle",
      "price": '£10.18',
      "image": "/bottle water.png",
      "description" : 'Investing In A Reuseable Water Bottle That You Can Refill...'
    },
    {
      "id": 4,
      "name": "Vegge Lover",
      "price": '£14.90',
      "image": "/vegge lover.png",
      "description" : 'Extra-Virgin Olive Oil,Garlic,Monzarella Cheese,Onions...'
    },
    {
      "id": 5,
      "name": "Tagliatelle Molto",
      "price": '£15.61',
      "image": "/molto.png",
      "description" : 'A Mighty Meaty Double Helping...'
    },
    {
      "id": 6,
      "name": "Tropicana Juice",
      "price": '£11.11',
      "image": "/tropicana.png",
      "ingredients": ["Beef", "Lettuce", "Tomato", "Cheddar", "Onions", "Ketchup"]
    }
]

export default function HomeMenu() {

  return (
    <div className="p-11 bg-cyan-950 lg:flex grid-cols-1 sm:grid-cols-1 md:grid-cols-1  items-center justify-center gap-38">
        <main className="flex flex-col items-center justify-center">
            <h1 className=" hero-1-2nd text-amber-400 text-3xl font-bold font-[Norican,sanserif]">Our Menu</h1>
            <h2 className="hero-1-2nd text-white text-4xl font-bold text-center">Best selling <br /> dishes</h2>
            <br /><br />
            <button className="bg-amber-400 w-50 h-13 rounded-lg font-bold text-lg hero-btn">VIEW ALL PRODUCTS</button>
            <br />
            <img className='hero-leaf-btn' src="/h7 chili 4.png" alt="" />
        </main>
        <main className="flex  overflow-x-auto lg:max-w-[79vw] px-2 scroll-smooth wrapTry gap-2">
        {
          burgerApi.map((burger) =>(
          <article key={burger.id} className=" min-w-65 relative rounded-4xl h-120 bg-white cursor-pointer flex flex-col items-center justify-center group">
            <br/>
            <button className="absolute mb-[23rem] ml-45 group-hover:text-amber-400 text-white duration-1000"> <Heart fill='grey' size={30}/> </button>
            <br />
            <div className="mt-[2rem] w-60 group-hover:h-55 group-hover:bg-amber-400 group-hover:mt-[-4.2rem] right-0 bg-amber-100 duration-500  h-30 rounded-4xl flex items-center justify-center">
            <img className="scale-80 absolute mb-20 group-hover:scale-85 group-hover:mb-[1rem] duration-500" src={burger.image} alt="" />
            </div>
            <br />

            <div className='flex ml-[-6rem] gap-0.5'>
            { <Star fill='yellow' color='white' size={25}/> }
            { <Star fill='yellow' color='white' size={25}/> }
            { <Star fill='yellow' color='white' size={25}/> }
            { <Star fill='yellow' color='white' size={25}/> }
            { <Star fill='yellow' color='white' size={25}/> }
            </div>
            <div className='ml-[-.5rem]'>
              <br/>
            <main className='font-bold'>
              {burger.name}
              </main>
              <p className='flex flex-wrap'>
              Lorem, ipsum dolor sit amet
              <br /> consectetur adipisicing elit...
              </p>
              <br />
              <main className='text-amber-400 font-bold text-2xl flex gap-22'>
                {burger.price}
                <span className='h-10 w-10 flex items-center justify-center rounded-2xl text-black bg-amber-400'>
                    <ShoppingBasketIcon size={25}/>
                </span>
              </main>
            </div>
          </article>
          ))
        }
        </main>

    </div>
  )
}
