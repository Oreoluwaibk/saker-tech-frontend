import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import { Button, Card,Form, Select } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import { Content } from '../../../../../assets/images';
import CreateContent from '@/components/teachers/modal/CreateContent';
import AddTopic from '@/components/teachers/modal/AddTopic';

const index = () => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openTopicModal, setOpenTopicModal ] = useState(false);
  return (
  <TeacherDashboard name='Content' activeKey='1.2'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Content</p>
         <p className='text-base text-[#616161] font-light'>View all available content</p>
      </div>}
      extra={<div className='flex gap-4'>
        <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold'  onClick={() => setOpenModal(true)}>Create Content</Button>
      </div>}
    >
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image  src={Content} alt='content'/>
        <div className='pt-5 pb-3 px-4 text-center gap-2 flex flex-col'>
          <p className='text-xl text-[#050505] font-medium'>Get Started</p>
          <p className='text-base text-[#616161] font-light'>No content available Yet</p>
          <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold'  onClick={() => setOpenModal(true)}>Create Content</Button>
        </div>
      </div>
    </Card>
    {openModal && <CreateContent openAdd={() => setOpenTopicModal(true)} open={openModal} onCancel={() => setOpenModal(false)} />}
    {openTopicModal && <AddTopic open={openTopicModal} onCancel={() => setOpenTopicModal(false)} />}
  </TeacherDashboard>
  )
}

export default index