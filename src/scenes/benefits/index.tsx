import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
   <section
   id='benefits'
   className="mx-auto min-h-full w-5/6 py-20"
   >
    <motion.div
    onViewportEnter={() => {setSelectedPage(SelectedPage.Benefits)}}
    >
        <div>
           <Htext>MORE THAN JUST A GYM</Htext>
           <p className='my-5 text-sm'>
            we provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals
            with ease. we provide true care into each and every individual.
           </p>

           {/* BENEFITS */}
           <div className="md:flex items-center justify-between gap-8 md:flex">

           </div>
        </div>

    </motion.div>
   </section>
  )
}

export default Benefits;