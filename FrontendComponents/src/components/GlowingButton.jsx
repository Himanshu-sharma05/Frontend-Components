import React, { useEffect } from 'react'
import {motion, useMotionTemplate, useMotionValue,animate} from 'framer-motion'
const COLORS = ["#13FFAA","#1E67C6","#CE84CF","#DD335C"
];

function GlowingButton() {
        const color = useMotionValue(COLORS[0]);
        const backgroundImage = useMotionTemplate`linear-gradient(to bottom right, blue, ${color})`;
        useEffect(()=>{
                animate(color,COLORS,{
                    ease:'easeInOut',
                    duration:2,
                    repeat:Infinity,
                    repeatType:"mirror"
                })
            },[]);

  return (
    <div className=' p-50'>
        <motion.div 
        whileHover={{scale:1.05}}
        whileTap={{scale:0.9}}
        className='relative mx-auto w-fit group  '>
            <motion.div
            style={{backgroundImage,}}
             className=' absolute -inset-0.5 group-hover:cursor-pointer rounded-lg blur z-1'></motion.div>
            <button className='relative text-white p-4 mx-auto group-hover:cursor-pointer rounded-lg z-3 bg-black '>
                Glowing button
            </button>
        </motion.div>
    </div>
  )
}

export default GlowingButton