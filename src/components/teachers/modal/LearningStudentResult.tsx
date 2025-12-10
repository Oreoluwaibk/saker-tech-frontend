"use client"
import ListBtn from '@/components/general/ListBtn';
import ParentTable from '@/components/parents/ParentTable';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Divider, List, Modal } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const LearningStudentResult = ({ open, onCancel }: modal) => {
    const [ items ] = React.useState<string[]>([
      "Assessment Name: For Today Demo2_15",
      "Assessment Use: Assessment",
      "Curriculum Format: CBSE",
      "Class Name: Class I",
      "Subject Name: Mathematics",
      "From Date: 15-01-2025",
      "To Date: 15-01-2025",
      "Start Time: 12:02"
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
        title: "Submission Date",
      },
      {
        key: "4",
        title: "Month",
      },
      {
        key: "5",
        title: "Student Result Status",
      },
      {
        key: "6",
        title: "Result Status",
      },
      {
        key: "7",
        title: "Action",
      }
    ]
  return (
     <Modal 
        title={<div className='flex flex-col gap-1'>
          <p className='text-lg font-medium'>Popup Quiz Rsult Details</p>
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

export default LearningStudentResult