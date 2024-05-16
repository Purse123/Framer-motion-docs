import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView)
  }, [isInView])

  return (
    <div className='viewBasedAnimations h-150 bg-slate-400 flex items-center justify-center flex-col gap-96'>
      <motion.div 
        className='bg-black h-52 w-52'
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1
        }}
      />
      <div 
        ref={ref}
        className='h-52 w-52'
        style={{
          background: isInView? "blue" : "red",
          transition: "3s"
        }}
      />
    </div>
  )
}

export default ViewBasedAnimations