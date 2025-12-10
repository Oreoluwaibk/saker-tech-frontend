import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import ExaminationDetails from '@/components/teachers/modal/ExaminationDetails';
import ExaminationResultDetails from '@/components/teachers/modal/ExaminationResultDetails';
import { Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ selected, setSelected ] = useState("Verified Examination List");
  const [ openDetail, setOpenDetail ] = useState(false);
  const [ openStudentDetails, setOpenStudentDetails ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N"
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
      title: "Class"
    },
    {
      key: "5",
      title: "Subject"
    },
    {
      key: "6",
      title: "Examination Date & Time",
      hidden: selected === "Verified Examination List"
    },
    {
      key: "9",
      title: "Action"
    }
  ]

  return (
  <TeacherDashboard name='Examination List' activeKey='4.3'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Examination List</p>
    </div>}
    >
        <div className='flex items-center gap-4'>
        <Selector 
          title='Verified Examination List'
          selected={selected === "Verified Examination List"}
          onclick={() => setSelected("Verified Examination List")}
        />

        <Selector 
          title='Publised Examination List'
          selected={selected === "Publised Examination List"}
          onclick={() => setSelected("Publised Examination List")}
        />
      </div>

      <Divider />

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