import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import {motion} from 'framer-motion';
import { footerAnimate } from '../utils/motion';

const Footer: React.FC = () => {
  return (
    <motion.footer variants={footerAnimate} initial="hidden" whileInView="show" id='footer' className='container mx-auto py-20'>
        <div className='flex'>
            <div className='flex flex-col text-white w-1/2'>
                <h6 className="text-white text-xl uppercase tracking-tight font-extrabold mb-5">Space</h6>
                <div className='flex mb-20 gap-x-5'>
                    <BsTwitter size="1.5rem" />
                    <BsInstagram size="1.5rem"/>
                    <BsInstagram size="1.5rem" />
                    <BsGithub size="1.5rem" />
                </div>
                <p className="text-gray-500 w-96 text-lg">All rights reserved &copy; 2023.</p>
            </div>
            <div className='flex justify-between w-1/2'>
                <div className='flex flex-col w-1/3 space-y-2'>
                    <h6 className="text-white uppercase text-lg tracking-tight font-extrabold">Marketplace</h6>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">About us</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Our team</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Team details</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Error 404</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Cart page</p>
                </div>

                <div className='flex flex-col w-1/3 space-y-2'>
                    <h6 className="text-white uppercase text-lg tracking-tight font-extrabold">Company</h6>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200 ">Wallet</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200 ">Create page</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200 ">Login page</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200 ">Registration</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200 ">Checkout</p>
                </div>

                <div className='flex flex-col w-1/3 space-y-2'>
                    <h6 className="text-white uppercase text-lg tracking-tight font-extrabold">Services</h6>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Contact us</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Shop page</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Shop details</p>
                    <p className="text-gray-500 text-lg cursor-pointer hover:text-gray-200">Collectors</p>
                </div>
            </div>
        </div>
    </motion.footer>
  )
}

export default Footer;