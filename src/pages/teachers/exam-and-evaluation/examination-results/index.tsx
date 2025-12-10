import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import ExaminationDetails from '@/components/teachers/modal/ExaminationDetails';
import ExaminationResultDetails from '@/components/teachers/modal/ExaminationResultDetails';
import { Card, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ openDetail, setOpenDetail ] = useState(false);
  const [ openStudentDetails, setOpenStudentDetails ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
    },
    {
      key: "2",
      title: "Paper Code"
    },
    {
      key: "3",
      title: "Exam Type",
    },
     {
      key: "3.5",
      title: "Curriculum Format",
    },
    {
      key: "4",
      title: "Class",
    },
    {
      key: "5",
      title: "Subject"
    },
    {
      key: "6",
      title: "Examination Date & Time"
    },
    {
      key: "7",
      title: "Action"
    },
  ]
  return (
  <TeacherDashboard name='Examination Results' activeKey='4.4'>
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

    {openDetail && <ExaminationDetails open={openDetail} onCancel={() => setOpenDetail(false)} />}
    {openStudentDetails && <ExaminationResultDetails open={openStudentDetails} onCancel={() => setOpenStudentDetails(false)} />}
  </TeacherDashboard>
  )
}

export default index