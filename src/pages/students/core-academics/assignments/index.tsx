import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import { Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ selected, setSelected ] = useState("New Assignments");
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Assignment Name",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Class",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Subject",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Chapter",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Published On",
      dataIndex: "duration",
      hidden: selected === "Checked Assignments"
    },
    {
      key: "7",
      title: "Late Submission Date",
      dataIndex: "duration",
      hidden: selected === "Checked Assignments"
    },
    {
      key: "8",
      title: "Submitted Date",
      dataIndex: "duration",
      hidden: selected !== "Submitted/Unchecked Assignments"
    },
    {
      key: "9",
      title: "Upload File",
      dataIndex: "duration",
      hidden: selected !== "Submitted/Unchecked Assignments"
    },
    {
      key: "10",
      title: "Grade",
      dataIndex: "duration",
      hidden: selected !== "Checked Assignments"
    },
    {
      key: "11",
      title: "Remarks",
      dataIndex: "duration",
      hidden: selected !== "Checked Assignments"
    },
    {
      key: "12",
      title: "Assignment File",
      dataIndex: "duration",
      hidden: selected !== "Checked Assignments"
    },
    {
      key: "13",
      title: "Student Uploaded File",
      dataIndex: "duration",
      hidden: selected !== "Checked Assignments"
    },
    {
      key: "14",
      title: "Teacher Uploaded File",
      dataIndex: "duration",
      hidden: selected !== "Checked Assignments"
    },
  ]
  return (
  <StudentDashboard name='Assignment' activeKey='1.8'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
          <p className='text-[30px] text-[#050505] font-semibold'>Assignment Lists</p>
      </div>}
    >
      <div className='flex items-center gap-4'>
        <Selector 
          title='New Assignments'
          selected={selected === "New Assignments"}
          onclick={() => setSelected("New Assignments")}
        />

        <Selector 
          title='Submitted/Unchecked Assignments'
          selected={selected === "Submitted/Unchecked Assignments"}
          onclick={() => setSelected("Submitted/Unchecked Assignments")}
        />

        <Selector 
          title='Checked Assignments'
          selected={selected === "Checked Assignments"}
          onclick={() => setSelected("Checked Assignments")}
        />
      </div>
      <Divider />
      <div>
        <ParentTable 
          title={selected}
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