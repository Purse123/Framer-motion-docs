npm install framer-motion
import { motion } from "framer-motion"
<motion.div></motion.div>
_____________________________________________

initial, animate, transition,
<motion.div 
    initial={{ }}
    animate={{ }}
    transition={{ }}
></motion.div>
_____________________________________________

instead of only passing a single value we can give multiple keyframe value
by passing value in array
eg:
<motion.div
    animate={{
        x: [0, 50, 10, 100, 0]
    }}
></motion.div>

we can further control the keyframe timing with percentages. eg:
<motion.div
    animate={{
        x: [0, 50, 10, 100, 0]
    }}
    duration={{
        duration: 1,
        timing: [0, 0.25, 0.5, 0.85, 1]             // set with percentages
    }}
></motion.div>

_____________________________________________

to toggle:
const [isVisible, setIsVisible] = useState(true);

<button 
    onClick={()=>setIsVisible(!isVisible)}
>Show/Hide</button>

{isVisible && ( <motion.div/> )}
_____________________________________________

"AnimatePresence" allows components to animate out when they're removed from the React tree.
<AnimatePresence>
    {isVisible && ( <motion.div exit={{}}/> )}    // used in toggle option
</AnimatePresence>

we can use exit={}, as initial or animate       // when element exit out of screen it animate by exit={{}}
_____________________________________________

there are different mode in AnimatePresence
<AnimatePresence 
    mode='popLayout'                // instantly go to the position remove the animation and do the task given
    /* add layout to button for smooth movement */
></AnimatePresence>
_____________________________________________

there are many gesture handler like whileTap, whileFocus...etc

import { MotionConfig } from 'framer-motion'
<MotionConfig></MotionConfig>       // define transition in this and it will be apply on every child

_____________________________________________

view based animation
we can use whileInView attribute in motion.div like:
    <motion.div
    initial={{ }}
    whileInView={{ }}
    />

--> we can also use by passing ref:
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

useEffect(() => {
    console.log(isInView)               // just for note not needed in program
}, [isInView])

<div 
    ref={ref}
    style={{
        background: isInView? "blue" : "red",
        transition: "3s"
    }}
/>
_____________________________________________

we can control the animation by useInView hook
const isInView = useInView(ref, { once: true });    // { once: true } helps to animate only once

const isInView = useInView(ref);    // every time when it is view
_____________________________________________


working with scroll animation
we use useScroll hook we define from framer-motion
-------import { useScroll } from 'framer-motion'---

it return various value like
a) scrollXProgress or scrollYProgress -> it returns value 0% - 100% according to scroll progression (relative value)
b) scrollX or scrollY -> it returns value according to scroll position (absolute value)

const { scrollYProgress } = useScroll();

<motion.div
    style={{
        scaleX: scrollYProgress
    }}
/>
_____________________________________________

to use spring effect we can use sprink hook

const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress);
<motion.div
    style={{
        scaleX
    }}
/>
______________________________________________

to transform any value from another value we can use another hook useTransform()

const { scrollYProgress } = useScroll();
const background = useTransform( scrollYProgress, 
    [0, 0.25, 1], [ "rgb(173,203,227)", "rgb(75,134,180)", "rgb(42,77,105)" ] 
)

{/* first is the parameter, second is the percentages keyframe and last is the value at that keyframe */}

<motion.div
    style={{
        background
    }}
/>