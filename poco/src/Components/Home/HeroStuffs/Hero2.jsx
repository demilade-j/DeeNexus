export default function Hero2() {
  return (
    <div className="p-20 bg-green-800 text-white pt-48 px-12  justify-between gap-[10%] md:grid-cols-1 lg:flex grid-cols-1 sm:grid-cols-1 sm:items-center sm:justify-center md:items-center md:justify-center hero-2">
      <div className="flex flex-col items-center justify-center lg:flex lg:flex-col lg:items-start">
        <img className="absolute ml-50 hero-1-onion md:mt-[-70%] md:ml-[-30rem] lg:mt-[-23%] lg:ml-[48%]" src="/onion hero.png"/>
        <img className="absolute  mt-20 ml-40 lg:ml-[40%] lg:mt-[-34%] hero-1-discount md:mt-[-2%]" src="/50off poco.png"/>
        <img width={200} className="absolute z-7 ml-200 mt-[-11.4rem] hero-1-tomato lg:hidden sm:hidden md:flex md:ml-[30rem] md:mt-[-49rem] hidden" src="/Tomato Poco.png"/>
        <img width={50} className="absolute lg:ml-[80%] lg:mt-[35%] hero-leaf-btn sm:ml-12 ml-[50%]" src="/chilli 2.png"/>
        <img width={150} className="absolute lg:ml-90 mt-[40%] md:ml-100 hero-1-chilli sm:ml-12 ml-[50%]" src="/Chilli 2 poco.png"/>
        <h2 className="text-amber-400 font-extrabold text-2xl font-[Norican] text-[1.2rem] lg:text-[2.5rem] md:text-[1.8rem] sm:text-[1.5rem] hero-1-1st">
          Limited edition
        </h2>

        <h2 className="font-extrabold lg:text-start lg:text-[5rem] md:text-[3rem] sm:text-[2rem] text-[2rem] hero-1-2nd flex flex-col items-center justify-center md:text-8xl md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center lg:flex lg:items-start text-center">
          New Onion
          <br />
          <span>Burger</span>
        </h2>
        <br />

        <main className="flex gap-10  "> 
        <h6 className="font-sans lg:text-[1.7rem] hero-1-3rd md:text-[2.2rem] text-[1.8rem] text-center lg:text-start sm:text-center md:text-center sm:text-[2rem] justify-center items-center">
          Fast food for fast times and convenience
        </h6>
        </main>
        <br />

        <main className="flex flex-col">
        <span className="items-center lg:text-start lg:text-3xl  text-center md:text-center sm:text-center font-bold text-[1.4rem] hero-1-4th md:text-[1.6rem]">
          From price
        </span>
          <span className="text-amber-400 ml-2 items-center justify-center font-mono font-extrabold text-5xl lg:text-4xl">
             $19.00
          </span>
        </main>
        <br />
        <br />

        <button className="bg-amber-400 h-15 w-36 font-bold text-[1.1rem] z-[10] rounded-[0.6rem] text-black hover:bg-white hero-btn ">
          Order Now
        </button>
        <img width={100} className=" mt-[-1.4rem] ml-10 z-[1] hero-leaf-btn" src="/leaf 1.webp" alt="" />
        <br />
      </div>

      <div>
        <img
          className=" hero-chicken"
          height={15}
          width={630}
          src="/hero burger.png"
          alt="grilled chicken"
        />
      </div>
    </div>
  )
}
