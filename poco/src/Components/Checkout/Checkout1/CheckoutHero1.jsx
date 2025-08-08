import { useEffect } from "react";
import { Asterisk } from "lucide-react";
import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function CheckoutHero1() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [fourthInput, setFourthInput] = useState("");
  const [fivethInput, setFivethInput] = useState("");
  const [sixthInput, setSixthInput] = useState("");
  const [sevenththInput, setSevenththInput] = useState("");
  const [eigththInput, setEigththInput] = useState("");
  const [ninthInput, setNinthInput] = useState("");
  const [tenthInput, setTenthInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState(false);
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (
      firstInput &&
      secondInput &&
      thirdInput &&
      fourthInput &&
      fivethInput &&
      sixthInput &&
      sevenththInput &&
      eigththInput &&
      ninthInput &&
      tenthInput
    ) {
      setColor(true); // enable button color
    } else {
      setColor(false); // disable button color
    }
  }, [
    firstInput,
    secondInput,
    thirdInput,
    fourthInput,
    fivethInput,
    sixthInput,
    sevenththInput,
    eigththInput,
    ninthInput,
    tenthInput,
  ]);

  const totalAmount = cart
    .reduce((acc, item) => {
      const price = parseFloat(item.price.replace("£", ""));
      return acc + price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col py-15 px-7">
      <main
        onClick={() => {
          setOpen(!open);
        }}
        className="bg-blue-400 flex gap-8 h-11 rounded-md cursor-pointer"
      >
        <article className="h-full w-[10px] bg-blue-900 rounded-l-md"></article>

        <article className="text-white font-semibold flex gap-3 items-center justify-center text-lg">
          Have a coupon code? Click here to enter your code
        </article>
      </main>

      {open && (
        <div className="flex flex-col justify-center gap-4 mt-5 pl-5 text-gray-600 checkout1-Open">
          <main>If you have a coupon code, please apply it below</main>

          <form
            value="bjbbjn"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex gap-4 items-center"
          >
            <input
              type="text"
              placeholder="Coupon code"
              className="text-black px-5 h-11 w-[60%] border-gray-500 rounded-sm border-1 outline-amber-400"
              required
            />
            <button className="bg-amber-400 px-7 py-[16px] text-black font-bold rounded-lg">
              APPLY COUPON
            </button>
          </form>
        </div>
      )}

      <br />
      <br />
      <br />
      <form
        className="grid justify-between lg:flex md:grid sm:grid gap-5"
        action=""
      >
        <main className="lg:w-[50%] w-full">
          <h1 className="font-bold text-2xl">Billing Details</h1>
          <br />

          <article className="flex gap-8 lg:w-full w-full">
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="firstName" className="font-medium flex">
                First Name{" "}
                <Asterisk fill="red" className="text-red-600" size={15} />
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-sm"
                onChange={(e) => {
                  setFirstInput(e.target.value);
                }}
                required
              />
            </span>

            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="lastName" className="font-medium flex">
                Last Name{" "}
                <Asterisk fill="red" className="text-red-600" size={15} />
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-sm"
                required
                onChange={(e) => {
                  setSecondInput(e.target.value);
                }}
              />
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="companyName" className="font-medium flex">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-md"
              />
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="Country" className="font-medium flex">
                Country / Region
                <Asterisk
                  fill="red"
                  className="text-red-600"
                  size={15}
                  required
                />
              </label>

              <select
                name="Country"
                id="Country"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-sm"
                onChange={(e) => {
                  setThirdInput(e.target.value);
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Select Country
                </option>
                <option value="United States">United States</option>
                <option value="Nigeria">Nigeria</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="India">India</option>
              </select>
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="address" className="font-medium flex">
                Street Address{" "}
                <Asterisk
                  fill="red"
                  className="text-red-600"
                  size={15}
                  required
                />
              </label>

              <section className="flex flex-col gap-3">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-md"
                  placeholder="House number and street name"
                  onChange={(e) => {
                    setFourthInput(e.target.value);
                  }}
                  required
                />

                <input
                  type="text"
                  name="address"
                  id="address"
                  className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-md"
                  placeholder="Apartment,suite,unit,etc. (optional)"
                />
              </section>
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="town" className="font-medium flex">
                Town / City
                <Asterisk fill="red" className="text-red-600" size={15} />
              </label>
              <input
                type="text"
                name="town"
                id="town"
                className="w-[100%] h-10 px-3 border-1 border-gray-400 outline-amber-400 rounded-md"
                onChange={(e) => {
                  setFivethInput(e.target.value);
                }}
                required
              />
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="state" className="font-medium flex">
                State / Province
                <Asterisk
                  fill="red"
                  className="text-red-600"
                  size={15}
                  required
                />
              </label>

              <select
                name="state"
                id="state"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-sm"
                onChange={(e) => {
                  setSixthInput(e.target.value);
                }}
                required
              >
                <option value="" disabled selected hidden>
                  Select State
                </option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Lagos">Lagos</option>
                <option value="Kano">Kano</option>
              </select>
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="postcode" className="font-medium flex">
                Postcode / ZIP
                <Asterisk fill="red" className="text-red-600" size={15} />
              </label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-md"
                placeholder="e.g. 100001 or SW1A 1AA"
                onChange={(e) => {
                  setSevenththInput(e.target.value);
                }}
                required
              />
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="phone" className="font-medium flex">
                Phone
                <Asterisk fill="red" className="text-red-600" size={15} />
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-[100%] h-10 px-3 border-1 border-gray-300 outline-amber-400 rounded-md"
                onChange={(e) => {
                  setEigththInput(e.target.value);
                }}
                required
              />
            </span>
          </article>
          <br />

          <article>
            <span className="flex gap-2 font-medium text-lg flex-col">
              <label htmlFor="email" className="font-medium flex">
                Email Address
                <Asterisk fill="red" className="text-red-600" size={15} />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-[100%] h-10 px-3 border outline-amber-400 border-gray-300 rounded-md"
                onChange={(e) => {
                  setNinthInput(e.target.value);
                }}
                required
              />
            </span>
          </article>
          <br />

          <article className="w-[100%] text-xl font-bold items-center flex justify-between">
            <span>Ship to a different address?</span>
            <input
              type="checkbox"
              onClick={() => {
                setOpen2(!open2);
              }}
            />
            <br />
          </article>
          {open2 && (
            <div className="mt-3">
              <label
                htmlFor="open2"
                className="font-extrabold text-red-600 text-xl"
              >
                Enter the additional adress
              </label>
              <input
                className="w-[100%] h-10 px-3 border outline-amber-400 border-gray-300 rounded-md mt-2"
                type="text"
                id="open2"
              />
              <br />
              <br />
              <br />
            </div>
          )}
          <br />

          <article>
            <textarea
              className="border w-full border-gray-400 outline-amber-400 px-5 rounded-lg py-2"
              id="note"
              name="note"
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
          </article>
        </main>

        <fieldset className="border-4 border-gray-500 h-fit py-10 lg:w-[40%] w-full px-5">
          <h1 className="h-10 border-b-1 border-gray-300 font-bold flex justify-between items-center">
            <span>Product</span>
            <span>Subtotal</span>
          </h1>

          <article className="flex flex-col w-full">{
            cart.map((cart,index)=>(
              <article key={index} className="flex justify-between items-center px-4 rounded-sm h-15 text-lg even:bg-gray-50 font-bold">
                <span className="flex gap-4">
              {cart.name} <p className="font-normal text-amber-400"> x {cart.quantity}</p> 
              </span>
              <p>{cart.price}</p>
              </article>
            ))
            }</article>
            <br />
            <p className="flex font-extrabold px-3 justify-between items-center h-17 text-amber-400 text-2xl border-t-3 border-b-3 border-amber-500">
              <span>TOTAL =</span>
            {totalAmount}
            </p>
            <br /><br />

          <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
            <input
              name="checkbox"
              id="Direct bank"
              className="h-10"
              type="radio"
              onChange={(e) => {
                setTenthInput(e.target.value);
                console.log(tenthInput);
              }}
              required
            />
            <label htmlFor="Direct bank">Direct bank transfer</label>
          </article>

          <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
            <input
              name="checkbox"
              id="Check payments"
              className="h-10"
              type="radio"
              onChange={(e) => {
                setTenthInput(e.target.value);
                console.log(tenthInput);
              }}
              required
            />
            <label htmlFor="Check payments">Check payments</label>
          </article>

          <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
            <input
              name="checkbox"
              id="Cash on delivery"
              className="h-10"
              type="radio"
              onChange={(e) => {
                setTenthInput(e.target.value);
                console.log(tenthInput);
              }}
              required
            />
            <label htmlFor="Cash on delivery">Cash on delivery</label>
          </article>

          <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
            <input
              name="checkbox"
              id="PayPal"
              className="h-10"
              type="radio"
              onChange={(e) => {
                setTenthInput(e.target.value);
                console.log(tenthInput);
              }}
              required
            />
            <label htmlFor="PayPal" className="flex gap-3">
              PayPal{" "}
              <a
                href="https://paypal.com"
                className="cursor-pointer text-amber-400"
              >
                What is Paypal
              </a>{" "}
            </label>
          </article>
          <br />
          <p className="text-gray-600 text-md">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <span className="text-amber-400 font-bold"> privacy policy.</span>
          </p>
          <br />
          <button
            onClick={() => {
              toast.dismiss();
              if (
                firstInput &&
                secondInput &&
                thirdInput &&
                fourthInput &&
                fivethInput &&
                sixthInput &&
                sevenththInput &&
                eigththInput &&
                ninthInput &&
                tenthInput
              ) {
                setDisabled(true);
                navigate("/sucOrder");
                toast.success("Order completed successfully");
              }
            }}
            disabled={!color || disabled}
            className={`font-bold tracking-widest py-3 rounded-md ${
              color ? "bg-amber-400" : "bg-gray-300"
            } ${color ? "cursor-pointer" : "cursor-not-allowed"}  w-full`}
          >
            PLACE ORDER
          </button>
        </fieldset>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
