import ParentDashboard from '@/components/dashboard/ParentDashboard'
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
      title: "From Date",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "To Date",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Student's Name",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Father's Name",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Love Description",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Created On",
      dataIndex: "duration",
    },
    {
      key: "8",
      title: "Action",
      dataIndex: "duration"
    },
  ]
  return (
  <ParentDashboard name='Student Leave' activeKey='1.5'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Student Leave</p>
      </div>}
      extra={<div className='flex gap-4'>
        <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setOpenModal(true)}>Create Leave</Button>
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
    {openModal && <CreateStudentLeave onCancel={() => setOpenModal(false)} open={openModal} />}
  </ParentDashboard>
  )
}

export default index