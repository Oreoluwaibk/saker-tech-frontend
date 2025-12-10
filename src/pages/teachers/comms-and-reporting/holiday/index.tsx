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
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Holiday Name",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Date",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Day",
      dataIndex: "numofstudents",
    },
  ]
  return (
  <TeacherDashboard name='Holiday List' activeKey='5.2'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Holiday List</p>
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