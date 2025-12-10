import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import ReportCardDetails from '@/components/teachers/modal/ReportCardDetails';
import { Card, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ openDetail, setOpenDetail ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N"
    },
    {
      key: "2",
      title: "Academic Session"
    },
    {
      key: "2.5",
      title: "Curriculum Format"
    },
    {
      key: "3",
      title: "Class"
    },
    {
      key: "4",
      title: "Report Card Type"
    },
    {
      key: "5",
      title: "Report Card Name"
    },
    {
      key: "5.5",
      title: "Total Student"
    },
    {
      key: "6",
      title: "Generated On"
    },
    {
      key: "6",
      title: "Published On"
    },
    {
      key: "7",
      title: "Action"
    },
  ]
  return (
  <TeacherDashboard name='Report Card List' activeKey='5.1'>
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
        />
      </div>
    </Card>
    {openDetail && <ReportCardDetails open={openDetail} onCancel={() => setOpenDetail(false)} />}
  </TeacherDashboard>
  )
}

export default index