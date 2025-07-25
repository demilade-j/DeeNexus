export default function OfferMenu() {
  return (
    <div className='bg-red-600 gap-40 p-17 md:grid-cols-1 lg:flex items-center'>
        <main>
            <img className='h-80' src='/special offer burger.webp' />
            <img className='h-40 absolute mt-[-23rem] lg:ml-80' src='/30off.png' />
            <img className='h-25 absolute mt-[-23rem] lg:ml-[80%]' src='/special offer tomato.png' />
            <img className='h-25 absolute mt-[-4rem] lg:ml-[79%]' src='/special offer leaf.png' />
            <img className='h-27 absolute mt-[-3rem] lg:sml-150' src='/leaf 1.webp' />
        </main>

        <main className='flex flex-col items-center justify-center gap-8'>
            <h1 className='font-[Norican] text-amber-400 text-5xl'>Hot Fresh</h1>
            <h2 className='text-white text-8xl font-bold text-center'>SPECIAL OFFER</h2>

            <article className='flex gap-[1.4rem]'>
            <span className='flex items-center justify-center px-8 py-[0.7rem] text-white font-bold bg-red-400 rounded-2xl'>Days</span>
            <span className='flex items-center justify-center px-8 py-[0.7rem] text-white font-bold bg-red-400 rounded-2xl'>Hours</span>
            <span className='flex items-center justify-center px-8 py-[0.7rem] text-white font-bold bg-red-400 rounded-2xl'>Mins</span>
            <span className='flex items-center justify-center px-8 py-[0.7rem] text-white font-bold bg-red-400 rounded-2xl'>Secs</span>
            </article>

            <button className='px-8 py-3 rounded-lg bg-amber-400 font-bold'>Discover Now</button>
        </main>
    </div>
  )
}
