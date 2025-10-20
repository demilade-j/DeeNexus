import { Mail, MapPinCheckInside, Smartphone } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="flex flex-col gap-6 py-7W pt-10">
        <main className='flex flex-col gap-4 items-center justify-center'>
            <h1 className="font-extrabold text-[2.7rem]">Call us or visit place</h1>
            <p className="text-md">Contact us anytime! We're here to assist you with any inquiries.</p>
        </main>

        <main className="lg:flex sm:grid-cols-1 md:scale-80 md:flex grid-cols-1 gap-5 justify-between px-8 pt-10">
            <article className="flex flex-col gap-4 items-center justify-center">
                <span><Smartphone className="text-amber-400" size={60}/></span>
                <h1 className="font-extrabold text-3xl">Phone:</h1>
                <p className="text-gray-600 text-center">+234 705-7723-767 <br />+234 802-7571-175</p>
            </article>

            <article className="flex flex-col gap-4 items-center justify-center">
                <span><MapPinCheckInside className="text-amber-400" size={60}/></span>
                <h1 className="font-extrabold text-3xl">Address:</h1>
                <p className="text-gray-600 text-center">10 Musibau Adegbola,Ikotun/Idimu <br />Lagos 10001 Nigeria</p>
            </article>

            <article className="flex flex-col gap-4 items-center justify-center">
                <span><Mail className="text-amber-400" size={60}/></span>
                <h1 className="font-extrabold text-3xl">Email:</h1>
                <p className="text-gray-600 text-center"> demilade228@gmail.com <br />johnson@gmail.com</p>
            </article>
        </main>
    </div>
  )
}
