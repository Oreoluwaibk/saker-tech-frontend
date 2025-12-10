import { CalendarOutlined } from '@ant-design/icons';
import React, { ReactNode } from 'react'

interface props {
  title: string;
  description?: string | ReactNode;
  icon?: ReactNode;
  status?: ReactNode;
  isColorWhite?: boolean;
  date?: string;
}
const CardTitle = ({ 
  title, 
  description, 
  icon, 
  status, 
  isColorWhite,
  date
}: props) => {
  return (
    <div className={`flex flex-col gap-1 ${description && "pt-2"} text-[#343434]`}>
      <h1 className={`${isColorWhite ? "text-white" : "text-[#2E2E2E]"} flex gap-2 items-center !font-semibold text-lg capitalize`} > 
        {icon && icon} {title} {status && status}
      </h1>
      <div className='flex items-center justify-between'>
        {description && <span className='text-[#2E2E2E] mb-6 font-normal text-base !wrap-break-word'>{description}</span>}
        {date && <span className='t-pri mb-6 font-normal text-sm !wrap-break-word'> <CalendarOutlined className='mr-2' /> Due: {date}</span>}
      </div>
    </div>
  )
}

export default CardTitle