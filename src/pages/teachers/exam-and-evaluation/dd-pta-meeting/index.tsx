import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import { Calendar, Card, TableProps } from 'antd'
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
      title: "Date & Time",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Start Time",
      dataIndex: "duration"
    },
    {
      key: "8",
      title: "Submission Time",
      dataIndex: "duration",
    },
    {
      key: "9",
      title: "Action",
      dataIndex: "duration",
    }
  ]
  return (
  <TeacherDashboard name='Create PTA/DD Meeting' activeKey='4.2'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Create PTA/DD Meeting</p>
    </div>}
    >
      <Card>
        <Calendar fullscreen />
      </Card>
    </Card>
  </TeacherDashboard>
  )
}

export default index