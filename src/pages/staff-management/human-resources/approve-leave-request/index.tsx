import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Button, Input, Table } from 'antd';
import { DownloadOutlined, EyeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { Eye, Download } from '../../../../../assets/icons';

const index = () => {
  const [leavesDataSource] = useState([
    {
      key: 1,
      staff: 'Math Teacher',
      leaveDate: '2025-01-16',
      applyDate: '2024-12-31',
      status: 'pending',
    },
    {
      key: 2,
      staff: 'School Counselor',
      leaveDate: '2025-01-18',
      applyDate: '2025-01-02',
      status: 'pending',
    },
    {
      key: 3,
      staff: 'Librarian',
      leaveDate: '2025-01-20',
      applyDate: '2025-01-03',
      status: 'pending',
    },
    {
      key: 4,
      staff: 'Science Lab Assistant',
      leaveDate: '2025-01-22',
      applyDate: '2025-01-05',
      status: 'pending',
    },
    {
      key: 5,
      staff: 'Vice Principal',
      leaveDate: '2025-01-25',
      applyDate: '2025-01-06',
      status: 'pending',
    },
  ]);

  const LeavesColumn: ColumnsType = [
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
      title: 'Status',
      dataIndex: 'status',
    },
    {
      key: '4',
      title: 'Leave Date',
      dataIndex: 'leaveDate',
    },
    {
      key: '5',
      title: 'Apply Date',
      dataIndex: 'applyDate',
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
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <EyeOutlined/>
          </Button>
          <Button
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
           <DownloadOutlined/> 
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Leaves" activeKey="11.3">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Approve Leaves List</p>
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
          <Table columns={LeavesColumn} dataSource={leavesDataSource} />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default index;
