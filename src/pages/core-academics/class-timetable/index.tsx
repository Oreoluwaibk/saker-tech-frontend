import DashboardContainer from '@/components/dashboard/DashboardContainer'
import { AlignCenterOutlined, DeleteFilled, EditOutlined, EyeOutlined, LoadingOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Input, Select, Table } from 'antd'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import WorkStudentDetail from '@/components/modals/WorkStudentDetail';
import EditWorkBook from '@/components/modals/EditWorkbook';

const Option = Select.Option;
const index = () => {
   const [classTimetableSource] = useState([
    { key: 1, board_name: 'Up', class_name: 'Class III' },
    { key: 1, board_name: 'Allindiaboard', class_name: 'Class II' },
    { key: 1, board_name: 'Checkerboard', class_name: 'Class XII Checker' },
  ]);
   const [open, setOpen] = useState({
     details: false,
     edit:false
   });

   const handleDetailModal = (open:boolean) =>{
      setOpen({
         details: open,
         edit: false
      });
   }
   const handleEditModal = (open:boolean) =>{
      setOpen({
         details: false,
         edit: open
      });
   }
   
  const timetableColumn:ColumnsType = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Board Name',
      dataIndex: 'board_name',
    },
    {
      key: '3',
      title: 'Class Name',
      dataIndex: 'class_name',
    },
       {
      key: '3',
      title: 'Action',
      dataIndex: 'action',
      render: () => (
        <div className="flex gap-2">
            <Button
           onClick={()=>handleDetailModal(true)}
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <EyeOutlined/>
          </Button>
          <Button
            onClick={()=>handleEditModal(true)}
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <EditOutlined/>
          </Button>
          
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Leaves" activeKey="11.5">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Class Timetable List</p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of class timetable
              </p>
            </div>
          </div>
        }
      >
        <Card
          extra={
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search..."
              style={{
                height: 38,
                width: 146,
                backgroundColor: '#F4F4F4',
                border: 'none',
              }}
            />
          }
        >
          <Table columns={timetableColumn} dataSource={classTimetableSource} />
        </Card>
      </Card>
      <WorkStudentDetail open={open.details} onCancel={handleDetailModal}/>
      <EditWorkBook open={open.edit} onCancel={handleEditModal}/>
    </DashboardContainer>
  );
}

export default index