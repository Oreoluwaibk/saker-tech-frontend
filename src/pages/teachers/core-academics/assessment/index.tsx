import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import CreateStudentLeave from '@/components/parents/modals/CreateStudentLeave';
import ParentTable from '@/components/parents/ParentTable';
import AssessmentDetails from '@/components/teachers/modal/AssessmentDetails';
import PublishedAssessment from '@/components/teachers/modal/PublishedAssessment';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openPublished, setOpenPublished ] = useState(false);
  const [ selected, setSelected ] = useState("Assessment List");
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Assessment Name",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Curriculum Format",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Assessment Use",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Class",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Subject",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Action",
      dataIndex: "duration",
    }
  ]
  return (
  <TeacherDashboard name='Assessment' activeKey='1.6'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold' onClick={() => setOpenPublished(true)}>Assessment</p>
      </div>}
    >
       <div className='flex items-center gap-4'>
        <Selector 
          title='Assessment List'
          selected={selected === "Assessment List"}
          onclick={() => setSelected("Assessment List")}
        />

        <Selector 
          title='Published Assessment List'
          selected={selected === "Published Assessment List"}
          onclick={() => setSelected("Published Assessment List")}
        />
      </div>

      <Divider  />
      <div>
        <ParentTable 
          title={selected}
          data={data}
          column={column}
        />
      </div>
    </Card>
    {openModal && <AssessmentDetails onCancel={() => setOpenModal(false)} open={openModal} />}
    {openPublished && <PublishedAssessment onCancel={() => setOpenPublished(false)} open={openPublished} />}

  </TeacherDashboard>
  )
}

export default index