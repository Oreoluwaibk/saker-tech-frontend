"use client";
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import LearningLevelDetails from '@/components/teachers/modal/LearningLevelDetails';
import PublishedLevel from '@/components/teachers/modal/PublishedLevel';
import { Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ selected, setSelected ] = useState("Learning Level List");
  const [ openPublishModal, setOpenPublishModal ] = useState(false);
  const [ openDetailsModal, setOpenDetailsModal ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
    },
    {
      key: "2",
      title: "Learning Level Name"
    },
    {
      key: "3",
      title: "Curriculum Format"
    },
    {
      key: "4",
      title: "Assessment Use",
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
      title: "Action"
    },
  ]

  return (
  <TeacherDashboard name='Learning Level' activeKey='2.1'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold' >Learning Level</p>
    </div>}
    >
      <div className='flex items-center gap-4'>
        <Selector 
          title='Learning Level List'
          selected={selected === "Learning Level List"}
          onclick={() => setSelected("Learning Level List")}
        />

        <Selector 
          title='Published Learning Level List'
          selected={selected === "Published Learning Level List"}
          onclick={() => setSelected("Published Learning Level List")}
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
    {openPublishModal && <PublishedLevel open={openPublishModal} onCancel={() => setOpenPublishModal(false)} />}
    {openDetailsModal && <LearningLevelDetails open={openDetailsModal} onCancel={() => setOpenDetailsModal(false)} />}
  </TeacherDashboard>
  )
}

export default index