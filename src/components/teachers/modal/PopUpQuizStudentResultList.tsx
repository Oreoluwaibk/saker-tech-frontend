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
const PopUpQuizStudentResultList = ({ open, onCancel }: modal) => {
    const [ items ] = React.useState<string[]>([
      "Name: Popup Quiz",
      "Curriculum Format: CBSE",
      "Class Name: Class I",
      "Subject Name: Mathematics",
      "Chapter Name: Play With Number",
      "Date: 2024-11-24",
      "Start Time: 18:14"
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
        title: "Quiz Time/Duration",
      },
      {
        key: "4",
        title: "Total Questions",
      },
      {
        key: "5",
        title: "Total Attempts",
      },
      {
        key: "6",
        title: "Total Correct",
      },
      {
        key: "7",
        title: "Total Wrong",
      },
      {
        key: "8",
        title: "Total Skipped",
      },
      {
        key: "9",
        title: "Result Details",
      },
    ]
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Popup Quiz Details</p>}
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

export default PopUpQuizStudentResultList