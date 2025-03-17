import React, { useEffect } from 'react'
import {motion, useMotionTemplate, useMotionValue,animate} from 'framer-motion'

const COLORS = ["#13FFAA","#1E67C6","#CE84CF","#DD335C"
];

function AuroraBackground() {
    
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0, black 50%, ${color})`;

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px {color}`;

    useEffect(()=>{
        animate(color,COLORS,{
            ease:'easeInOut',
            duration:10,
            repeat:Infinity,
            repeatType:"mirror"
        })
    },[]);

  return (
    <motion.div
    style={{
        backgroundImage,
    }}
     className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-white'
    >

    <button className='rounded-lg  w-fit mx-auto px-2 bg-gray-800 text-gray-100 '>
        beta live now!
    </button>

    <h1 className='max-w-3xl mt-6 text-center font-medium text-5xl leading-16 lg:w-200 lg:mx-auto lg:text-7xl lg:leading-tighter bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent leading-tight'>
        Decrease your SAAS churn by over 90%
    </h1>

    <p className='text-center mt-5 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent lg:mx-auto lg:w-200 lg:text-2xl lg:mt-7'>
        this component was made by Himanshu sharma in React js 
        this is a component which contains animated aurora background
    </p>

    <motion.button
    whileHover={{scale:1.05}}
    whileTap={{scale:0.9}}
     className='rounded-3xl hover:cursor-pointer mt-5 w-fit mx-auto p-3'
    style={{
        border,
        boxShadow,
    }}>
        Start a free trial
    </motion.button>


    </motion.div>
  )
}

export default AuroraBackground