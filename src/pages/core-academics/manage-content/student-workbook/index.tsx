import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { EyeOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import WorkStudentDetail from '@/components/modals/WorkStudentDetail';
import EditWorkBook from '@/components/modals/EditWorkbook';
import StudentWorkBookResult from '@/components/modals/Result';

const index = () => {
  const [workbookData] = useState([
    {
      key: '1',
      workbook_name: 'Hw',
      board: 'CBSE',
      class: 'Class III',
      subject: 'English',
      chapter: 'Everyday Things',
      created_on: '2025-06-17 12:33:12',
    },
    {
      key: '2',
      workbook_name: 'WB1',
      board: 'CBSE',
      class: 'Class II',
      subject: 'English',
      chapter: 'If You Are Happy',
      created_on: '2024-12-09 12:36:49',
    },
    {
      key: '3',
      workbook_name: 'Workbook123',
      board: 'CBSE',
      class: 'Class I',
      subject: 'Mathematics',
      chapter: 'The First Butterflies',
      created_on: '2024-07-24 17:31:22',
    },
    {
      key: '4',
      workbook_name: 'Worksheet Excel 1',
      board: 'CBSE',
      class: 'Class I',
      subject: 'Mathematics',
      chapter: 'Myself',
      created_on: '2024-07-24 17:31:22',
    },
    {
      key: '5',
      workbook_name: 'WB 1. 1',
      board: 'CBSE',
      class: 'Class I',
      subject: 'Mathematics',
      chapter: 'Indus Valley Civilisation',
      created_on: '2023-07-13 17:13:20',
    },
  ]);

  const [open, setOpen] = useState({
    details: false,
    edit: false,
  });

  const handleDetailModal = (open: boolean) => {
    setOpen({ details: open, edit: false });
  };

  const handleEditModal = (open: boolean) => {
    setOpen({ details: false, edit: open });
  };

  const workbookColumns: ColumnsType = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Work Book Name',
      dataIndex: 'workbook_name',
    },
    {
      key: '3',
      title: 'Board',
      dataIndex: 'board',
    },
    {
      key: '4',
      title: 'Class',
      dataIndex: 'class',
    },
    {
      key: '5',
      title: 'Subject',
      dataIndex: 'subject',
    },
    {
      key: '6',
      title: 'Chapter',
      dataIndex: 'chapter',
    },
    {
      key: '7',
      title: 'Created On',
      dataIndex: 'created_on',
    },
    {
      key: '8',
      title: 'Action',
      dataIndex: 'action',
      render: () => (
        <div className="flex gap-2">
          <Button
            onClick={() => handleEditModal(true)}
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
            title="Student Details"
          >
            <EyeOutlined />
          </Button>
          <Button
            onClick={() => handleDetailModal(true)}
            style={{
              border: 'none',
              padding: '2px 8px',
              background: 'transparent',
              boxShadow: 'none',
            }}
            title="Result"
          >
            Result
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Student Workbook List" activeKey="10.4">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Result Workbook List for Student</p>
              <p className="text-base text-[#616161] font-light">Manage student workbook</p>
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
          <Table columns={workbookColumns} dataSource={workbookData} />
        </Card>
      </Card>

      <WorkStudentDetail open={open.edit} onCancel={handleEditModal} />
      <StudentWorkBookResult open={open.details} onCancel={handleDetailModal} />
    </DashboardContainer>
  );
};

export default index;
