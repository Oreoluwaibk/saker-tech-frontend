import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Calendar, Card } from 'antd';
import React from 'react'

const index = () => {
  return (
  <TeacherDashboard name='Summer Camp Time Table' activeKey='5.3'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Summer Camp Time Table</p>
    </div>}
    >
      <Card title={<p className='text-[#344054] text-base'><LeftOutlined /> July 30, 2025 <RightOutlined /></p>}>
        <Calendar fullscreen />
      </Card>
    </Card>
  </TeacherDashboard>
  )
}

export default index