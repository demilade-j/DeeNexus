import { useNavigate } from 'react-router-dom';

export default function AfterBlogNavbar() {
    const navigate = useNavigate();
  return (
    <div className="py-8 pt-60 gap-2 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-6xl font-extrabold">Blog</h1>
        <div>
            <p className="text-gray-600 font-semibold text-lg"><span className='cursor-pointer' onClick={() =>{
                navigate('/')
            }}> Home&gt; </span><span className="text-black">Blog</span></p>
        </div>
    </div>
  )
}
