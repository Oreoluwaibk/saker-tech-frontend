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
      title: "Learning L.Name",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Month",
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
      dataIndex: "numofstudents",
    },
    {
      key: "6",
      title: "Topic",
      dataIndex: "numofstudents",
    },
    {
      key: "7",
      title: "Level",
      dataIndex: "createdAt",
    },
    {
      key: "8",
      title: "Validity Period",
      dataIndex: "duration"
    },
    {
      key: "9",
      title: "Time",
      dataIndex: "duration"
    },
    {
      key: "10",
      title: "Date",
      dataIndex: "duration",
    },
    {
      key: "11",
      title: "Status",
      dataIndex: "duration",
    },
    {
      key: "12",
      title: "Action",
      dataIndex: "duration"
    },
  ]
  return (
  <StudentDashboard name='Learning Level Result' activeKey='2.2'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Learning Level Result</p>
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