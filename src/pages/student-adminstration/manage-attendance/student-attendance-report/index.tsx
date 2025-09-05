import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Input, Table } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { Eye } from "../../../../../assets/icons";

interface AttendanceRecord {
  key: number;
  date: string;
  class: string;
  id: string;
  name: string;
}

const Index = () => {
  const [attendanceDataSource] = useState<AttendanceRecord[]>([]);

  const AttendanceListColumn: ColumnsType<AttendanceRecord> = [
    {
      key: "1",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "2",
      title: "Date",
      dataIndex: "date",
    },
    {
      key: "3",
      title: "Class",
      dataIndex: "class",
    },
    {
      key: "4",
      title: "Student ID",
      dataIndex: "id",
    },
    {
      key: "5",
      title: "Student Name",
      dataIndex: "name",
    },
  ];

  return (
    <DashboardContainer name="General Attendance report" activeKey="29.4">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: "#F6F6F6" },
          header: { backgroundColor: "#f6f6f6" },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">
                General Attendance Report
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track attendance
              </p>
            </div>
          </div>
        }
      >
        <Card
          extra={
            <div className="flex items-center gap-2">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search..."
                style={{
                  height: 38,
                  width: 160,
                  backgroundColor: "#F4F4F4",
                  border: "none",
                }}
              />
              <Button
                icon={<FilterOutlined />}
                style={{
                  backgroundColor: "#FFD700",
                  border: "none",
                  height: 38,
                  fontWeight: 600,
                }}
              >
                Status
              </Button>
            </div>
          }
        >
          <Table
            rowKey="key"
            columns={AttendanceListColumn}
            dataSource={attendanceDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default Index;
