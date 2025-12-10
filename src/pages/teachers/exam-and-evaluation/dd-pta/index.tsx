import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import { Card, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
    },
    {
      key: "2",
      title: "Class",
    },
    {
      key: "3",
      title: "Student",
    },
    {
      key: "4",
      title: "Batch Name"
    },
    {
      key: "5",
      title: "Teacher's ID"
    },
    {
      key: "6",
      title: "Zoom Webinar Email"
    },
    {
      key: "7",
      title: "Zoom Webinar ID"
    },
    {
      key: "8",
      title: "Zoom Webinar Password"
    },
    {
      key: "9",
      title: "Action"
    }
  ]

  return (
  <TeacherDashboard name='PTA/DD' activeKey='4.1'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>PTA/DD</p>
    </div>}
    >
      <div>
        <ParentTable 
          title=""
          data={data}
          column={column}
          showExtra
          showFilter
        />
      </div>
    </Card>
  </TeacherDashboard>
  )
}

export default index