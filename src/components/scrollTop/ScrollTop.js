import {BiUpArrow} from "react-icons/bi"
import { useState } from "react"


const ScrollTop = () => {

    const[visible, setVisible] = useState(false)

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300){
            setVisible(true )
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    }

    

    window.addEventListener("scroll", toggleVisible)

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

  return (
    <div className={visible? "block" : "hidden"}>
        <div className='fixed right-8 bottom-44' onClick={scrollToTop}>
            <div className='bg-cyan-900 rounded-full h-12 w-12 text-gray-900 
            font-bold cursor-pointer flex items-center justify-center text-2xl'
            >
                <BiUpArrow />
            </div>
        </div>
    </div>
  )
}

export default ScrollTop