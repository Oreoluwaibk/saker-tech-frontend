import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Input, Select, Table } from "antd";
import {
  AlignCenterOutlined,
  DeleteFilled,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { Delete } from "../../../../../assets/icons";

type NoticeBoardViewedItem = {
  key: number;
  userType: string;
  noticeTitle: string;
  noticeViewedTime: string;
  noOfViewedStudent: number;
  noOfViewedParent: number;
  noticeDescription: string;
};

const { Option } = Select;

const NoticeViewedStudentPage = () => {
  const [viewedNotices, setViewedNotices] = useState<NoticeBoardViewedItem[]>([
    {
      key: 1,
      userType: "Student",
      noticeTitle: "New Year Holiday",
      noticeViewedTime: "2025-01-01 10:00 AM",
      noOfViewedStudent: 45,
      noOfViewedParent: 10,
      noticeDescription: "School will remain closed for New Year celebration 🎉",
    },
    {
      key: 2,
      userType: "Parent",
      noticeTitle: "Staff Meeting",
      noticeViewedTime: "2025-02-10 09:00 AM",
      noOfViewedStudent: 0,
      noOfViewedParent: 25,
      noticeDescription: "Reminder: Monthly staff meeting in the hall.",
    },
  ]);

  const viewedColumns: ColumnsType<NoticeBoardViewedItem> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "noticeTitle",
      title: "Notice Title",
      dataIndex: "noticeTitle",
    },
    {
      key: "userType",
      title: "User Type",
      dataIndex: "userType",
    },
    {
      key: "noticeViewedTime",
      title: "Viewed Time",
      dataIndex: "noticeViewedTime",
    },
    {
      key: "noOfViewedStudent",
      title: "Viewed By Students",
      dataIndex: "noOfViewedStudent",
    },
    {
      key: "noOfViewedParent",
      title: "Viewed By Parents",
      dataIndex: "noOfViewedParent",
    },
    {
      key: "noticeDescription",
      title: "Description",
      dataIndex: "noticeDescription",
      ellipsis: true,
    },
    {
      key: "action",
      title: "Action",
      render: () => (
        <div className="flex items-center gap-2">
          <Button
            style={{
              border: "none",
              padding: "2px",
              background: "transparent",
              boxShadow: "none",
            }}
          >
             <DeleteFilled/>
          </Button>
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
          width: 146,
          backgroundColor: "#F4F4F4",
          border: "none",
        }}
      />

      <Select
        placeholder="All users"
        className="yellow_style"
        style={{
          height: 38,
          width: 155,
          backgroundColor: "#FED500",
          border: "none",
        }}
        suffixIcon={<AlignCenterOutlined rotate={180} />}
      >
        <Option value="student">Students</Option>
        <Option value="parent">Parents</Option>
      </Select>
    </div>
  );

  return (
    <DashboardContainer name="Manage Notice Board" activeKey="24.2">
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
                Notice Viewed List 
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and monitor who viewed the notices
              </p>
            </div>
          </div>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={viewedColumns}
            dataSource={viewedNotices}
            scroll={{ x: true }}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default NoticeViewedStudentPage;
