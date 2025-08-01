import { useState } from "react";

export default function FAQSHero() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);
  const [isActive9, setIsActive9] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  return (
    <div className="w-full py-10 flex flex-col gap-4 items-center justify-center">
      <main
        className={`w-[80%] h-15 tpy-2center cursor-pointer rounded-lg duration-1000 text-2xl font-bold flex items-center justify-between px-5 bg-${
          isActive ? "amber-400" : "amber-100"
        } ${isOpen ? "translate-y-2" : "-translate-y-2"}`}
        onClick={() => {
          setTimeout(() => {
            setIsOpen(!isOpen);
            setIsActive(!isActive); 
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>How does this work?</div>
        <span>+</span>
      </main>

      {isOpen && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            Our platform lets you order from your favorite restaurants and get
            it delivered to your door...
          </div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center duration-1000 justify-between px-5 bg-${
          isActive2 ? "amber-400" : "amber-100"
        } ${isOpen2 ? "translate-y-2" : "-translate-y-2"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive2(!isActive2);
            setIsOpen2(!isOpen2);
          }, 300);
          setIsActive(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>Can I order from different restaurants at the same time?</div>
        <span>+</span>
      </main>

      {isOpen2 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            At the moment, each order must be placed with a single restaurant to
            ensure smooth processing...
          </div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 bg-${
          isActive3 ? "amber-400" : "amber-100"
        } duration-1000 ${isOpen3 ? "translate-y-2" : "-translate-y-2"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive3(!isActive3);
            setIsOpen3(!isOpen3);
          }, 300);
          setIsActive2(false);
          setIsActive(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>Are your menu prices the same as those at the restaurant?</div>
        <span>+</span>
      </main>

      {isOpen3 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            We work closely with restaurants to keep pricing as close as
            possible to their in-store menu...
          </div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 bg-${
          isActive4 ? "amber-400" : "amber-100"
        } duration-1000 ${isOpen4 ? "translate-y-2" : "-translate-y-2"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive4(!isActive4);
            setIsOpen4(!isOpen4);
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>Some menu items are missing on a restaurant page?</div>
        <span>+</span>
      </main>

      {isOpen4 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            Not all restaurants list their entire menu for online delivery...
          </div>
        </main>
      )}

      <main
      // className={({isActive}) =>
      // `w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 ${
      // isActive? "amber-400" : "amber-100" } `
       //}
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 bg-${
          isActive5 ? "amber-400" : "amber-100"
        } duration-1000 ${isOpen5 ? "translate-y-2" : "-translate-y-2"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive5(!isActive5);
            setIsOpen5(!isOpen5);
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>
          Do any of your cheeses contain enzymes derived from animal sources?
        </div>
        <span>+</span>
      </main>

      {isOpen5 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            We understand dietary restrictions are important, and cheese
            ingredients can vary...
          </div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 bg-${
          isActive6 ? "amber-400" : "amber-100"
        }  duration-1000 ${isOpen6 ? "translate-y-2" : "-translate-y-2"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive6(!isActive6);
            setIsOpen6(!isOpen6);
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>
          Is the sugar used in your dough refined through animal bone char?
        </div>
        <span>+</span>
      </main>

      {isOpen6 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>Ingredient sourcing can vary by restaurant and supplier...</div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 duration-1000 ${
          isOpen7 ? "translate-y-2" : "-translate-y-2"
        } bg-${isActive7 ? "amber-400" : "amber-100"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive7(!isActive7);
            setIsOpen7(!isOpen7);
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive(false);
          setIsActive8(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen(false);
          setIsOpen9(false);
          setIsOpen8(false);
        }}
      >
        <div>Does your pizza contain peanuts or peanut oil?</div>
        <span>+</span>
      </main>

      {isOpen7 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            Our pizzas typically do not contain peanuts or peanut oil as
            ingredients...
          </div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 duration-1000 ${
          isOpen8 ? "translate-y-2" : "-translate-y-2"
        } bg-${isActive8 ? "amber-400" : "amber-100"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive8(!isActive8);
            setIsOpen8(!isOpen8);
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive(false);
          setIsActive9(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen9(false);
          setIsOpen(false);
        }}
      >
        <div>Are your doughs vegan or vegetarian friendly?</div>
        <span>+</span>
      </main>

      {isOpen8 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            Many of our restaurant partners offer doughs that are vegan or
            vegetarian-friendly...
          </div>
        </main>
      )}

      <main
        className={`w-[80%] -mt-2 py-2 text-center cursor-pointer rounded-lg text-2xl font-bold flex items-center justify-between px-5 duration-1000 ${
          isOpen9 ? "translate-y-2" : "-translate-y-2"
        } bg-${isActive9 ? "amber-400" : "amber-100"}`}
        onClick={() => {
          setTimeout(() => {
            setIsActive9(!isActive9);
            setIsOpen9(!isOpen9);
          }, 300);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
          setIsActive5(false);
          setIsActive6(false);
          setIsActive7(false);
          setIsActive8(false);
          setIsActive(false);
          setIsOpen2(false);
          setIsOpen3(false);
          setIsOpen4(false);
          setIsOpen5(false);
          setIsOpen6(false);
          setIsOpen7(false);
          setIsOpen(false);
          setIsOpen8(false);
        }}
      >
        <div>Does your pepperoni contain gluten?</div>
        <span>+</span>
      </main>

      {isOpen9 && (
        <main
          className={`w-[80%] -mt-2 py-3 text-center rounded-xl flex bg-[#f6f3f398] items-center justify-between px-5 messages`}
        >
          <div>
            Yes, traditional pepperoni typically contains gluten due to added
            fillers or seasoning...
          </div>
        </main>
      )}
    </div>
  );
}
