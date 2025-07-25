import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
export default function AfterContactHero() {
    let [email,setEmail] = useState('')
    let [subject,setSubject] = useState('')
    let [comment,setComment] = useState('')
    const navigate = useNavigate();
  return (
    <div>
      <fieldset className="py-3 px-5 w-[95%] border-1 border-gray-400 mx-5 rounded-2xl lg:flex grid-cols-1 items-center justify-between">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6830016413246!2d3.2668778750405827!3d6.561638893431575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8fe4a4bee691%3A0xe9ebaa880a2c88a0!2s10%20Musibau%20Adegbola%20St%2C%20Ikotun%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1752955862858!5m2!1sen!2sng"

          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl lg:w-150 w-full border-2 border-gray-400"
        ></iframe>

        <main className="flex flex-col gap-10">
            <article className='flex flex-col gap-4'>
                <h1 className="font-extrabold text-4xl">Send us a <br /> message</h1>
                <p className="text-lg flex-wrap">Got questions or need assistance? Drop us a message, and we'll get back to you ASAP!</p>
            </article>

            <article>
                <form className="flex flex-col gap-4">
                    <input className="h-12 w-full outline-black border-2 border-gray-600 rounded-2xl px-5" type="text" placeholder='Your name (optional)'/>
                    <input className="h-12 w-full outline-black border-2 border-gray-600 rounded-2xl px-5" type="email" placeholder='Email' onChange={(e) =>{
                        setEmail(e.target.value)
                        console.log(email)
                    }} required />
                    <input className="h-12 w-full outline-black border-2 border-gray-600 rounded-2xl px-5" type="text" placeholder='Subject' onChange={(e) =>{
                        setSubject(e.target.value)
                        console.log(subject)
                    }} required />
                    <textarea className="h-40 w-full outline-black border-2 border-gray-600 rounded-2xl px-5 py-3" name="" id="" placeholder="Comment" onChange={(e) =>{
                        setComment(e.target.value)
                        console.log(comment)
                    }} required></textarea>
                    <Link onClick={()=>{
                      setTimeout(() => {
                        toast.loading("Please Wait,Analyzing Form")
                      }, 10);
                      setTimeout(() => {
                        toast.dismiss()
                        }, 3500);
                      setTimeout(() => {
                        if((subject && comment && (email.match(/@.+\.+./)))){
                          toast.success("Form Submitted Successfully!!!")
                          setTimeout(() => {
                            navigate('/')
                          }, 4000);
                        }else{
                          if(!email.match(/@.+\.+./)){
                            toast.error('Put @gmail.com behind your email')
                          }else{
                            toast.error('Fill all fields')
                          }
                        }
                      }, 3000);
                    }}><button type="submit" className="px-5 py-3 rounded-lg bg-amber-400 font-bold">Submit</button></Link> 
                </form>
            </article>
        </main>
      </fieldset>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
