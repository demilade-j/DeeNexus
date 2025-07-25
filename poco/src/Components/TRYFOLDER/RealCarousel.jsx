import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { useState } from "react"

export default function RealCarousel({slides}) {

    let [current,setCurrent]= useState(0);
    let previousSlide = () =>{
        if(current===0) setCurrent(slides.length -1)
        else setCurrent(current - 1)
    }

    let nextSlide = () =>{
        if(current===slides.length - 1) setCurrent(0)
        else setCurrent(current + 1)
    }

  return (
    <div className=" overflow-hidden relative">
          <div className={`flex transition ease-out duration-300`} style={{transform:`translateX(-${current*100}%)`}}>
          {slides.map((s) => {
              return <img className="w-98 bg-amber-500" src={s} alt="" />;
          })}

      </div><div className="top-0 absolute flex justify-between items-center w-full h-full px-10">
              <span onClick={previousSlide} className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowBigLeft />
              </span>
              <span onClick={nextSlide} className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                  <ArrowBigRight />
              </span>
          </div>
    </div>
  )
}
