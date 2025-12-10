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
const PublishedAssessment = ({ open, onCancel }: modal) => {
    const [ items ] = React.useState<string[]>([
      "Assessment Name: For Today Demo2_15",
      "Curriculum Format: CBSE",
      "Class Name: Class I",
      "Subject Name: Mathematics"
    ]);
    const [ data, setData ] = useState<TableProps["dataSource"]>([]);

    const column: ColumnsType = [
      {
        key: "1",
        title: "S/N",
      },
      {
        key: "2",
        title: "Validity Period",
      },
      {
        key: "3",
        title: "Start Time",
      },
      {
        key: "4",
        title: "Published on",
      },
      {
        key: "5",
        title: "Total Students",
      },
    ]
  return (
  <Modal 
      title={<p className='text-lg font-medium'>Assessment Details</p>}
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
          title="Assessment Details"
          data={data}
          column={column}
          showExtra
        />
    </div>
  </Modal>
  )
}

export default PublishedAssessment