import React, { useState } from 'react'

interface Props {
    title: string,
    content: string,
}

const Accordian: React.FC<Props> = ({title, content}) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='flex flex-col text-white w-[700px] mr-5 mb-3 h-auto'>
        <div className={`flex z-10 justify-between px-6 cursor-pointer py-3 ${isActive ? 'bg-sky-500 text-gray-900 rounded-tl-full rounded-tr-full': 'bg-gray-600 bg-opacity-50 rounded-full'} items-start`} onClick={() => setIsActive(!isActive)}>
            <h6 className='text-lg uppercase font-medium tracking-tighter'>{title}</h6>
            <span className='scale-[3] scale w-5 h-5 ml-10' >{isActive ? '-' : '+'}</span>
        </div>
        {isActive && <p className="transition-all z-20 duration-200 p-6 bg-gray-600 bg-opacity-50 rounded-bl-[30px] rounded-br-[30px]" >{content}</p>}
    </div>
  )
}

export default Accordian;