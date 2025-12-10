import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import CreateLeave from '@/components/teachers/modal/CreateLeave';
import { Button, Calendar, Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ openModal, setOpenModal ] = useState(false);
  const [ selected, setSelected ] = useState("My Attendance");

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      hidden: selected !== "My Attendance"
    },
    {
      key: "2",
      title: "Date",
      hidden: selected !== "My Attendance"
    },
    {
      key: "3",
      title: "Time In",
      hidden: selected !== "My Attendance"
    },
    {
      key: "4",
      title: "Time Out",
      hidden: selected !== "My Attendance"
    },
    {
      key: "5",
      title: "Duration",
      hidden: selected !== "My Attendance"
    },
    {
      key: "6",
      title: "Action",
      hidden: selected !== "My Attendance"
    },
    {
      key: "7",
      title: "From Date",
      dataIndex: "createdAt",
      hidden: selected !== "My Leaves"
    },
    {
      key: "8",
      title: "To Date",
      hidden: selected !== "My Leaves"
    },
    {
      key: "9",
      title: "No. of Leave",
      hidden: selected !== "My Leaves"
    },
    {
      key: "10",
      title: "Leave Type",
      hidden: selected !== "My Leaves"
    },
    {
      key: "11",
      title: "Leave Applied On",
      hidden: selected !== "My Leaves"
    },
    {
      key: "12",
      title: "Leave Status",
      hidden: selected !== "My Leaves"
    },
    
  ]

  return (
  <TeacherDashboard name='Attendance List' activeKey='1.9'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Attendance List</p>
    </div>}
    extra={selected === "New Leave" && <div className='flex gap-4'>
        <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold'  onClick={() => setOpenModal(true)}>Create Leave</Button>
      </div>}
    >
      <div className='flex items-center gap-4'>
        <Selector 
          title='My Attendance'
          selected={selected === "My Attendance"}
          onclick={() => setSelected("My Attendance")}
        />

        <Selector 
          title='New Leave'
          selected={selected === "New Leave"}
          onclick={() => setSelected("New Leave")}
        />

        <Selector 
          title='My Leaves'
          selected={selected === "My Leaves"}
          onclick={() => setSelected("My Leaves")}
        />
      </div>

      <Divider />

      <div>
        {selected !== "New Leave" && <ParentTable 
          title={selected}
          data={data}
          column={column}
        />}

        {selected === "New Leave" && (
          <Card >

            <Calendar 
              fullscreen
            />
          </Card>
        )}
      </div>
    </Card>
    {openModal && <CreateLeave open={openModal} onCancel={() => setOpenModal(false)} />}
  </TeacherDashboard>
  )
}

export default index