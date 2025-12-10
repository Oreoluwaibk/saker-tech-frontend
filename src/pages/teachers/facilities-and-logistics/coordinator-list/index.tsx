import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import { Card, TableProps } from 'antd';
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
      title: "Coordinator Name"
    },
    {
      key: "3",
      title: "Curriculum Format"
    },
    {
      key: "4",
      title: "Class",
    },
    {
      key: "5",
      title: "Mobile No."
    },
    {
      key: "6",
      title: "Gender"
    },
    {
      key: "7",
      title: "Email"
    },
  ]

  return (
  <TeacherDashboard name='Coordinator List' activeKey='3.2'>
  <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Coordinator List</p>
    </div>}
  >
    <div>
        <ParentTable 
          title=""
          data={data}
          column={column}
          showExtra
        />
      </div>
  </Card>
  </TeacherDashboard>
  )
}

export default index