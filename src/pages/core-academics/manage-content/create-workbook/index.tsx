import React, { useState } from 'react';
import { Button, Card, Input, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SearchOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';

import DashboardContainer from '@/components/dashboard/DashboardContainer';
import WorkStudentDetail from '@/components/modals/WorkStudentDetail';
import EditWorkBook from '@/components/modals/EditWorkbook';
import CreateWorkbook from '@/components/modals/CreateWorkbook';

const index: React.FC = () => {
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
    create: false,
  });

  const handleModalToggle = (type: 'details' | 'edit' | 'create', state: boolean) => {
    setOpen({
      details: false,
      edit: false,
      create: false,
      [type]: state,
    });
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
            onClick={() => handleModalToggle('details', true)}
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <EyeOutlined />
          </Button>
          <Button
            onClick={() => handleModalToggle('edit', true)}
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <EditOutlined />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Work book" activeKey="10.1">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Work Book List</p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of workbooks
              </p>
            </div>
          </div>
        }
        extra={
          <Button
            onClick={() => handleModalToggle('create', true)}
            className="!text-black"
            type="primary"
          >
            Create WorkBook
          </Button>
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

      <CreateWorkbook open={open.create} onCancel={() => handleModalToggle('create', false)} />
      <WorkStudentDetail open={open.details} onCancel={() => handleModalToggle('details', false)} />
      <EditWorkBook open={open.edit} onCancel={() => handleModalToggle('edit', false)} />
    </DashboardContainer>
  );
};

export default index;
