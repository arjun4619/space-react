import React from 'react';
import Meka from "../assets/meka.png"
import {motion} from 'framer-motion';
import { fadeIn } from '../utils/motion';

const About: React.FC = () => {
  return (
    <section id='about' className='container mx-auto py-44'>
        <div className='flex' >
            <img src={Meka} alt='meka' className=" h-[28rem] w-1/2 mr-14 rounded-3xl"/>
            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className='flex flex-col w-1/2 items-start px-8 mr-32'>
                <h6 className="text-sky-500 uppercase text-xl tracking-tight font-extrabold" >About Us</h6>
                <h2 className="text-white font-extrabold uppercase text-5xl tracking-tighter leading-tight mb-8" >Discover more and collect and sell rare nfts</h2>
                <p className='text-gray-400 tracking-wide leading-8 mb-6' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="flex flex-wrap max-w-md text-white text-1xl space-x-2 space-y-2" >
                    <span className="bg-gray-600 bg-opacity-50 text-center p-2 px-4 pt-3 rounded-3xl" >Wide range of platforms</span>
                    <span className='bg-gray-600 bg-opacity-50 p-2 px-4 rounded-3xl' >World class artists</span>
                    <span className='bg-gray-600 bg-opacity-50 p-2 px-4 rounded-3xl'>Any type of assets</span>
                    <span className='bg-gray-600 bg-opacity-50 p-2 px-4 rounded-3xl'>Fast payments</span>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default About;