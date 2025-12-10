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
const PopUpQuizDetails = ({ open, onCancel }: modal) => {
    const [ items ] = React.useState<string[]>([
      "Curriculum Format: CBSE",
      "Class Name: Class I",
      "Subject Name: Mathematics",
      "Chapter Name: Play With Number",
      "Total Duration (in minutes): 2",
      "Total Question: 1"
    ]);
    const [ data, setData ] = useState<TableProps["dataSource"]>([]);

    const column: ColumnsType = [
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
        title: "Option",
      },
      {
        key: "5",
        title: "Answers",
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
      <div>
        <List 
          dataSource={items} 
          renderItem={(item: string) => (
             
              <ListBtn 
                title={item} 
              />   
          )}
          itemLayout="horizontal"
          className='flex-wrap!'
        />
      </div>
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

export default PopUpQuizDetails