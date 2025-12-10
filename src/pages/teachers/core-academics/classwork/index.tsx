"use client"
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import CreateStudentLeave from '@/components/parents/modals/CreateStudentLeave';
import ParentTable from '@/components/parents/ParentTable';
import ClassworkStudentLeave from '@/components/teachers/modal/ClassworkStudentLeave';
import CreateClasswork from '@/components/teachers/modal/CreateClasswork';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openList, setOpenList ] = useState(false);
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
    },
    {
      key: "2",
      title: "Class",
    },
    {
      key: "3",
      title: "Subject",
    },
    {
      key: "4",
      title: "Title",
    },
    {
      key: "5",
      title: "No. of Students"
    },
    {
      key: "6",
      title: "Published On",
    },
    {
      key: "7",
      title: "Action",
    }
  ]
  return (
  <TeacherDashboard name='Classwork List' activeKey='1.3'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Classwork List</p>
      </div>}
      extra={<div className='flex gap-4'>
        <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setOpenModal(true)}>Create Classwork</Button>
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
    {openModal && <CreateClasswork onCancel={() => setOpenModal(false)} open={openModal} />}
    {openList && <ClassworkStudentLeave onCancel={() => setOpenList(false)} open={openList} />}

  </TeacherDashboard>
  )
}

export default index