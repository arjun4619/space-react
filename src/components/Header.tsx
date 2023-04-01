import Diamond from '../assets/diamond3d.png';
import {BsShieldCheck} from 'react-icons/bs'
import {CiWallet} from 'react-icons/ci'
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {motion} from 'framer-motion';
import { fadeUp } from '../utils/motion';

const Header: React.FC = () => {
  return (
    <header className="container flex flex-col items-center mx-auto px-6 py-36">
        <div className='flex'>
        {/* Left Side */}
        <div className='flex flex-col items-start text-white w-1/2'>
            <h1 className="text-7xl font-extrabold uppercase tracking-tighter">Discover Collect Sell Digital Nft.</h1>
            <p className='text-2xl text-gray-400 leading-9 font-extralight max-w-lg tracking-wide mt-6'>Generate 10,000+ NFT Collection Only by uploading the layers, and get ready to sell your collection.</p>
            <div className='flex space-x-4 mt-6' >
                <button className="font-bold px-6 py-3 bg-blueMain rounded-full hover:bg-white hover:text-blue-950" >Get Started</button>
                <button className="font-bold px-6 py-3 bg-none border-2 border-white rounded-full hover:bg-white hover:text-blue-950">Join Discord</button>
            </div>
        </div>

        {/* Right Side */}
        <div className='w-1/2 relative' >
            <div className='gradient-03 top-5 left-20 w-[28rem] h-[40rem] absolute z-0'/>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <img src={Diamond} className="h-[34rem] relative mx-auto z-10" alt='diamond-eth' />
            </motion.div>
        </div>
        </div>

        {/* Bottom Side */}
        <div className="w-full rounded-full z-30 mt-24">
            <div className='flex justify-around text-white py-6 bg-gray-600 rounded-t-[60px] bg-opacity-50'>
                <p className='flex flex-col'>
                <span className=' font-extrabold text-7xl leading-tight' >1.5K+</span>
                <span className=' text-2xl'>Collections</span>
                </p>
                <p className='flex flex-col'>
                <span className=' font-extrabold text-7xl  leading-tight' >102K+</span>
                <span  className=' text-2xl'>Artworks</span>
                </p>
                <p className="flex flex-col">
                <span  className=' font-extrabold text-7xl  leading-tight'>3.2K+</span>
                <span  className=' text-2xl'>Artists</span>
                </p>
                
            </div>
            <div className='flex text-white py-6 pt-1'>
                <div className='bg-gray-600 bg-opacity-50 mr-1 p-20 pr-28 space-y-6 rounded-bl-[60px]'>
                <BsShieldCheck className=" text-blue-400" size="4rem"/>
                    <div className='space-y-2'>
                        <h6 className="text-white font-extrabold uppercase text-2xl" >Strong Security</h6>
                        <p className="text-gray-400 tracking-wide font-extralight">Secure transaction and record information with 2-factor authentication (2FA)</p>
                    </div>
                </div>
                <div className='bg-gray-600 bg-opacity-50 mr-1 p-20 pr-28 space-y-6'>
                <CiWallet size="4rem" className="text-purple-400"/>
                    <div className='space-y-2'>
                        <h6 className="text-white font-extrabold uppercase text-2xl" >Payment Options</h6>
                        <p className="text-gray-400 tracking-wide font-extralight">Flexible payment of methods with Visa, Mastercard, Paypal, bank transfer</p>
                    </div>
                </div>
                <div className='bg-gray-600 bg-opacity-50 p-20 space-y-6 rounded-br-[60px]'>
                <AiOutlineCheckCircle size="4rem" className="text-pink-300"/>
                    <div className='space-y-2'>
                        <h6 className="text-white font-extrabold uppercase text-2xl" >Market Updated</h6>
                        <p className="text-gray-400 tracking-wide font-extralight">The most accurate and trusted source for market cap, valuation, and cryptocurrency information</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;