import CardTitle from '@/components/general/CardTitle';
import Status from '@/components/general/Status';
import { Button } from 'antd';
import React, { useState } from 'react'
import UpcomingModal from '../modals/UpcomingModal';

interface props {
    title: string;
    description: string;
    amounts: string | number;
    date: string;
    status: string;
}
const UpcomingPayments: React.FC<props> = ({
    title,
    description,
    amounts,
    date,
    status
}) => {
    const [ openModal, setOpenModal ] = useState(false);
  return (
    <div className='flex flex-col gap-4 rounded-[5px] border border-[#EAEAEA] px-4 py-3'>
        <CardTitle 
            title={title}
            description={description}
            status={<Status title={status} color='#FF0004' bg='#FFF2F2' />}
            date={date}
        />

        <div className='flex items-center justify-between'>
            <p className='text-2xl font-medium text-[#2E2E2E]'>${amounts}</p>

            <div className='flex items-center gap-5'>
                <Button className='h-9!' onClick={() => setOpenModal(true)}>View Details</Button>
                <Button className='h-9! text-[#0E0E0E]! font-semibold!' type='primary'>Pay Now</Button>

            </div>
        </div>

        {openModal && <UpcomingModal onCancel={() => setOpenModal(false)} open={openModal} />}
    </div>
  )
}

export default UpcomingPayments