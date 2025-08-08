import { Link } from "react-router-dom";

export default function Hero1() {
  return (
    <main className="bg-[#754628] p-20  text-white pt-48 px-10 justify-between md:grid-cols-1 lg:flex grid-cols-1 sm:grid-cols-1 sm:items-center sm:justify-center md:items-center md:justify-center hero-1">
      <div className="flex flex-col items-center justify-center lg:flex lg:flex-col lg:items-start">
        <img className="absolute ml-50 hero-1-onion md:mt-[-79%] md:ml-[-30rem] lg:mt-[-23%] lg:ml-[48%]" src="/onion hero.png"/>
        <img className="absolute  mt-170 ml-40 lg:ml-[40%] lg:mt-[-34%] hero-1-discount md:mt-[80%]" src="/50off poco.png"/>
        <img width={200} className="absolute z-7 ml-300 mt-[-11.4rem] hero-1-tomato lg:hidden sm:hidden md:flex md:ml-[30rem] md:mt-[-49rem] hidden" src="/Tomato Poco.png"/>
        <img width={50} className="absolute lg:ml-[89%] lg:mt-[35%] hero-leaf-btn sm:ml-12 ml-[50%]" src="/chilli 2.png"/>
        <img width={150} className="absolute lg:ml-205 hidden mt-[46%] md:ml-100 hero-1-chilli sm:ml-12 ml-[50%]" src="/Chilli 2 poco.png"/>
        <h2 className="text-amber-400 font-extrabold text-2xl text-[1.2rem] lg:text-[3rem] md:text-[1.8rem] sm:text-[1.5rem] hero-1-1st font-[Norican]">
          hot & special
        </h2>

        <h2 className="font-extrabold lg:text-[4rem] md:text-[3rem] sm:text-[2rem] text-[2rem] hero-1-2nd flex flex-col items-center justify-center md:text-8xl md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center lg:flex lg:items-start text-center">
          Spicy Fried 
          <br />
          <span>
          Chicken
          </span>
        </h2>

        <main className="flex gap-10  "> 
        <h6 className="font-sans lg:text-[1rem] hero-1-3rd md:text-[2.2rem] text-[1.8rem] text-center lg:text-start sm:text-center md:text-center sm:text-[2rem] justify-center items-center">
          Italian food with special sauce is a flavor you can find only in
          DeeNexus
        </h6>
        </main>
        <br />

        <main className="flex">
        <span className="items-center lg:text-start text-center md:text-center  sm:text-center font-bold text-[1.4rem] hero-1-4th md:text-[1.6rem]">
          Enjoy free delivery with min. purchase of
          <span className="text-amber-400 ml-2 items-center justify-center font-mono font-extrabold">
             SUPER50
          </span>
        </span>

        </main>
        <br />
        <br />

       <Link to='/shop'>
       <button className="bg-amber-400 h-15 w-36 font-bold text-[1.1rem] z-[10] rounded-[0.6rem] text-black hover:bg-white hero-btn ">
          Order Now
        </button>
        </Link>
        <img width={100} className=" mt-[-1.4rem] ml-10 z-[1] hero-leaf-btn" src="/leaf 1.webp" alt="" />
        <br />
      </div>

      <div>
        <img
          className="mt-[-2rem] hero-chicken"
          height={15}
          width={830}
          src="/fried-chicken (1).png"
          alt="grilled chicken"
        />
      </div>
    </main>
  );
}
