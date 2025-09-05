import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Button, Input, Table } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

interface AssignmentRecord {
  key: number;
  name: string;
  board: string;
  class: string;
  subject: string;
  topic: string;
  publishedOn: string;
  lateSubmissionDate: string;
  createdBy: string;
  totalStudents: number;
}

const Index = () => {
  const [assignmentsDataSource] = useState<AssignmentRecord[]>([
    {
      key: 1,
      name: 'Math Assignment 1',
      board: 'WAEC',
      class: 'SS1',
      subject: 'Mathematics',
      topic: 'Algebra',
      publishedOn: '2025-01-16',
      lateSubmissionDate: '2025-01-25',
      createdBy: 'SuperAdmin',
      totalStudents: 35,
    },
    {
      key: 2,
      name: 'English Essay',
      board: 'NECO',
      class: 'SS2',
      subject: 'English',
      topic: 'Narrative Writing',
      publishedOn: '2025-01-20',
      lateSubmissionDate: '2025-01-28',
      createdBy: 'SuperAdmin',
      totalStudents: 42,
    },
  ]);

  const AssignmentListColumn: ColumnsType<AssignmentRecord> = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
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
      title: 'Topic',
      dataIndex: 'topic',
    },
    {
      key: '7',
      title: 'Published On',
      dataIndex: 'publishedOn',
    },
    {
      key: '8',
      title: 'Deadline',
      dataIndex: 'lateSubmissionDate',
    },
    {
      key: '9',
      title: 'Published By',
      dataIndex: 'createdBy',
    },
    {
      key: '10',
      title: 'Total Students',
      dataIndex: 'totalStudents',
    },
  ];

  return (
    <DashboardContainer name="Submitted Assignment" activeKey="28.4">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Submitted Assignment List</p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of submitted assignments
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
          <Table
            rowKey="key"
            columns={AssignmentListColumn}
            dataSource={assignmentsDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default Index;
