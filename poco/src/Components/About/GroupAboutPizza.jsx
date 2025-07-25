import { useState } from "react";
import GroupAboutPizza2 from "./GroupAboutPizza2";
import GroupAboutPizza3 from "./GroupAboutPizza3";
import GroupAboutPizza4 from "./GroupAboutPizza4";
import GroupAboutPizza5 from "./GroupAboutPizza5";

export default function GroupAboutPizza() {
  const [abtPizza, setAbtPizza] = useState("GroupAboutPizza2");
  const [circle, setCircle] = useState(<span className='h-2 w-2 bg-amber-400 flex items-center justify-center rounded-full'></span>);
  const [circle2, setCircle2] = useState(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>);
  const [circle3, setCircle3] = useState(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>);
  const [circle4, setCircle4] = useState(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>);

  const realPizza = () => {
  switch (abtPizza) {
    case "GroupAboutPizza2":
      return <GroupAboutPizza2 />;
    case "GroupAboutPizza3":
      return <GroupAboutPizza3 />;
    case "GroupAboutPizza4":
      return <GroupAboutPizza4 />;
    case "GroupAboutPizza5":
      return <GroupAboutPizza5 />;
  }
}

  function handleClick1() {
    setAbtPizza("GroupAboutPizza2");
    setCircle(<span className="h-2 w-2 bg-amber-400 flex items-center justify-center rounded-full"></span>)
    setCircle2(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle3(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle4(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    }

  function handleClick2() {
    setAbtPizza("GroupAboutPizza3");
    setCircle2(<span className="h-2 w-2 bg-amber-400 flex items-center justify-center rounded-full"></span>)
    setCircle(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle3(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle4(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    }

  function handleClick3() {
    setAbtPizza("GroupAboutPizza4");
    setCircle3(<span className="h-2 w-2 bg-amber-400 flex items-center justify-center rounded-full"></span>)
    setCircle(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle2(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle4(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    }

  function handleClick4() {
    setAbtPizza("GroupAboutPizza5");
    setCircle4(<span className="h-2 w-2 bg-amber-400 flex items-center justify-center rounded-full"></span>)
    setCircle3(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle2(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    setCircle(<span className="h-2 w-2 bg-amber-100 flex items-center justify-center rounded-full"></span>)
    }
  return (
    <div className="bg-[#272727] h-150">
      <main className='absolute w-full h-150 text-white flex flex-col gap-1 items-center justify-center'>
        {realPizza()}
      </main>

      <main className="absolute z-20 w-full h-145 flex gap-4 items-end justify-center">
        <div className="cursor-pointer" onClick={handleClick1}>
            {circle}
        </div>

        <div className="cursor-pointer" onClick={handleClick2}>
            {circle2}
        </div>

        <div className="cursor-pointer" onClick={handleClick3}>
            {circle3}
        </div>

        <div className="cursor-pointer" onClick={handleClick4}>
            {circle4}
        </div>
      </main>

      <main className=" mix-blend-overlay relative h-190">
        <img className="w-screen h-150" src="/grouppizza.jpg" alt="" />
      </main>
    </div>
  );
}
