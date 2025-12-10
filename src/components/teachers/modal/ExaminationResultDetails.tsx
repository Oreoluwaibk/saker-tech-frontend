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
const ExaminationResultDetails = ({ open, onCancel }: modal) => {
  const [ items ] = React.useState<string[]>([
    "Paper Code: Question Test",
    "Curriculum Format: CBSE",
    "Class Name: Class I",
    "Subject Name: English",
    "Examination Date: 18-01-2025",
    "Examination Time: 11:11 AM - 11:21 AM"
  ]);
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

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
      title: "Exam Start Date",
    },
    {
      key: "4",
      title: "Exam Submission Time",
    },
    {
      key: "5",
      title: "Status",
    },
    {
      key: "6",
      title: "Result Details",
    }
  ]

  return (
    <Modal 
    title={<div className='flex flex-col gap-1'>
      <p className='text-lg font-medium'>Examination Student Result List</p>
      <p className='text-base text-[#616161]'>Student Name: Harry Kumar</p>
    </div>}
    open={open}
    onCancel={onCancel}
    closeIcon={<CloseCircleOutlined />}
    footer={null}
    width={900}
    styles={{body: {marginTop: 20}}}
  >
    <List 
      dataSource={items} 
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
          column={column}
          showExtra
        />
    </div>
  </Modal>
  )
}

export default ExaminationResultDetails