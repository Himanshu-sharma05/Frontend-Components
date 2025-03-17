import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'

function StyleTabs() {
  return (
    <div>
       <SlideTabs/>
        <Tab/>
        {/* <Cursor/> */}
    </div>
  )
}

const SlideTabs = ()=>{
    const [position, setposition] = useState({
        left:0,
        opacity:0,
        width:0
    });


    return(
        <ul className='relative mt-50 mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'>
            <Tab setposition={setposition}>Home</Tab>
            <Tab setposition={setposition}>Pricing</Tab>
            <Tab setposition={setposition}>Features</Tab>
            <Tab setposition={setposition}>DOCS</Tab>
            <Tab setposition={setposition}>BLOGS</Tab>
            <Cursor position={position}/>
        </ul>
    )
}

const Tab = ({children,setposition})=>{
    const ref = useRef(null);

    return(
        <li
        ref = {ref}
        onMouseEnter={()=>{
            if(!ref.current) return;
            const {width} = ref.current.getBoundingClientRect();
            setposition({
                width,
                opacity:1,
                left:ref.current.offsetLeft,
            })
        }}
        onMouseLeave={()=>{
            setposition((prev) => ({
                ...prev,
                opacity:0
            }))
        }}
         className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base'>
            {children}
        </li>
    )
}

const Cursor = ({position})=>{
    return <motion.li 
    animate={position}
    className='absolute z-0 h-7 rounded-full bg-black w-20 md:h-12'/>
}

export default StyleTabs