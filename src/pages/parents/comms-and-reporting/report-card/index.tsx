import ParentDashboard from '@/components/dashboard/ParentDashboard'
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
      title: "Academic Session",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Class",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Report Card Type",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Report Card Name",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Published On",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Report Card",
      dataIndex: "duration"
    },
  ]
  return (
  <ParentDashboard name='Report Card List' activeKey='6.1'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Report Card List</p>
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
  </ParentDashboard>
  )
}

export default index