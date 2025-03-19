import { motion, MotionConfig } from 'framer-motion'
import React from 'react'
import { useState } from 'react'

function HoverMenu() {
  return (
    <div>
        <AnimatedButton/>
    </div>
  )
}

const AnimatedButton = ()=>{
    const [active, setactive] = useState(false);
    return(<motion.button
        onClick={()=> setactive((prev)=> !prev)}
    className="relative h-20 w-20 bg-black ml-[40%] mt-50 cursor-pointer hover:bg-amber-200 rounded-full transition-colors"
     animate = {active ? "open": "closed"}
    >
        <motion.span
        variants={{
            open:{
                rotate:"45deg",
                top:["35%","50%","50%"]
            },
            closed:{
                rotate:"0deg",
                top:["50%","50%","35%"]
            }
        }}

        transition={{
            duration:1,
            ease:"easeInOut"
        }}
        style={{
            top:"35%", left:"50%", x:"-50%", y:"-50%"
        }}
        className='h-1 w-15 bg-white absolute top-35%'
        />
        <motion.span
        variants={{
            open:{
                rotate:["0deg","0deg","-45deg"],
                
            },
            closed:{
                rotate:"0deg",
                
            }
        }}
        transition={{
            duration:1,
            ease:"easeInOut"
        }}
        style={{
            top:"50%", left:"50%", x:"-50%", y:"-50%"
        }}
        className='h-1 w-15 bg-white absolute '
        />
        <motion.span
        transition={{
            duration:1,
            ease:"easeInOut"
        }}
        style={{
            bottom:"30%", right:0, x:"-50%", y:"-50%"
        }}
        className='h-1 w-7 bg-white absolute '
        />
        
        
    </motion.button>)
}

export default HoverMenu