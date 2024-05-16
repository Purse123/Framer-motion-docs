import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

function ScrollAnimation() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress);

    const background = useTransform( scrollYProgress, 
        [0, 0.25, 1], [ "rgb(173,203,227)", "rgb(75,134,180)", "rgb(42,77,105)" ] 
    )

  return (
    <div className='scrollAnimation h-150 w-full flex items-center flex-col'>

        <motion.div
            className='origin-left sticky top-0 w-full h-5'
            style={{
                scaleX,
                // scaleX: scrollYProgress
                background
            }}
        />

        <div className='text-container max-w-[1000px]'>
            <p>
                Esse voluptate do magna sunt pariatur est. Dolore officia cillum magna est laborum nisi adipisicing. Est enim laboris officia excepteur qui quis cupidatat veniam ipsum ea reprehenderit magna fugiat magna. Qui nisi ipsum quis ullamco officia aliquip et magna velit irure incididunt mollit. Do nulla consectetur dolore tempor officia nulla cupidatat cillum. Amet irure esse ea tempor est tempor veniam tempor.
            </p>
            <br/>
            <p>
                Ad consequat duis nisi sunt sit ipsum. Magna cillum deserunt pariatur eu. Cillum aliqua et anim ad veniam adipisicing voluptate ea dolore laboris aliquip in cillum. Velit duis laboris voluptate id laboris officia amet exercitation. Eu eiusmod consequat culpa dolor exercitation ut qui ad. Eiusmod commodo reprehenderit esse nulla labore officia nulla labore consequat.
            </p>
            <br/>
            <p>
                Duis consequat amet aute magna. Cupidatat dolore sint consectetur laborum. Duis velit dolore Lorem aute. Est deserunt incididunt amet sit aliquip duis deserunt. Adipisicing id elit nulla nisi.
            </p>
            <br/>
            <p>
                Consequat laborum cupidatat fugiat enim occaecat aliqua laborum consectetur in eu. Dolor proident ea voluptate dolore est commodo qui. Incididunt culpa consectetur ullamco officia ea irure enim quis incididunt id tempor. Dolore adipisicing ut adipisicing ex consectetur dolore enim do consectetur culpa elit anim nostrud. Minim aliquip commodo incididunt ullamco aliquip et cillum ipsum ex aliqua ad amet commodo officia. Sunt aliquip nostrud cupidatat non incididunt qui reprehenderit esse.
            </p>
            <br/>
            <p>
                Esse voluptate do magna sunt pariatur est. Dolore officia cillum magna est laborum nisi adipisicing. Est enim laboris officia excepteur qui quis cupidatat veniam ipsum ea reprehenderit magna fugiat magna. Qui nisi ipsum quis ullamco officia aliquip et magna velit irure incididunt mollit. Do nulla consectetur dolore tempor officia nulla cupidatat cillum. Amet irure esse ea tempor est tempor veniam tempor.
            </p>
            <br/>
            <p>
                Ad consequat duis nisi sunt sit ipsum. Magna cillum deserunt pariatur eu. Cillum aliqua et anim ad veniam adipisicing voluptate ea dolore laboris aliquip in cillum. Velit duis laboris voluptate id laboris officia amet exercitation. Eu eiusmod consequat culpa dolor exercitation ut qui ad. Eiusmod commodo reprehenderit esse nulla labore officia nulla labore consequat.
            </p>
            <br/>
            <p>
                Consequat laborum cupidatat fugiat enim occaecat aliqua laborum consectetur in eu. Dolor proident ea voluptate dolore est commodo qui. Incididunt culpa consectetur ullamco officia ea irure enim quis incididunt id tempor. Dolore adipisicing ut adipisicing ex consectetur dolore enim do consectetur culpa elit anim nostrud. Minim aliquip commodo incididunt ullamco aliquip et cillum ipsum ex aliqua ad amet commodo officia. Sunt aliquip nostrud cupidatat non incididunt qui reprehenderit esse.
            </p>
            <br/>
            <p>
                Consequat laborum cupidatat fugiat enim occaecat aliqua laborum consectetur in eu. Dolor proident ea voluptate dolore est commodo qui. Incididunt culpa consectetur ullamco officia ea irure enim quis incididunt id tempor. Dolore adipisicing ut adipisicing ex consectetur dolore enim do consectetur culpa elit anim nostrud. Minim aliquip commodo incididunt ullamco aliquip et cillum ipsum ex aliqua ad amet commodo officia. Sunt aliquip nostrud cupidatat non incididunt qui reprehenderit esse.
            </p>
            <br/>
            <p>
                Esse voluptate do magna sunt pariatur est. Dolore officia cillum magna est laborum nisi adipisicing. Est enim laboris officia excepteur qui quis cupidatat veniam ipsum ea reprehenderit magna fugiat magna. Qui nisi ipsum quis ullamco officia aliquip et magna velit irure incididunt mollit. Do nulla consectetur dolore tempor officia nulla cupidatat cillum. Amet irure esse ea tempor est tempor veniam tempor.
            </p>
            <br/>
            <p>
                Ad consequat duis nisi sunt sit ipsum. Magna cillum deserunt pariatur eu. Cillum aliqua et anim ad veniam adipisicing voluptate ea dolore laboris aliquip in cillum. Velit duis laboris voluptate id laboris officia amet exercitation. Eu eiusmod consequat culpa dolor exercitation ut qui ad. Eiusmod commodo reprehenderit esse nulla labore officia nulla labore consequat.
            </p>
            <br/>
            <p>
                Consequat laborum cupidatat fugiat enim occaecat aliqua laborum consectetur in eu. Dolor proident ea voluptate dolore est commodo qui. Incididunt culpa consectetur ullamco officia ea irure enim quis incididunt id tempor. Dolore adipisicing ut adipisicing ex consectetur dolore enim do consectetur culpa elit anim nostrud. Minim aliquip commodo incididunt ullamco aliquip et cillum ipsum ex aliqua ad amet commodo officia. Sunt aliquip nostrud cupidatat non incididunt qui reprehenderit esse.
            </p>
            <br/>
        </div>
    </div>
  )
}

export default ScrollAnimation