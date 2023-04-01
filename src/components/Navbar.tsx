import React from 'react'
import {BiMoon, BiSun} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { navAnimate } from '../utils/motion'

const Navbar: React.FC = () => {
  return (
    <motion.nav variants={navAnimate} initial="hidden" whileInView="show" className="relative p-6">
        <div className="flex container mx-auto items-center justify-between" >
            <div className='p-2'>
                <h1 className='text-white font-bold uppercase text-3xl' >Space</h1>
            </div>
            {/* Nav Items */}
            <div className='flex space-x-6 font-bold mr-20 text-white text-xl'>
                <button className='uppercase tracking-tighter'>Home</button>
                <button className='uppercase tracking-tighter'>MarketPlace</button>
                <button className='uppercase tracking-tighter'>Blog</button>
                <button className='uppercase tracking-tighter'>Road Map</button>
            </div>
            {/* Theme Toggle */}
            <div className='flex items-center space-x-2 ml-64' >
            <BiMoon size="2rem" className='text-white' />
            <label className="switch ">
            <input type="checkbox" />
            <span className="slider round"></span>
            </label>
            <BiSun size="2rem" className='text-white' />
            </div>
            {/* Button */}
            <button className="text-white font-bold px-5 py-3 bg-blueMain rounded-full hover:bg-white hover:text-blue-950" >Connect Wallet</button>
        </div>
    </motion.nav>
  )
}

export default Navbar