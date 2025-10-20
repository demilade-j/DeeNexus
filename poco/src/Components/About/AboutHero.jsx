// import { useState } from "react"
import { Link } from "react-router-dom"

export default function AboutHero() {
    // const [fav,setFav] =useState(false)
  return (
    <div className="lg:flex lg:flex-row flex flex-col gap-5 md:flex py-5  px-6 lg:py-13 md:py-2 sm:flex sm:flex-col sm:gap-5 items-center justify-between">
        <main className="flex flex-col gap-2.5 lg:w-[45%] sm:w-full items-center lg:items-start md:justify-center">
            <h1 className="text-amber-400 text-4xl font-[Norican]">Welcome!</h1>
            <h2 className="sm:text-center lg:text-start text-5xl font-bold">Best burger ideas & traditions from the whole world</h2>
            <p className="sm:text-center lg:text-start text-gray-600">Flavors that feel like home, served with a side of passion From hearty classics to fresh modern twists, we’re here to turn hunger into memories. Think seared meats glazed in house sauces, garden-fresh salads, and desserts that crackle with caramelized perfection.</p>
            <p className="sm:text-center lg:text-start text-gray-600">From classic favorites to bold, unique creations, our menu has something for everyone. Whether you love rich, spicy, or smoky flavors, we’ve got you covered. Come enjoy a taste of tradition with a modern twist.</p>
            <Link to='/contact'>
            <button className="px-9 py-3 bg-amber-400 rounded-md font-bold cursor-pointer">CONTACT US</button>
            </Link>
        </main>

        <main className="lg:w-[43%] lg:flex lg:flex-row sm:flex flex flex-col sm:flex-col sm:w-full gap-5 items-center justify-center">
            <img className="lg:h-fit rounded-lg" src="/image1-h4.jpg" alt="" />
            <article className="flex flex-col gap-4">
                <img className="rounded-lg lg:h-fit" src="/image2-h4.jpg" alt="" />
                <img className="rounded-lg" src="/image3-h4.jpg" alt="" />
            </article>
            {/* <button onClick={()=>{setFav(!fav)
                alert('added')
            }}>{fav ? '🖤':'🧡'}</button> */}
        </main>

        <img className="fixed bottom-10 z-10 left-140" src="/vector2-h3.png" alt="" />
    </div>
  )
}
