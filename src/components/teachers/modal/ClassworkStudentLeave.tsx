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
const ClassworkStudentLeave = ({ open, onCancel }: modal) => {
    const [ items ] = React.useState<string[]>([
      "Classwork Student List: ---",
      "Curriculum Format: CBSE",
      "Class Name: Class 1",
      "Subject Name: English",
      "Published Date: 02-04-2022",
      "Download Classwork File"
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
      
    ]
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Create Student Leave</p>}
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
              {/* <ListBtn 
                title={item} 
                icon={index === items.length -1 && <Icon icon="line-md:file-filled" />}
                bgColor={index === items.length -1 ?'#E4E4E4' : undefined}
              />   */}
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

export default ClassworkStudentLeave