import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
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
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Assessment Name",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Assessment Use",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Subject",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Validity Period",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Time",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Action",
      dataIndex: "duration"
    },
  ]
  return (
  <StudentDashboard name='Learning Level Lists' activeKey='2.1'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Learning Level Lists</p>
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
  </StudentDashboard>
  )
}

export default index