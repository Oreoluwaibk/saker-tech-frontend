import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import { Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ selected, setSelected ] = useState("Transport");

  return (
  <StudentDashboard name='Student Amenities' activeKey='3.1'>
  <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Student {selected}</p>
    </div>}
  >
    <div className='flex items-center gap-4'>
      <Selector 
        title='Transport'
        selected={selected === "Transport"}
        onclick={() => setSelected("Transport")}
      />

      <Selector 
        title='Hostel'
        selected={selected === "Hostel"}
        onclick={() => setSelected("Hostel")}
      />
    </div>
    <Divider />
    <div className='flex items-center gap-6 bg-white rounded-xl px-6 py-5'>
      <p>Parent Name: FatherOfPuhupwasNew</p>
      <p>Admission No: FAPCY446 </p>
    </div>
  </Card>
  </StudentDashboard>
  )
}

export default index