import React from 'react'

interface props {
    title: string;
    description: string;
    date: string
}
const NotificationList: React.FC<props> = ({
    title,
    date,
    description
}) => {
  return (
    <div className='flex flex-col gap-2 px-6 py-4 bg-white'>
        <p className='text-[#101828] font-medium text-sm'>{title}</p>

        <div className='flex items-center justify-between'>
            <p className='text-[#667085] text-sm'>{description}</p>
            <p className='text-xs text-[#434242]'>{date}</p>
        </div>
    </div>
  )
}

export default NotificationList