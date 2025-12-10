import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import PopUpQuizDetails from '@/components/teachers/modal/PopUpQuizDetails';
import PopUpQuizResultDetails from '@/components/teachers/modal/PopUpQuizResultDetails';
import PopUpQuizStudentResultList from '@/components/teachers/modal/PopUpQuizStudentResultList';
import { Card, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ openModal, setOpenModal ] = useState(false);
  const [ oepnResultModal, setOpenResultModal ] = useState(false);
  const [ openDetailsModal, setOpenDetailsModal ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Chapter Name",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Curriculum Format",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Class",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Subject",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Validity Period",
      dataIndex: "duration"
    },
    // {
    //   key: "7",
    //   title: "Status",
    //   dataIndex: "duration",
    // },
    {
      key: "8",
      title: "Action",
      dataIndex: "duration"
    },
  ]
  return (
  <TeacherDashboard name='Pop-up Quiz Result List' activeKey='1.8'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Pop-up Quiz Result List</p>
      </div>}
    >
      <div>
        <ParentTable 
          title=""
          data={data}
          column={column}
        />
      </div>
    </Card>
    {openModal && <PopUpQuizDetails open={openModal} onCancel={() => setOpenModal(false)} />}
    {oepnResultModal && <PopUpQuizStudentResultList open={oepnResultModal} onCancel={() => setOpenResultModal(false)} />}
    {openDetailsModal && <PopUpQuizResultDetails open={openDetailsModal} onCancel={() => setOpenDetailsModal(false)} />}
  </TeacherDashboard>

  )
}

export default index