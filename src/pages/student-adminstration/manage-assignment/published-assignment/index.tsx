import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Button, Input, Table } from 'antd';
import { EditFilled, PlusOutlined, SearchOutlined, DeleteFilled } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { Eye, Download } from '../../../../../assets/icons';

interface AssignmentRecord {
  key: number;
  name: string;
  class: string;
  subject: string;
  topic: string;
  createdOn: string;
  createdBy: string;
}

const Index = () => {
  const [assignmentsDataSource] = useState<AssignmentRecord[]>([
    {
      key: 1,
      name: 'Math Assignment 1',
      class: 'SS1',
      subject: 'Mathematics',
      topic: 'Algebra',
      createdOn: '2025-01-16',
      createdBy: 'SuperAdmin',
    },
    {
      key: 2,
      name: 'English Essay',
      class: 'SS2',
      subject: 'English',
      topic: 'Narrative Writing',
      createdOn: '2025-01-20',
      createdBy: 'SuperAdmin',
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
      title: 'Assignment Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Class',
      dataIndex: 'class',
    },
    {
      key: '4',
      title: 'Subject',
      dataIndex: 'subject',
    },
    {
      key: '5',
      title: 'Topic',
      dataIndex: 'topic',
    },
    {
      key: '6',
      title: 'Created On',
      dataIndex: 'createdOn',
    },
    {
      key: '7',
      title: 'Created By',
      dataIndex: 'createdBy',
    }, 
    {
      key: '9',
      title: 'Action',
      dataIndex: 'action',
      render: () => (
        <div className="flex gap-2">
          <Button
            style={{
              border: 'none',
              padding: 2,
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <Image src={Eye} alt="view" />
          </Button>
        </div>
      ),
},
  ];

  return (
    <DashboardContainer name="Published Assignment" activeKey="28.3">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Published Assignment List</p>
              <p className="text-base text-[#616161] font-light">Manage and track lists of published assignment</p>
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
