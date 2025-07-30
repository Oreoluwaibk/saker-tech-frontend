import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Button, Input, Table } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { Delete, Edit } from '../../../../../assets/icons';

const index = () => {
  const [leavesDataSource] = useState([
    { key: 1, name: 'Kudi Leave' },
    { key: 2, name: 'Flexi Leave' },
    { key: 3, name: 'Aleci bonn' },
    { key: 4, name: 'Bubbles Ajamis' },
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
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
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
            <Image src={Edit} alt="edit" />
          </Button>
          <Button
            style={{
              border: 'none',
              padding: '2px',
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <Image src={Delete} alt="delete" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Leaves" activeKey="11.2">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Leaves Type</p>
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
            Add Leave
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
