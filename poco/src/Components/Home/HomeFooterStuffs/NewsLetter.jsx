import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const formRef = useRef(null); // 👈 useRef for form reset

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();

    if (email.trim() === "") {
      toast.error("Enter a valid field OR try inputing again");
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Input a valid email");
      return;
    }

    toast.success("You have Successfully Subscribed!!!");
    formRef.current.reset(); // 👈 resets the form fields
    setEmail(""); // 👈 also resets state
  };

  return (
    <div className="py-40 pt-10 w-full px-3 relative flex justify-center gap-3">
      <main className="mt-50 lg:blur-sm -z-1 scale-80 left-5 newletterLeft absolute lg:flex md:hidden sm:hidden hidden">
        <img className="h-40" src="/NewsletterOther.webp" alt="" />
        <img className="h-20" src="/NewsletterTomato.png" alt="" />
      </main>

      <main className="mt-20 z-10 flex items-center flex-col gap-3">
        <h1 className="text-green-500 font-[Norican] text-3xl tracking-wide">
          NEWS LETTER
        </h1>
        <h2 className="text-5xl text-center font-bold">
          Get <span className="text-amber-400">10%</span> off your order
        </h2>
        <p className="font-medium text-2xl text-center">
          Enter your email and receive a 10% discount on your next order
        </p>

       <form className="flex justify-end items-center w-full" ref={formRef}>
            <input
              className="w-full h-15 ps-10 border border-black outline-1 outline-black"
              name="email"
              onInput={(e) => setEmail(e.target.value)} // 👈 use onInput
              type="email"
              placeholder="Enter your email..."
              required
              autoComplete="email"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-amber-400 p-2 mr-4 z-40 absolute cursor-pointer rounded-sm font-semibold text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
      </main>

      <main className="mt-20 lg:blur-sm scale-75 lg:flex md:hidden sm:hidden hidden absolute right-10">
        <img src="/NewsletterPizza.png" alt="" />
      </main>

      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "lightgreen",
            zIndex: 99999, // 👈 ensures toast stays on top
          },
        }}
      />
    </div>
  );
}
