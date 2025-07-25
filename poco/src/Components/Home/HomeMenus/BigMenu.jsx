import { useState } from "react";
import BigMenu2 from "./BigMenu2";
import BigMenu3 from "./BigMenu3";
import BigMenu4 from "./BigMenu4";

export default function BigMenu() {
  const [hero, setHero] = useState("BigMenu2");
  const [circleChange, setCircleChange] = useState(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  bg-amber-400 border-yellow-400 ">BREAKFAST</div>);
  const [circleChange2, setCircleChange2] = useState(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400">LUNCH</div>);
  const [circleChange3, setCircleChange3] = useState(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400">DINNER</div>);
  
  function circleChange4() {
    setHero("BigMenu4");
    setCircleChange(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400 ">BREAKFAST</div>)
    setCircleChange2(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400">LUNCH</div>)
    setCircleChange3(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center  bg-amber-400 font-bold py-6 size-4 border-2  border-yellow-400">DINNER</div>)
  }

  function circleChange5() {
    setHero("BigMenu3");
    setCircleChange(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400 ">BREAKFAST</div>)
    setCircleChange2(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2 bg-amber-400 border-yellow-400">LUNCH</div>)
    setCircleChange3(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400">DINNER</div>)
  }

  function circleChange6() {
    setHero("BigMenu2");
    setCircleChange(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2 bg-amber-400 border-yellow-400 ">BREAKFAST</div>)
    setCircleChange2(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400">LUNCH</div>)
    setCircleChange3(<div className="rounded-full cursor-pointer px-18 flex items-center justify-center font-bold py-6 size-4 border-2  border-yellow-400">DINNER</div>)
  }

  const renderHero = () => {
    switch (hero) {
      case "BigMenu2":
        return <BigMenu2 />;
      case "BigMenu3":
        return <BigMenu3/>;
        case "BigMenu4":
        return <BigMenu4/>;
    }
  };

  return (
      <div className="p-15 flex flex-col gap-2 h-fit items-center">
        <h1 className="text-amber-400 font-[Norican] font-bold text-3xl">Our Menu</h1>
        <h2 className="text-5xl font-bold flex flex-wrap text-center">What's Hot Today</h2>


        <article className="lg:flex sm:flex sm:gap-2 flex lg:scale-100 md:scale-100 sm:scale-100 scale-75 gap-2 sm:h-40 md:flex h-19 lg:gap-9 w-fullmd:h-40 md:items-center md:justify-center justify-center items-center">
      <main className="flex" onClick={circleChange6}>{circleChange}</main>
      <span className="flex" onClick={circleChange5}>{circleChange2}</span>
      <main className="flex" onClick={circleChange4}>{circleChange3}</main>
      </article>

      <br />
      <div className="flex flex-col items-center justify-center gap-96">
      <main className="flex flex-wrap">{renderHero()}</main>
    </div>
    </div>
  )
}
