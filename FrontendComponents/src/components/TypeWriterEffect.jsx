import { motion } from 'framer-motion';
import { span } from 'framer-motion/client';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function TypeWriterEffect() {
  return (
    <div className='flex h-screen items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800'>
        <BlockTextCard
        tag={"/ support"}
        text ={<>
        <strong>Have a Question? </strong>
        We'd Love to help! contact support for any issue you may face
        </>}
        examples={["Hello world what is your name?","Do you want to buy our product","This is a typewriter animation in framer motion","This component is made by  Himanshu Sharma"]}

        />
    </div>
  )
}

const BlockTextCard = ({tag,text,examples})=>{
    return(
        <div className='w-full max-w-xl space-y-6'>
            <div>
                <p className='mb-1.5 text-sm font-light uppercase'>{tag}</p>
                <hr className='border-neutral-700'/>
            </div>
            <p className='max-w-lg text-xl leading-relaxed'>{text}</p>
            
            <div>
                <TypeWrite examples={examples}/>
                <hr className='border-neutral-300'/>
            </div>

            <button className='w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100 cursor-pointer'>
                Contact Support
            </button>

        </div>
    )
}

const Letter_Delay = 0.025;
const BoxFadeDuration = 0.125;
const FadeDelay = 5;
const MainFadeDuration = 0.25;
const SwapDelayinMs = 5500;
const TypeWrite = ({examples})=>{
    const [exampleIndex,setExampleIndex] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(() => {
           setExampleIndex((prev) => (prev+1)%examples.length) 
        }, SwapDelayinMs);

        return ()=> clearInterval(intervalId)
    })

    return(<p className='mb-2.5 text-sm font-light uppercase'>
        <motion.span className='inline-block size-2 bg-neutral-950 mr-2'/>
        {examples[exampleIndex].split("").map((l,i)=>{
            return( <motion.span 
                initial={{opacity:1}}
                animate={{opacity:0}}
                transition={{delay:FadeDelay,duration:MainFadeDuration,ease:"easeInOut"}}
            className='relative' key= {`${exampleIndex}-${i}`}>
                <motion.span
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:i*Letter_Delay,duration:0}}
                >{l}</motion.span>
                <motion.span
                initial={{opacity:0}}
                animate={{opacity:[0,1,0]}}
                transition={{
                    delay : i*Letter_Delay,
                    times:[0,0.1,1],
                    duration:BoxFadeDuration,
                    ease:"easeInOut"
                }}
                 className = 'absolute bg-neutral-900 bottom-[3px] left-[1px] right-0 top-[3px]'></motion.span>
            </motion.span>)
        })}
    </p>)

}
export default TypeWriterEffect