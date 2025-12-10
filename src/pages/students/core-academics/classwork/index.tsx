import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import Selector from '@/components/general/Selector';
import CreateStudentLeave from '@/components/parents/modals/CreateStudentLeave';
import ParentTable from '@/components/parents/ParentTable';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ openModal, setOpenModal ] = useState(false);
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Class",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Subject",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Published Date",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Classwork File",
      dataIndex: "createdAt",
    }
  ]
  return (
  <StudentDashboard name='Classwork List' activeKey='1.2'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Classwork List</p>
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
    {openModal && <CreateStudentLeave onCancel={() => setOpenModal(false)} open={openModal} />}
  </StudentDashboard>
  )
}

export default index