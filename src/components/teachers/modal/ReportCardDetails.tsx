"use client"
import ListBtn from '@/components/general/ListBtn';
import ParentTable from '@/components/parents/ParentTable';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Divider, List, Modal } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const ReportCardDetails = ({ open, onCancel }: modal) => {
  const [ items ] = React.useState<string[]>([
    "Academic Session: 2022-2023",
    "Curriculum Format: CBSE",
    "Class Name: Class I",
    "Report Card Type: Final Report Card",
    "Report Card Name: Elite Mindz testing2",
    "Class Teacher Name: Anjali Sing",
    "Scholastic Marks/Grade: Both",
    "Co-Scholastic Marks/Grade: Marks",
    "Attendance: Show"
  ]);
  const [ detailsItem ] = React.useState<string[]>([
    "Total Question: 0",
    "Correct Question: 0",
    "Incorrect Question: 0",
    "Skip Question: 0",
  ]);
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);
  const [ isDetails, setIsDetails ] = useState(false);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
    },
    {
      key: "2",
      title: "Student Name",
    },
    {
      key: "3",
      title: "Status",
    },
    {
      key: "4",
      title: "Report Card",
    }
  ]

  const colum2: ColumnsType = [
    {
        key: "1",
        title: "S/N",
    },
    {
        key: "2",
        title: "Question Name",
    },
    {
        key: "3",
        title: "Question Type",
    },
    {
        key: "4",
        title: "Options",
    },
    {
        key: "4.5",
        title: "Answer",
    },
    {
        key: "5",
        title: "Skills",
    },
    {
        key: "6",
        title: "Weightage",
    },
    
  ]

  return (
    <Modal 
    title={<div className='flex flex-col gap-1'>
      <p className='text-lg font-medium'>Report Card Student List</p>
      {isDetails && <p className='text-sm text-[#616161]' >Student Name: Harry Kumar</p>}
    </div>}
    open={open}
    onCancel={onCancel}
    closeIcon={<CloseCircleOutlined />}
    footer={null}
    width={900}
    styles={{body: {marginTop: 20}}}
  >
    <List 
      dataSource={isDetails ? detailsItem : items} 
      renderItem={(item: string, index: number) => (
        <span className='m-1 my-2'> 
          <ListBtn 
            title={item} 
          />  
        </span>
      )}
      size="small"
      itemLayout="horizontal"
      
    />

    <Divider size='small' />

    <div>
      <ParentTable 
        title=""
        data={data}
        column={isDetails ? colum2 : column}
        showExtra
      />
    </div>
  </Modal>
  )
}

export default ReportCardDetails