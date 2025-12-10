import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import LearningLevelDetails from '@/components/teachers/modal/LearningLevelDetails';
import LearningStudentResult from '@/components/teachers/modal/LearningStudentResult';
import { Card, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ openDetailsModal, setOpenDetailsModal ] = useState(false);
  const [ openResultModal, setOpenResultModal ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Assessment Name"
    },
    {
      key: "3",
      title: "Month",
    },
    {
      key: "4",
      title: "Curriculum Format"
    },
    {
      key: "5",
      title: "Class"
    },
    {
      key: "6",
      title: "Subject"
    },
    {
      key: "7",
      title: "Validity Period",
      dataIndex: "duration"
    },
    {
      key: "8",
      title: "Action",
      dataIndex: "duration"
    },
  ]

  return (
  <TeacherDashboard name='Learning Level Result' activeKey='2.2'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold' >Learning Level Result</p>
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
    {openDetailsModal && <LearningLevelDetails open={openDetailsModal} onCancel={() => setOpenDetailsModal(false)} />}
    {openResultModal && <LearningStudentResult open={openResultModal} onCancel={() => setOpenResultModal(false)} />}
  </TeacherDashboard>
  )
}

export default index