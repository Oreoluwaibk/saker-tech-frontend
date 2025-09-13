import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Input, Table } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { Eye } from "../../../../../assets/icons";

interface AttendanceRecord {
  key: number;
  name: string;
  class: string;
  subject: string;
  topic: string;
  startTime: string;
  endTime: string;
  date: string;
  status: string;
  createdBy: string;
}

const Index = () => {
  const [attendanceDataSource] = useState<AttendanceRecord[]>([
    {
      key: 1,
      name: "Math Assignment 1",
      class: "SS1",
      subject: "Mathematics",
      topic: "Algebra",
      startTime: "08:00 AM",
      endTime: "10:00 AM",
      date: "2025-01-16",
      status: "Published",
      createdBy: "SuperAdmin",
    },
    {
      key: 2,
      name: "English Essay",
      class: "SS2",
      subject: "English",
      topic: "Narrative Writing",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      date: "2025-01-20",
      status: "Draft",
      createdBy: "SuperAdmin",
    },
  ]);

  const AttendanceListColumn: ColumnsType<AttendanceRecord> = [
    {
      key: "1",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "2",
      title: "Assignment Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Class",
      dataIndex: "class",
    },
    {
      key: "4",
      title: "Subject",
      dataIndex: "subject",
    },
    {
      key: "5",
      title: "Topic",
      dataIndex: "topic",
    },
    {
      key: "6",
      title: "Start Time",
      dataIndex: "startTime",
    },
    {
      key: "7",
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      key: "8",
      title: "Date",
      dataIndex: "date",
    },
    {
      key: "9",
      title: "Status",
      dataIndex: "status",
      render: (status: string) => {
        let color = "";
        if (status === "Published") color = "bg-green-100 text-green-600";
        if (status === "Draft") color = "bg-yellow-100 text-yellow-600";

        return (
          <span
            className={`px-3 py-1 rounded-md font-medium ${color}`}
            style={{ textTransform: "capitalize" }}
          >
            {status}
          </span>
        );
      },
    },
    {
      key: "10",
      title: "Action",
      render: () => (
        <div className="flex gap-2">
          <Button
            style={{
              border: "none",
              padding: 2,
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <Image src={Eye} alt="view" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="General Attendance report" activeKey="29.2">
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
