import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card,  Input, Table, Select } from 'antd';
import {SearchOutlined, AlignCenterOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { Option } = Select;

interface LeaveData {
  id: number;
  fromDate: string;
  toDate: string;
  className: string;
  studentName: string;
  description: string;
  status: string;
}

const index = () => {
  const [leavesDataSource] = useState<LeaveData[]>([
    {
      id: 1,
      fromDate: "2022-05-30",
      toDate: "2022-06-21",
      className: "Class XII Checker",
      studentName: "FatherOfPuhupwasNew",
      description: "leaves application",
      status: "Unapproved",
    },
    {
      id: 2,
      fromDate: "2022-05-30",
      toDate: "2022-05-31",
      className: "Class II",
      studentName: "FatherOfPuhupwasNew",
      description: "leaves",
      status: "Unapproved",
    },
    {
      id: 3,
      fromDate: "2022-04-20",
      toDate: "2022-04-25",
      className: "Class I",
      studentName: "Yogesh Kumar Sarswat",
      description: "leaves",
      status: "Approved",
    },
    {
      id: 4,
      fromDate: "2022-06-30",
      toDate: "2022-07-02",
      className: "Class III",
      studentName: "SURESH KUMAR",
      description: "going to outside the station",
      status: "Approved",
    },
    {
      id: 5,
      fromDate: "2022-06-30",
      toDate: "2022-07-05",
      className: "Class I",
      studentName: "HarrySon",
      description: "testing",
      status: "Approved",
    },
    {
      id: 6,
      fromDate: "2022-06-30",
      toDate: "2022-07-05",
      className: "Class I",
      studentName: "HarrySon",
      description: "testing",
      status: "Unapproved",
    },
    {
      id: 7,
      fromDate: "2022-06-30",
      toDate: "2022-07-02",
      className: "Class I",
      studentName: "HarrySon",
      description: "testing",
      status: "Unapproved",
    },
    {
      id: 8,
      fromDate: "2022-07-04",
      toDate: "2022-07-12",
      className: "Class III",
      studentName: "RAJENDRA KUMAR MEENA",
      description: "testing",
      status: "Unapproved",
    },
    {
      id: 9,
      fromDate: "2022-07-04",
      toDate: "2022-07-12",
      className: "Class III",
      studentName: "RAJENDRA KUMAR MEENA",
      description: "testing",
      status: "Unapproved",
    },
    {
      id: 10,
      fromDate: "2022-07-20",
      toDate: "2022-07-30",
      className: "Class III",
      studentName: "RAJENDRA KUMAR MEENA",
      description: "testing",
      status: "Approved",
    }
  ]);

  const LeavesColumn: ColumnsType<LeaveData> = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "index",
      render: (_, __, index) => index + 1,
    },
    {
      key: "2",
      title: "Student's Name",
      dataIndex: "studentName",
    },
    {
      key: "3",
      title: "Class Name",
      dataIndex: "className",
    },
    {
      key: "4",
      title: "From Date",
      dataIndex: "fromDate",
    },
    {
      key: "5",
      title: "To Date",
      dataIndex: "toDate",
    },
    {
      key: "6",
      title: "Leave Description",
      dataIndex: "description",
    },
    {
      key: "7",
      title: "Action",
      dataIndex: "status",
      render: (value: string) => {
        const isUnapproved = value.toLowerCase() === 'unapproved';
        const classNames = isUnapproved
          ? 'bg-[#FFE7E7] text-[#BA0003]'
          : 'bg-[#FFFDF0] text-[#FED500]';

        return (
          <p className={`${classNames} text-center font-medium p-1 rounded-md`}>
            {value}
          </p>
        );
      },
    }
  ];

  const tabBarExtras = (
    <div className="flex items-center gap-4 py-4">
      <Input
        prefix={<SearchOutlined />}
        placeholder='Search...'
        style={{ height: 38, width: 146, backgroundColor: "#F4F4F4", border: "none" }}
      />

      <Select
        placeholder="All status"
        className="yellow_style"
        style={{ height: 38, width: 155, backgroundColor: "#FED500", border: "none" }}
        suffixIcon={<AlignCenterOutlined rotate={180} />}
      >
        <Option value="all">All</Option>
        <Option value="approved">Approved</Option>
        <Option value="unapproved">Unapproved</Option>
      </Select>
    </div>
  );

  return (
    <DashboardContainer name="Manage Leaves" activeKey="11.7">
      <Card
        variant="borderless"
        styles={{ body: { backgroundColor: "#F6F6F6" }, header: { backgroundColor: "#F6F6F6" } }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Student's List of Leaves</p>
              <p className="text-base text-[#616161] font-light">Manage and track lists of leaves</p>
            </div>
          </div>
        }
      >
        <Card extra={tabBarExtras}>
          <Table
            rowKey="id"
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
