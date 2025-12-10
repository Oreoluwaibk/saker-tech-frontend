import React, { ReactNode } from 'react'

interface props {
    title: string;
    icon?: ReactNode;
}
const Info: React.FC<props> = ({ title, icon }) => {
  return (
    <div className='flex items-center gap-2 bg-[#F6F6F6] rounded-[5px] px-4 py-3 text-[#3E444C]'>
        {icon}
        {title}
    </div>
  )
}

export default Info