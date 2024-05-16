import React from 'react'
import { motion, MotionConfig } from 'framer-motion'

function Gestures() {
  return (
    <div className='gestures h-screen w-full flex items-center justify-center flex-col gap-8'>
        <MotionConfig
        transition={{
            duration: 0.2,
            ease: "easeIn"
        }}>
            <motion.button 
                className='bg-blue-600 text-white h-10 w-56 font-semibold text-xl rounded-xl'
                whileHover={{
                    scale: 1.05
                }}
                whileTap={{
                    scale: 0.95,
                    rotate: "2deg"
                }}
                >Click me!</motion.button>
            <motion.button 
                className='bg-red-400 text-white h-10 w-56 font-semibold text-xl rounded-xl'
                whileHover={{
                    scale: 1.05
                }}
                whileTap={{
                    scale: 0.95,
                    rotate: "2deg"
                }}
                
                >Click me!</motion.button>
            </MotionConfig>
    </div>
  )
}

export default Gestures