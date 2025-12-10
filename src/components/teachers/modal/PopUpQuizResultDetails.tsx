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
const PopUpQuizResultDetails = ({ open, onCancel }: modal) => {
    const [ items ] = React.useState<string[]>([
      "Total Question: 0",
      "Correct Question: 0",
      "Incorrect Question: 3",
      "Skip Question: 0",
    ]);
    const [ data, setData ] = useState<TableProps["dataSource"]>([]);

    const column: ColumnsType = [
      {
        key: "1",
        title: "S/N",
      },
      {
        key: "2",
        title: "Question",
      },
      {
        key: "3",
        title: "Quiz Type",
      },
      {
        key: "4",
        title: "Quiz Time/Duration",
      },
      {
        key: "5",
        title: "Option",
      },
      {
        key: "6",
        title: "Answer",
      },
      {
        key: "7",
        title: "Student Answer",
      },
      {
        key: "8",
        title: "Remark",
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

export default PopUpQuizResultDetails