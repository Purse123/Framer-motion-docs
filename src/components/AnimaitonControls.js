import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
// control the animation of another component with action on another component
function AnimaitonControls() {
  const control = useAnimationControls();
  
  const handleClick = () => {
    control.start("flip");
  }
  return (
    <div className='animationControls h-screen w-full flex flex-col justify-center items-center gap-3'>
      <button
        className='bg-blue-500 text-white h-10 w-56 font-semibold text-xl rounded-xl'
        onClick={handleClick}
      >Flip it</button>

      <motion.div
        className="h-52 w-52 bg-black cursor-pointer"
        variants={{
          initial: {
            rotate: '0deg',
          },
          flip: {
            rotate: '360deg',
          }
        }}
        initial="initial"
        animate={control}
      ></motion.div>
    </div>
  )
}

export default AnimaitonControls