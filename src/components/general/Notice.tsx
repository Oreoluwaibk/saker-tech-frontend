import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react'

interface props {
    title: string;
    description?: string;
    onclick?: () => void;
}
const Notice: React.FC<props> = ({ title, description, onclick }) => {
  return (
    <div className='flex flex-col gap-4 px-6 py-4 pb-8 bg-white border-l-2 border-l-[#FED500] rounded-xl'>
        <div className="flex items-center justify-between">
            <p className="text-[#1E1E1E] font-semibold text-lg">{title}</p>
            <p className='text-base cursor-pointer hover:opacity-70 transition-opacity duration-700' onClick={onclick}>View All <ArrowRightOutlined className='ml-2' /> </p>
        </div>
        <p className='text-[#646464] text-sm'>{description}</p>
    </div>
  )
}

export default Notice