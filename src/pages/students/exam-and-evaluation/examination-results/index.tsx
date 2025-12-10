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
      title: "Paper Code",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Exam Type",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Class",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Subject",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Examination Date & Time",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Result Details",
      dataIndex: "duration"
    },
  ]
  return (
  <StudentDashboard name='Examination Results' activeKey='4.2'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Examination Results</p>
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