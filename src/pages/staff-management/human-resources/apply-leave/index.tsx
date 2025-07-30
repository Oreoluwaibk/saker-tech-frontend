import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Button, Input, Table } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { Eye, Download } from '../../../../../assets/icons';

interface LeaveRecord {
  key: number;
  staff: string;
  fromDate: string;
  toDate: string;
  status: string;
}

const index = () => {
  const [leavesDataSource] = useState<LeaveRecord[]>([
    { key: 1, staff: 'SuperAdmin', fromDate: '2025-01-16', toDate: '2024-12-31', status: 'tested' },
    { key: 2, staff: 'SuperAdmin', fromDate: '2025-01-16', toDate: '2024-12-31', status: 'test' },
    { key: 3, staff: 'SuperAdmin', fromDate: '2025-01-16', toDate: '2024-12-31', status: 'sick' },
    { key: 4, staff: 'SuperAdmin', fromDate: '2025-01-16', toDate: '2024-12-31', status: 'ok' },
    { key: 5, staff: 'SuperAdmin', fromDate: '2025-01-16', toDate: '2024-12-31', status: 'tested' },
  ]);

  const LeavesColumn: ColumnsType<LeaveRecord> = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Staff',
      dataIndex: 'staff',
    },
    {
      key: '3',
      title: 'From Date',
      dataIndex: 'fromDate',
    },
    {
      key: '4',
      title: 'To Date',
      dataIndex: 'toDate',
    },
    {
      key: '5',
      title: 'Status',
      dataIndex: 'status',
      render: (value: string) => (
        <span className="capitalize font-medium text-[#3E444C] bg-[#F0F0F0] px-2 py-1 rounded-md">
          {value}
        </span>
      ),
    },
    {
      key: '6',
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
          <Button
            style={{
              border: 'none',
              padding: 2,
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <Image src={Download} alt="download" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Leaves" activeKey="11.4">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Leaves</p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of leaves
              </p>
            </div>
          </div>
        }
        extra={
          <Button
            type="primary"
            className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            icon={<PlusOutlined />}
          >
            Add Leave Request
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
          <Table
            rowKey="key"
            columns={LeavesColumn}
            dataSource={leavesDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default index;
