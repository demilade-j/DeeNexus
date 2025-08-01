import { Asterisk } from "lucide-react";
import React, { useState } from "react";

export default function CheckoutHero1() {
  const [open, setOpen] = useState(false);
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
          <section>Have a coupon code?</section>
          <section>Click here to enter your code</section>
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
              className="text-black px-5 h-11 w-[60%] border-gray-500 rounded-sm border-1 outline-1 outline-gray-500"
              required
            />
            <button className="bg-amber-400 px-7 py-[16px] text-black font-bold rounded-lg">
              APPLY COUPON
            </button>
          </form>
        </div>
      )}

      <br /><br /><br />
      <form className="flex justify-between" action="">
        <main className="w-[50%]">
            <h1 className="font-bold text-2xl">Billing Details</h1>
            <br />

            <article className="flex gap-8 w-full">
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="firstName" className="font-medium flex">First Name <Asterisk fill="red" className="text-red-600" size={15}/></label>
                <input type="text" name="firstName" id="firstName" className="w-80 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-sm" required />
                </span>

                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="lastName" className="font-medium flex">Last Name  <Asterisk fill="red" className="text-red-600" size={15}/></label>
                <input type="text" name="lastName" id="lastName" className="w-80 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-sm" required />
                </span>
            </article>
            <br />

            <article>
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="companyName" className="font-medium flex">Company Name (Optional)</label>
                <input type="text" name="companyName" id="companyName" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-md"/>
                </span>
            </article>
            <br />

            <article>
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="Country" className="font-medium flex">Country / Region<Asterisk fill="red" className="text-red-600" size={15}  required/></label>

                <select name="Country" id="Country" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-sm" required>
                <option value="" disabled selected hidden>Select Country</option>
                <option value="United States" >United States</option>
                <option value="Nigeria" >Nigeria</option>
                <option value="United Kingdom" >United Kingdom</option>
                <option value="India" >India</option>
                </select>
                </span>
            </article>
            <br />

            <article>
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="address" className="font-medium flex">Street Address <Asterisk fill="red" className="text-red-600" size={15}  required/></label>

                <section className="flex flex-col gap-3">
                <input type="text" name="address" id="address" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-md" placeholder="House number and street name" required/>
                
                <input type="text" name="address" id="address" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-md" placeholder="Apartment,suite,unit,etc. (optional)"/>
                </section>
                </span>
            </article>
            <br />

            <article>
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="town" className="font-medium flex">Town / City<Asterisk fill="red" className="text-red-600" size={15}/></label>
                <input type="text" name="town" id="town" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-md"  required/>
                </span>
            </article>
            <br />

            <article>
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="state" className="font-medium flex">State / Province<Asterisk fill="red" className="text-red-600" size={15}  required/></label>

                <select name="state" id="state" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-sm" required>
                <option value="" disabled selected hidden>Select State</option>
                <option value="California" >California</option>
                <option value="New York" >New York</option>
                <option value="Lagos" >Lagos</option>
                <option value="Kano" >Kano</option>
                </select>
                </span>
            </article>
            <br />

            <article>
                <span className="flex gap-2 font-medium text-lg flex-col">
                <label htmlFor="postcode" className="font-medium flex">Postcode / ZIP<Asterisk fill="red" className="text-red-600" size={15}/></label>
                <input type="text" name="postcode" id="postcode" className="w-168 h-10 px-3 border-1 border-gray-300 outline-1 outline-gray-300 rounded-md"placeholder="e.g. 100001 or SW1A 1AA"  required/>
                </span>
            </article>
            <br />
        </main>

        <fieldset className="border-4 border-gray-500 py-10 w-[40%] px-5">
            <h1 className="h-10 border-b-1 border-gray-300 font-bold flex justify-between items-center">
                <span>Product</span>
                <span>Subtotal</span>
            </h1>

            <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
                <input name='checkbox' id='Direct bank' className="h-10" type="radio" required/>
                <label htmlFor="Direct bank">Direct bank transfer</label>
            </article>

            <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
                <input name='checkbox' id='Check payments' className="h-10" type="radio" required/>
                <label htmlFor="Check payments">Check payments</label>
            </article>

            <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
                <input name='checkbox' id='Cash on delivery' className="h-10" type="radio" required/>
                <label htmlFor="Cash on delivery">Cash on delivery</label>
            </article>

            <article className="flex gap-1 items-center border-b-1 border-gray-300 h-14 text-[1.2rem] font-semibold">
                <input name='checkbox' id='PayPal' className="h-10" type="radio" required/>
                <label htmlFor="PayPal" className="flex gap-3">PayPal <a href="https://paypal.com" className="cursor-pointer text-amber-400">What is Paypal</a> </label>
            </article>
            <br />
            <p className="text-gray-600 text-md">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-amber-400 font-bold"> privacy policy.</span></p>
            <br />
            <button className="font-bold tracking-widest py-3 rounded-md bg-amber-400 w-full">PLACE ORDER</button>
        </fieldset>
      </form>
    </div>
  );
}
