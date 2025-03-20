import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

function DraggableCards() {
  return (
    <div className='relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-900'>
      <h2 className='relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]'>
        ASTRO<span className='text-blue-800'>.</span>
      </h2>
        <Cards/>
    </div>
  )
}

const Cards = ()=>{
  const containerRef = useRef(null);
  return(
    <div ref={containerRef} className='absolute inset-0 z-10'>
      <Card containerRef={containerRef}
      className={"w-35 md:w-80"}
      src={'https://images.unsplash.com/photo-1599019594006-a7a2a6a4b09d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      rotate={"6deg"}
      top={"20%"}
      left={"5%"}

      />
      <Card containerRef={containerRef}
      className={"w-35 md:w-80"}
      src={'https://plus.unsplash.com/premium_photo-1680512467504-39224db53858?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      rotate={"-3deg"}
      top={"70%"}
      left={"35%"}

      />
      <Card containerRef={containerRef}
      className={"w-35 md:w-80"}
      src={'https://images.unsplash.com/photo-1564053051381-5cb91813736b?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      rotate={"10deg"}
      top={"60%"}
      left={"50%"}

      />
      <Card containerRef={containerRef}
      className={"w-35 md:w-80"}
      src={'https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      rotate={"-6deg"}
      top={"30%"}
      left={"25%"}

      />
    </div>
  )
}

const Card = ({containerRef,className,src,top,left,rotate})=>{
  const [zIndex,setzIndex] = useState(0);
  const updateZindex = ()=>{
      const elem = document.querySelectorAll(".drag-elements")
      let maxZindex = -Infinity;
      elem.forEach((elem)=>{
        let zIndex = parseInt(window.getComputedStyle(elem).getPropertyValue("z-index"))
        if(!isNaN(zIndex) && zIndex>maxZindex){
          maxZindex = zIndex;
        }
      })
      setzIndex(maxZindex+1);
  }

  return(
    <motion.img
    onMouseDown={updateZindex}
    src= {src}
    alt='Image '
    style={{
      top,
      left,
      rotate,
      zIndex,
    }}
     drag 
    dragConstraints={containerRef}
    dragElastic={0.5}
    className= {twMerge('drag-elements cursor-pointer absolute bg-white p-1 pb-4',className)}
    />

    
  )
}

export default DraggableCards