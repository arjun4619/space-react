import React from 'react';
import Kobi from '../assets/kobi.png';
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';

const JoinUs: React.FC = () => {
  return (
    <section className='join relative container mx-auto py-44'>
        <div className='gradient-03 top-28 left-20 w-[28rem] h-[40rem] absolute z-0'/>
        <div className='bg-[#2523f3] flex py-20 px-60 gap-x-10 rounded-3xl z-10'>
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="w-1/2 h-full relative">
                <img src={Kobi} alt='person' className="absolute -top-52 right-28" />
            </motion.div>
            <div className='flex justify-self-end flex-col space-y-8 w-1/2'>
            <h2 className="text-white uppercase text-6xl tracking-tighter font-extrabold">Join us now</h2>
            <p className="text-gray-300 w-96 text-lg">Sapiente expedita hic obcaecati, laboriosam similique omnis </p>
        <button className="font-bold px-5 py-3 w-fit text-white bg-none border-2 border-white rounded-full hover:bg-white hover:text-blue-950">Join Tournament</button>
            </div>
        </div>
    </section>
  )
}

export default JoinUs;