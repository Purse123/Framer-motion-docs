import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function BasicsOfMotion() {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-3">
        <motion.button 
            onClick={()=>setIsVisible(!isVisible)}
            className='bg-blue-500 h-10 w-56 rounded-xl text-white font-bold text-xl'
            layout
        >Show/Hide</motion.button>
        <AnimatePresence 
            // mode='popLayout'
        >
            {isVisible && (<motion.div 
                initial={{ 
                    rotate: '0deg',
                    opacity: 0
                }}
                animate={{ 
                    rotate: '180deg',
                    opacity: 1,
                    y: [0, 150, -150, -150, 0]
                }}
                exit={{     // apply this setting when out of screen
                    rotate: '0deg',
                    opacity: 0
                }}
                transition={{
                    duration: 1,
                    // delay: 0.5,
                    // type: 'spring'  // bounch back effect
                    ease: "backInOut",
                    timing: [0, 0.25, 0.5, 0.85, 1] 
                }}
                className="h-52 w-52 bg-black cursor-pointer gap-3"
                ></motion.div>)}
            </AnimatePresence>
    </div>
  )
}

export default BasicsOfMotion