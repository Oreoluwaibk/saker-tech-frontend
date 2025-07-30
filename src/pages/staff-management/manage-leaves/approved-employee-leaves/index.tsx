import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Button, Input, Table, Select } from 'antd';
import { PlusOutlined, SearchOutlined, AlignCenterOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { Eye, Download } from '../../../../../assets/icons';

const { Option } = Select;

const index = () => {
  const [leavesDataSource] = useState([]);

  const LeavesColumn: ColumnsType = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Employee Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Employee Type',
      dataIndex: 'type',
    },
    {
      key: '4',
      title: 'From Date',
      dataIndex: 'fromDate',
    },
    {
      key: '5',
      title: 'To Date',
      dataIndex: 'toDate',
    },
    {
      key: '6',
      title: 'Total Days',
      dataIndex: 'days',
    },
    {
      key: '7',
      title: 'Applied on',
      dataIndex: 'appliedOn',
    },
    {
      key: '8',
      title: 'Action',
      dataIndex: 'action',
    },
  ];

  const tabBarExtras = (
    <div className="flex items-center gap-4 py-4">
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

      <Select
        placeholder="All status"
        className="yellow_style"
        style={{
          height: 38,
          width: 155,
          backgroundColor: '#FED500',
          border: 'none',
        }}
        suffixIcon={<AlignCenterOutlined rotate={180} />}
      >
        <Option>January</Option>
      </Select>
    </div>
  );

  return (
    <DashboardContainer name="Manage Leaves" activeKey="11.8">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">
                Approved Employee Leaves List
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of leaves
              </p>
            </div>
          </div>
        }
      >
        <Card extra={tabBarExtras}>
          <Table columns={LeavesColumn} dataSource={leavesDataSource} />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default index;
