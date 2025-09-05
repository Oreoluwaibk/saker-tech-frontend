import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Input, Table } from "antd";
import { SearchOutlined, FilterOutlined, EditFilled, PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface mapCoreRecord {
  key: number;
  board: string;
  class: string;
  coreSubjects: string;
  extraSubjects: string;
}

const Index = () => {
  const [mapCoreDataSource] = useState<mapCoreRecord[]>([
    {
      key: 1,
      board: "WAEC",
      class: "SS1",
      coreSubjects: "Math, English, Physics",
      extraSubjects: "Music, Arts",
    },
    {
      key: 2,
      board: "NECO",
      class: "SS2",
      coreSubjects: "Biology, Chemistry",
      extraSubjects: "Drama, Sports",
    },
  ]);

  const mapCoreListColumns: ColumnsType<mapCoreRecord> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "board",
      title: "Board",
      dataIndex: "board",
    },
    {
      key: "class",
      title: "Class",
      dataIndex: "class",
    },
    {
      key: "coreSubjects",
      title: "Core Academic Subjects",
      dataIndex: "coreSubjects",
    },
    {
      key: "extraSubjects",
      title: "Extra-Curricular Subjects",
      dataIndex: "extraSubjects",
    },
    {
      key: "action",
      title: "Action",
      render: () => (
        <Button
          icon={<EditFilled />}
          style={{
            border: "none",
            background: "transparent",
            boxShadow: "none",
          }}
        />
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Report Card" activeKey="30.3">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: "#F6F6F6" },
          header: { backgroundColor: "#f6f6f6" },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex flex-col gap-3">
            <p className="text-[30px] text-[#050505] font-semibold">
              Map Core Academics / Extra-curricular Subjects
            </p>
            <p className="text-base text-[#616161] font-light">
              Manage and track report card
            </p>
          </div>
        }
        extra={
          <Button
            icon={<PlusOutlined />}
            style={{
              backgroundColor: "#FFD700",
              border: "none",
              height: 38,
              fontWeight: 600,
            }}
          >
            Add Subjects
          </Button>
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
            columns={mapCoreListColumns}
            dataSource={mapCoreDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default Index;
