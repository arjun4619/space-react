import React from 'react'
import {ImOmega} from 'react-icons/im';
import {motion} from "framer-motion";
import { fadeUp } from '../utils/motion';

let features = [
    {
        img: <ImOmega />,
        title: "Fueling the Metaverse",
        desc: "The metaverse is a vision of what many in the computer industry believe is the next iteration of the internet: a single, shared, immersive, persistent, 3D virtual space where humans experience life in ways.",
    },
    {
        img: <ImOmega />,
        title: "Initial Metaverse Offering",
        desc: "The metaverse is a vision of what many in the computer industry believe is the next iteration of the internet: a single, shared, immersive, persistent, 3D virtual space where humans experience life in ways.",
    },
    {
        img: <ImOmega />,
        title: "Incubation",
        desc: "The metaverse is a vision of what many in the computer industry believe is the next iteration of the internet: a single, shared, immersive, persistent, 3D virtual space where humans experience life in ways.",
    },
]

const Features: React.FC = () => {
  return (
    <section className='container mx-auto py-44'>
        <div className='flex flex-col items-center'>
            <h6 className="text-sky-500 uppercase text-xl tracking-tight font-extrabold">Key Features</h6>
            <h2 className="text-white uppercase text-5xl tracking-tight font-extrabold">Access the future</h2>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" className='flex mt-10'>
                {features.map((feature) => (
                    <div className='p-6 py-8 mr-8 space-y-6 bg-gradient-to-br from-gray-700 rounded-3xl'>
                    <div className='p-6 text-center w-16 bg-pink-700 rounded-full'>
                        {feature.img}
                    </div>
                    <h6 className="text-white text-2xl tracking-tighter uppercase font-semibold" >{feature.title}</h6>
                    <p className="text-gray-500 w-96 text-lg">{feature.desc}</p>
                </div>
                ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Features