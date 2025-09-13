import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Input, Select, Switch, Table } from "antd";
import {
  AlignCenterOutlined,
  DeleteFilled,
  EditFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

type NoticeBoardItem = {
  key: number;
  userType: string;
  noticeTitle: string;
  noticeStartDate: string;
  noticeEndDate: string;
  noticeDescription: string;
  isActive: boolean;
};

const { Option } = Select;

const NoticeBoardListPage = () => {
  const [notices, setNotices] = useState<NoticeBoardItem[]>([
    {
      key: 1,
      userType: "All Students",
      noticeTitle: "New Year Holiday",
      noticeStartDate: "2025-01-01",
      noticeEndDate: "2025-01-02",
      noticeDescription: "School will remain closed for New Year celebration 🎉",
      isActive: true,
    },
    {
      key: 2,
      userType: "Teachers",
      noticeTitle: "Staff Meeting",
      noticeStartDate: "2025-02-10",
      noticeEndDate: "2025-02-10",
      noticeDescription: "Monthly staff meeting at 10 AM in the conference hall.",
      isActive: false,
    },
  ]);

  const noticeColumns: ColumnsType<NoticeBoardItem> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "noticeTitle",
      title: "Title",
      dataIndex: "noticeTitle",
    },
    {
      key: "userType",
      title: "User Type",
      dataIndex: "userType",
    },
    {
      key: "noticeStartDate",
      title: "From",
      dataIndex: "noticeStartDate",
    },
    {
      key: "noticeEndDate",
      title: "To",
      dataIndex: "noticeEndDate",
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
      dataIndex: "isActive",
      render: (value, record) => (
        <div className="flex items-center gap-2">
            <Button
              style={{
              border: "none",
              padding: "2px",
              background: "transparent",
              boxShadow: "none",
            }}
            >
                <EditFilled/>
            </Button>
          {/* Delete button */}
          <Button
            style={{
              border: "none",
              padding: "2px",
              background: "transparent",
              boxShadow: "none",
            }}
            onClick={() =>
              setNotices((prev) =>
                prev.filter((notice) => notice.key !== record.key)
              )
            }
          >
            <DeleteFilled />
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
              setNotices((prev) =>
                prev.map((notice) =>
                  notice.key === record.key
                    ? { ...notice, isActive: checked }
                    : notice
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
          width: 146,
          backgroundColor: "#F4F4F4",
          border: "none",
        }}
      />

      <Select
        placeholder="All status"
        className="yellow_style"
        style={{
          height: 38,
          width: 155,
          backgroundColor: "#FED500",
          border: "none",
        }}
        suffixIcon={<AlignCenterOutlined rotate={180} />}
      >
        <Option value="active">Active</Option>
        <Option value="inactive">Inactive</Option>
      </Select>
    </div>
  );

  return (
    <DashboardContainer name="Manage Notice Board" activeKey="24.1">
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
                Notice Board List
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and monitor notices for students and staff
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
            Add Notice
          </Button>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={noticeColumns}
            dataSource={notices}
            scroll={{ x: true }}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default NoticeBoardListPage;
