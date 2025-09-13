import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Table, Input, Button } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface AttendanceRecord {
  key: number;
  employeeType: string;
  employeeName: string;
  date: string;
  timeIn: string;
  timeOut: string;
  duration: string;
  status: "Holiday" | "Absent" | "Present";
}

const AttendancePage = () => {
  const [attendanceData] = useState<AttendanceRecord[]>([
    {
      key: 1,
      employeeType: "Staff",
      employeeName: "Master Teacher [PATCY101]",
      date: "13-08-25",
      timeIn: "-",
      timeOut: "-",
      duration: "-",
      status: "Holiday",
    },
    {
      key: 2,
      employeeType: "Staff",
      employeeName: "Sheetal Raj Rana [SHTCY102]",
      date: "13-08-25",
      timeIn: "-",
      timeOut: "-",
      duration: "-",
      status: "Holiday",
    },
    {
      key: 3,
      employeeType: "Staff",
      employeeName: "Shilpi Marwah [SHTCY103]",
      date: "13-08-25",
      timeIn: "-",
      timeOut: "-",
      duration: "-",
      status: "Absent",
    },
    {
      key: 4,
      employeeType: "Staff",
      employeeName: "Aabha 56 [AATCY108]",
      date: "13-08-25",
      timeIn: "-",
      timeOut: "-",
      duration: "-",
      status: "Present",
    },
  ]);

  const columns: ColumnsType<AttendanceRecord> = [
    {
      title: "S/N",
      key: "sn",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Employee Type",
      dataIndex: "employeeType",
      key: "employeeType",
    },
    {
      title: "Employee Name",
      dataIndex: "employeeName",
      key: "employeeName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time In",
      dataIndex: "timeIn",
      key: "timeIn",
    },
    {
      title: "Time Out",
      dataIndex: "timeOut",
      key: "timeOut",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Action",
      dataIndex: "status",
      key: "status",
      render: (status: AttendanceRecord["status"]) => {
        let color = "";
        if (status === "Holiday") color = "bg-green-100 text-green-600";
        if (status === "Absent") color = "bg-red-100 text-red-600";
        if (status === "Present") color = "bg-blue-100 text-blue-600";

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
  ];

  return (
    <DashboardContainer name="General Attendance Details" activeKey="29.1">
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
                General Attendance
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track attendance details
              </p>
            </div>
          </div>
        }
      >
        <Card
          variant="borderless"
          extra={
            <div className="flex items-center gap-2">
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search.."
                style={{
                  height: 38,
                  width: 180,
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
            columns={columns}
            dataSource={attendanceData}
            pagination={{ pageSize: 10 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default AttendancePage;
