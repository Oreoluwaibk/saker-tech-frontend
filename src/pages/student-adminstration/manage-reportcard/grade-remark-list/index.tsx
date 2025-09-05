import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Input, Table } from "antd";
import { SearchOutlined, FilterOutlined, EditFilled } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { Eye } from "../../../../../assets/icons";

interface GradeRemarkList {
  key: number;
  name: string;
  remark: string;
}

const Index = () => {
  const [gradeRemarkDataSource] = useState<GradeRemarkList[]>([]);

  const gradeRemarkListColumn: ColumnsType<GradeRemarkList> = [
    {
      key: "1",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "2",
      title: "Grade Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Remark",
      dataIndex: "remark",
    },
     {
      key: '4',
      title: 'Action',
      dataIndex: 'action',
      render: () => (
        <div className="flex gap-2">
          <Button
            style={{
              border: 'none',
              padding: 2,
              background: 'transparent',
              boxShadow: 'none',
            }}
          >
            <EditFilled/>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardContainer name="Manage Report Card" activeKey="30.2">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: "#F6F6F6" },
          header: { backgroundColor: "#f6f6f6" },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">Grade Remark List</p>
              <p className="text-base text-[#616161] font-light">
                Manage and track report card
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
            columns={gradeRemarkListColumn}
            dataSource={gradeRemarkDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default Index;