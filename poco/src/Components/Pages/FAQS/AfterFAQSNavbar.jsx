import { useNavigate } from 'react-router-dom';

export default function AfterFAQSNavbar() {
    const navigate = useNavigate();
  return (
    <div className="py-8 pt-60 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-extrabold">Our Faq</h1>
        <div>
            <p className="text-gray-600 font-semibold text-lg"><span className='cursor-pointer' onClick={() =>{
                navigate('/')
            }}> Home&gt; </span><span className="text-black">Our Faq</span></p>
        </div>
    </div>
  )
}
