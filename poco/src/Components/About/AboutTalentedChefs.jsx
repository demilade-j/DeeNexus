import { Facebook, Instagram, Twitter } from "lucide-react"

const Chefs=[
    {
        src:'/box-team-1-2.jpg',
        position:'CHEF',
        name:'KAELION PIERCE',
        id: '1'
    },
    {
        src:'/box-team-2-1.jpg',
        position:'MANAGER',
        name:'ZYRON VEGA',
        id: '2'
    },
    {
        src:'/box-team-3-1.jpg',
        position:'CHEF',
        name:'ELENA CASTILLO',
        id: '3'
    }
]

export default function AboutTalentedChefs() {
  return (
    <div className="py-20 flex flex-col items-center justify-center">
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-amber-400 text-4xl font-[Norican]">Always Quality</h1>
            <h2 className="text-5xl font-bold">Our Talented Chefs</h2>
        </main>

        <main className="flex px-[1.5%] gap-5 justify-center items-center flex-wrap py-10">
        {Chefs.map((Chefs)=>(
            <main className="h-170 md:w-[48%] lg:w-[32%] border-2 border-gray-500 rounded-lg relative hover:scale-95 duration-500 cursor-pointer group" key={Chefs.id}>
                <div className="group-hover:bg-[#212020] relative h-130 duration-500 cursor-pointer">
                <img className="rounded-t-lg w-full h-[100%]  mix-blend-overlay " src={Chefs.src} alt="" />
                </div>
                <span className="bg-amber-400 px-2 py-2 rounded-sm ml-[42%] -mt-6 absolute">{Chefs.position}</span>
                <br />

                <article className="w-full flex flex-col items-center justify-center gap-1">
                <h1 className="font-bold text-[1.5rem]">
                {Chefs.name}
                </h1>
                <p className="text-gray-600 text-center">Everything We Pizza, We Pizza With Love. <br />Designer Fastfood</p>

                <aside className="flex gap-2">
                    <span><Instagram size={20}/></span>
                    <span><Facebook size={20}/></span>
                    <span><Twitter size={20} /></span>
                </aside>
                </article>
            </main>
        ))}
    </main>
    </div>
  )
}
