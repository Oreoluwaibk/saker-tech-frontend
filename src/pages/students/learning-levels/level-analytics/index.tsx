import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import { Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ selected, setSelected ] = useState("Level 1");
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Month",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Subject",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Chapter",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Concept",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Learning L. Name",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Description",
      dataIndex: "duration",
    },
    {
      key: "8",
      title: selected === "Level 1" ? "L1" : selected === "Level 2" ? "L2" : "L3",
      dataIndex: "duration",
    },
    {
      key: "9",
      title: "Remedial",
      dataIndex: "duration",
    },
    {
      key: "10",
      title: "Description",
      dataIndex: "duration",
    },
  ]
  return (
  <StudentDashboard name='Level Analytics' activeKey='2.3'>
  <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Level Analytics Lists</p>
    </div>}
  >
    <div className='flex items-center gap-4'>
      <Selector 
        title='Level 1'
        selected={selected === "Level 1"}
        onclick={() => setSelected("Level 1")}
      />

      <Selector 
        title='Level 2'
        selected={selected === "Level 2"}
        onclick={() => setSelected("Level 2")}
      />

      <Selector 
        title='Level 3'
        selected={selected === "Level 3"}
        onclick={() => setSelected("Level 3")}
      />
    </div>
    <Divider />
    <div>
      <ParentTable 
        title={selected}
        data={data}
        column={column}
        showExtra
        showFilter
      />
    </div>
  </Card>
  </StudentDashboard>
  )
}

export default index