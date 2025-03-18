import { motion } from 'framer-motion'
import React from 'react'

function RevealLink() {
  return (
    <section className='grid h-screen place-content-center  bg-green-300'>
        <FlipLink href={"#"}>Twitter</FlipLink>
        <FlipLink href={"#"}>Linkedin</FlipLink>
        <FlipLink href={"#"}>Facebook</FlipLink>
        <FlipLink href={"#"}>Instagram</FlipLink>
    </section>
  )
};

const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLink = ({href,children})=>{
    return(<motion.a
        initial= "initial"
        whileHover="hovered"
         href={href}
          className='relative block font-[Poppins] overflow-hidden font-bold uppercase whitespace-nowrap text-6xl  '
          style={{
            lineHeight:0.9
          }}>
            <div>
                {children.split("").map((l,i)=>{
                    return(<motion.span
                    transition={{
                        duration:DURATION,
                        ease:"easeInOut",
                        delay:STAGGER * i
                    }}
                    className='inline-block'
                    variants={{
                        initial:{y:0},
                        hovered:{y:"-100%"}
                    }}
                         key={i}>{l}</motion.span>)
                })}
            </div>
            <div className='absolute inset-0'>
                {children.split("").map((l,i)=>{
                    return(<motion.span 
                        className='inline-block'
                        transition={{
                            duration:DURATION,
                            ease:"easeInOut",
                            delay:STAGGER * i
                        }}
                        variants={{
                            initial:{y:"100%"},
                            hovered:{y:0}
                        
                        }}
                        key={i}>{l}</motion.span>)
                })}
            </div>
          </motion.a>)
}

export default RevealLink