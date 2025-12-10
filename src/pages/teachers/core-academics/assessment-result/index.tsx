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
      title: "Assignment Name",
      dataIndex: "price"
    },
     {
      key: "2.5",
      title: "Curriculum Format",
      dataIndex: "instructor",
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
      title: "Validity Period",
      dataIndex: "createdAt",
    },
    {
      key: "10",
      title: "Action",
      dataIndex: "duration"
    },
  ]
  return (
  <TeacherDashboard name='Assessment Result' activeKey='1.7'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Assessment Result Lists</p>
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