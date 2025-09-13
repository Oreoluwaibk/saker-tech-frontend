import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Input, Switch, Table } from "antd";
import {
  DeleteFilled,
  EditFilled,
  PlusOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

type StudentListItem = {
  key: number;
  loginID: string;
  studentName: string;
  parentName: string;
  ageGroup: string;
  parentContact: string;
  parentEmail: string;
  isActive: boolean;
};

const StudentListPage = () => {
  const [students, setStudents] = useState<StudentListItem[]>([
    {
      key: 1,
      loginID: "STU-001",
      studentName: "John Doe",
      parentName: "Mr. Doe",
      ageGroup: "06-09 Years",
      parentContact: "+234 801 234 5678",
      parentEmail: "parent.doe@example.com",
      isActive: true,
    },
    {
      key: 2,
      loginID: "STU-002",
      studentName: "Jane Smith",
      parentName: "Mrs. Smith",
      ageGroup: "10-12 Years",
      parentContact: "+234 802 345 6789",
      parentEmail: "parent.smith@example.com",
      isActive: false,
    },
  ]);

  const studentColumns: ColumnsType<StudentListItem> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "loginID",
      title: "Login ID",
      dataIndex: "loginID",
    },
    {
      key: "studentName",
      title: "Student Name",
      dataIndex: "studentName",
    },
    {
      key: "parentName",
      title: "Parent Name",
      dataIndex: "parentName",
    },
    {
      key: "ageGroup",
      title: "Age Group",
      dataIndex: "ageGroup",
    },
    {
      key: "parentContact",
      title: "Parent Contact",
      dataIndex: "parentContact",
    },
    {
      key: "parentEmail",
      title: "Parent Email",
      dataIndex: "parentEmail",
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "isActive",
      render: (value, record) => (
        <div className="flex items-center gap-2">
          {/* Edit button */}
          <Button
            style={{
              border: "none",
              padding: "2px",
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <EditFilled />
          </Button>
 

          {/* Active/Inactive label */}
          <span
            className={`p-1 px-2 rounded-xl font-bold ${
              value
                ? "bg-[#FED500]/20 text-[#FED500]"
                : "bg-[#F6F6F6] text-black"
            }`}
          >
            {value ? "Active" : "Inactive"}
          </span>

          {/* Switch toggle */}
          <Switch
            size="small"
            checked={value}
            onChange={(checked) =>
              setStudents((prev) =>
                prev.map((student) =>
                  student.key === record.key
                    ? { ...student, isActive: checked }
                    : student
                )
              )
            }
          />
        </div>
      ),
    },
  ];

  const tabBarExtras = (
    <div className="flex items-center gap-4 py-4">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search..."
        style={{
          height: 38,
          width: 200,
          backgroundColor: "#F4F4F4",
          border: "none",
        }}
      />
    </div>
  );

  return (
    <DashboardContainer name="Manage Student" activeKey="25.1">
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
                Student List
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and monitor lists of students
              </p>
            </div>
          </div>
        }
        extra={
          <div className="flex items-center gap-4">
            <Button
              variant="outlined"
              className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
              icon={<DownloadOutlined />}
            >
              Download Excel
            </Button>
            <Button
              type="primary"
              className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
              icon={<PlusOutlined />}
            >
              Add Student
            </Button>
          </div>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={studentColumns}
            dataSource={students}
            scroll={{ x: true }}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default StudentListPage;
