import { motion } from 'framer-motion'
import React from 'react'

function AnimatedDoodle() {
  return (
    <div className='h-100% w-full py-200 bg-black'>
        <section className='text-white text-center flex items-center justify-center bg-green-800 h-100 w-full text-5xl font-[Poppins]'>
            <p>Lorem ipsum, dolor sit amet <span className='relative'>consectetur
            <svg className='absolute top-0 left-0 -translate-y-8 -translate-x-5' width="340" height="95" viewBox="0 0 340 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
initial={{pathLength :0}}
whileInView = {{pathLength:1}}
transition={{
    duration:1.25,
    ease:"easeInOut"
}}
 d="M153.5 19L54.9996 34.5C54.9996 34.5 -11.0004 46.5 2.99963 69C16.9996 91.5 37.4996 93.5 37.4996 93.5H96.4996H214H302C302 93.5 335.804 85.9545 338.5 69C341.149 52.3387 312.5 34.5 312.5 34.5H214C214 34.5 167.637 44.657 141 34.5C120.784 26.7917 96.4996 1.5 96.4996 1.5" stroke="#1A1A1A" stroke-width="3"/>
</svg>

</span> adipisicing elit. Sequi quod dolore, similique necessitatibus molestiae placeat. Aliquid quo unde consectetur quisquam.</p>
        </section>
    </div>
  )
}

export default AnimatedDoodle