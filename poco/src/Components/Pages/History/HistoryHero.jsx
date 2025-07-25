export default function HistoryHero() {
  return (
    <div className="lg:py-20 lg:scale-100 md:py-1">
        <main className="py-15 flex flex-col gap-4 w-full items-center justify-center px-10">
            <h1 className="text-amber-400 font-semibold text-3xl">About Our Food</h1>
            <h2 className="font-bold text-5xl text-center">Delivering Awesome Since 1960</h2>
            <p className="text-center text-gray-600 text-[1.1rem]">Time flies when you do what you love. We know because we’ve been making great pizza since 1967. Along the way, we’ve grown to more than 750 restaurants from coast to coast, becoming a trusted brand and leader in the foodservice industry. We’re proud of the quality food we make – and the difference we make in communities across Canada. We’ve made a lot of pies – and memories – over the years. Find out what goes into both!</p>
            <h3 className="font-[Norican] text-5xl font-extralight">DeeNexus</h3>
        </main>

        <main className="w-full flex flex-col items-center justify-center py-10">
            <article className="flex flex-col gap-20 items-center justify-center">
                <h1 className="text-4xl font-bold">Our History</h1>
                <div className="flex flex-col w-full px-20 gap-45">
                    <main className="flex lg:flex-row items-center justify-between md:flex-col sm:flex-col flex-col">
                        <img className="h-65 w-110 rounded-2xl" src="/history_1960.webp" alt="" />
                        <span className="lg:w-[30%] w-full flex flex-col gap-4 md:w-110 sm:w-100">
                            <h1 className="text-5xl font-bold">The beginning</h1>
                            <p className="text-[1rem]">Deestars John Doe and brother, Peter bought “Nexus’s” – a pizza restaurant at Ypsilanti Mich with the price of 500 dollar and changed its name to “DeeNexus , Inc”</p>
                        </span>
                    </main>

                    <main className="flex items-center lg:flex-row-reverse md:flex-col justify-between sm:flex-col flex-col">
                        <img className="h-65 w-110 rounded-2xl" src="/history_1968.webp" alt="" />
                        <span className="lg:w-[30%] w-full flex flex-col gap-4 md:w-110 sm:w-100">
                            <h1 className="text-5xl font-bold">Bad Luck</h1>
                            <p className="text-[1rem]">In 1968, DeeNexus Pizza headquarter burnt down by fire. In 1965, Innstar Corp, a sugar supplier named Deestars sued DeeNexus's Pizza for the name of Dee Nexus</p>
                        </span>
                    </main>

                    <main className="flex items-center lg:flex-row md:flex-col justify-between sm:flex-col flex-col">
                        <img className="h-65 w-110 rounded-2xl" src="/history_1980.webp" alt="" />
                        <span className="lg:w-[30%] w-full flex flex-col gap-4  md:w-110 sm:w-100 ">
                            <h1 className="text-5xl font-bold">Growing</h1>
                            <p className="text-[1rem]">DeeNexus Pizza opened more 1,003 stores, increased total stores to 2,841 and became the fastest-growing pizza chain in the United States. The first DeeNexus Pizza store opened in the United States, in Luton The Deep Pan Pizza</p>
                        </span>
                    </main>                   

                    <main className="flex items-center lg:flex-row-reverse md:flex-col justify-between sm:flex-col flex-col">
                        <img className="h-65 w-110 rounded-2xl" src="/history_1990.webp" alt="" />
                        <span className="lg:w-[30%] w-full flex flex-col gap-4  md:w-110 sm:w-100">
                            <h1 className="text-5xl font-bold">Online Order</h1>
                            <p className="text-[1rem]">DeeNexus Pizza revolutionized the industry by launching its first online ordering system, making it easier than ever for customers to get their favorite pizzas delivered with just a few clicks. This innovation set the foundation for the brand’s rapid growth and dominance in the pizza market</p>
                        </span>
                    </main> 
                    
                    <main className="flex items-center lg:flex-row md:flex-col justify-between sm:flex-col flex-col">
                        <img className="h-65 w-110 rounded-2xl" src="/history_2010.webp" alt="" />
                        <span className="lg:w-[30%] w-full flex flex-col gap-4  md:w-110 sm:w-100">
                            <h1 className="text-5xl font-bold">2,000th Store</h1>
                            <p className="text-[1rem]">DeeNexus Pizza International opened its 2,000th store outside the United States. DeeNexus's celebrates 40 years of development around the world. At the same time, global sales reach more than $ 3.54 billion.</p>
                        </span>
                    </main> 

                    <main className="flex items-center lg:flex-row-reverse md:flex-col justify-between sm:flex-col flex-col">
                        <img className="h-65 w-110 rounded-2xl" src="/history_2020.webp" alt="" />
                        <span className="lg:lg:w-[30%] w-full flex flex-col gap-4 md:w-110 sm:w-100">
                            <h1 className="text-5xl font-bold">Celebrating 50 Years</h1>
                            <p className="text-[1rem]">In 2020, DeeNexus Pizza celebrated 50 years of operating. First store opened in Vietnam on 19 November 2020</p>
                        </span>
                    </main> 
                </div>
            </article>

            <article className="border-l-2 hidden lg:grid md:hidden sm:hidden absolute md:h-810 md:-ml-[37%] md:flex-col  lg:ml-30 border-l-amber-500 lg:h-610 lg:mt-28 lg:pt-25">
                <main className="lg:flex lg:relative lg:items-center lg:justify-center lg:h-fit lg:gap-2 md:absolute">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1960</h1>
                </main>

                <main className="flex absolute flex-row-reverse -left-38 mt-135 items-center justify-center h-fit gap-2">
                    <div className="text-amber-400 bg-amber-400 h-3 -pr-10.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1968</h1>
                </main>

                <main className="flex items-center justify-center mt-88 h-fit gap-2">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1970</h1>
                </main>

                <main className="flex absolute flex-row-reverse -left-38 mt-360 items-center justify-center h-fit gap-2">
                    <div className="text-amber-400 bg-amber-400 h-3 -pr-10.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1990</h1>
                </main>

                <main className="flex items-center justify-center mt-70 h-fit gap-2">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">2010</h1>
                </main>

                <main className="flex absolute flex-row-reverse -left-38 mt-580 items-center justify-center h-fit gap-2">
                    <div className="text-amber-400 bg-amber-400 h-3 -pr-10.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">2020</h1>
                </main>
            </article>

            <article className="border-l-2 hidden lg:hidden gap-900 flex-col md:flex sm:hidden left-1 absolute border-l-amber-500 h-830">
                <main className="flex gap-2 md:absolute items-center justify-center mt-40">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 h-[1px] text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1960</h1>
                </main>

                <main className="flex gap-2 md:absolute items-center justify-center mt-180">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 h-[1px] text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1968</h1>
                </main>

                <main className="flex gap-2 md:absolute items-center justify-center mt-340">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 h-[1px] text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1970</h1>
                </main>

                <main className="flex gap-2 md:absolute items-center justify-center mt-500">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 h-[1px] text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">1990</h1>
                </main>
                
                <main className="flex gap-2 md:absolute items-center justify-center mt-640">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 h-[1px] text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">2010</h1>
                </main>

                <main className="flex gap-2 md:absolute items-center justify-center mt-780">
                    <div className="text-amber-400 bg-amber-400 h-3 -ml-1.5 flex items-center justify-center w-3 rounded-full">.</div> <span className="w-15 bg-gray-200 h-[1px] text-gray-200"><hr /></span>
                    <h1 className="text-amber-400 font-bold text-3xl pb-2">2020</h1>
                </main>
            </article>
        </main>
    </div>
  )
}
