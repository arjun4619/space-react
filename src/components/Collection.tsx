import React from 'react';
import {apes} from '../content';
import {motion} from 'framer-motion'
import { fadeIn } from '../utils/motion';


const Collection: React.FC = () => {
  return (
    <section id='collection' className='container mx-auto py-44'>
        <div className='flex'>
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="w-1/3 space-y-6">
                <h6 className="text-sky-500 uppercase text-xl tracking-tight font-extrabold">Collection</h6>
                <h2 className="text-white uppercase text-5xl tracking-tight font-extrabold">Bored Apes Nft Items</h2>
                <p className="text-gray-500 w-96 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className="font-bold px-5 py-3 text-white bg-none border-2 border-white rounded-full hover:bg-white hover:text-blue-950">View on Opensea</button>
            </motion.div>
            <div className="w-2/3 ape-slider relative overflow-scroll">
                <motion.div className='flex flex-nowrap w-full relative' >
                    {apes.map((ape, index) => (
                        <img key={index} src={ape.img} alt='ape' className='w-72 h-96 object-cover cursor-pointer rounded-3xl mr-6' />
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Collection;