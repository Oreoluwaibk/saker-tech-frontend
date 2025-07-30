import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const index = () => {
  const [leavesDataSource] = useState([
    { key: 1, name: '0', day: '12' },
    { key: 2, name: '0', day: '8' },
    { key: 3, name: '0', day: '7' },
    { key: 4, name: '0', day: '5' },
    { key: 5, name: '0', day: '10' },
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
      title: 'Day',
      dataIndex: 'day',
      render: (value: string) => (
        <Input
          style={{ width: '200px' }}
          value={value}
          disabled
          type="text"
        />
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
              <p className="text-[30px] text-[#050505] font-semibold">Leave Type List</p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of leaves
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
          <Table columns={LeavesColumn} dataSource={leavesDataSource} />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default index;
