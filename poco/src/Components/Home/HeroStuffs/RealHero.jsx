import Hero2 from "./Hero2";
import { useEffect, useState } from "react";
import Hero1 from "./Hero1";

export default function RealHero() {
  const [hero, setHero] = useState("Hero1");
  const [circleChange, setCircleChange] = useState(
    <div className="rounded-full cursor-pointer size-4 border-2  border-amber-400 "></div>
  );
  const [circleChange2, setCircleChange2] = useState(
    <div className="rounded-full cursor-pointer size-4 border-2  border-amber-400 bg-amber-400"></div>
  );
  function circleChange3() {
    setHero("Hero1");
    setCircleChange(
      <div className="rounded-full cursor-pointer size-4 border-2  border-amber-400 "></div>
    );
    setCircleChange2(
      <div className="rounded-full cursor-pointer size-4 border-2  border-amber-400 bg-amber-400"></div>
    );
  }

  function circleChange4() {
    setHero("Hero2");
    setCircleChange(
      <div className="rounded-full cursor-pointer size-4 border-2  border-amber-400 bg-amber-400"></div>
    );
    setCircleChange2(
      <div className="rounded-full cursor-pointer size-4 border-2  border-amber-400 "></div>
    );
  }

  useEffect(() => {
  const timer = setTimeout(() => {
    if (hero === "Hero1") {
      // Switch to Hero2
      setHero("Hero2");
      setCircleChange(
        <div className="rounded-full cursor-pointer size-4 border-2 border-amber-400 bg-amber-400"></div>
      );
      setCircleChange2(
        <div className="rounded-full cursor-pointer size-4 border-2 border-amber-400"></div>
      );
    } 
    else if (hero === "Hero2") {
      // Switch to Hero1
      setHero("Hero1");
      setCircleChange(
        <div className="rounded-full cursor-pointer size-4 border-2 border-amber-400"></div>
      );
      setCircleChange2(
        <div className="rounded-full cursor-pointer size-4 border-2 border-amber-400 bg-amber-400"></div>
      );
    } 
    else {
      // Default fallback (if somehow state is invalid)
      setHero("Hero1");
    }
  }, 9000);

  return () => clearTimeout(timer);
}, [hero]);


  const renderHero = () => {
    switch (hero) {
      case "Hero2":
        return <Hero2 />;
      case "Hero1":
        return <Hero1 />;
    }
  };

  return (
    <div className="h-fit">
      {renderHero()}

      <article>
        <span
          className="absolute flex mt-[-7%] lg:ml-[49%]  md:ml-[48.5%] sm:ml-[52%] ml-[53%]"
          onClick={circleChange3}
        >
          {circleChange2}
        </span>
        <main
          className="absolute flex mt-[-7%] lg:ml-[51%]  md:ml-[51.5%] sm:ml-[48%] ml-[47%]"
          onClick={circleChange4}
        >
          {circleChange}
        </main>
      </article>
    </div>
  );
}
