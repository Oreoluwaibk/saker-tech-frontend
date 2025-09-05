import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Input, Table } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  EditFilled,
  DownloadOutlined,
  UploadOutlined,
  EyeFilled,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface UploadStudentRecord {
  key: number;
  board: string;
  class: string;
  reportCardType: string;
  extraCurricularSubjectName: string;
  createdOn: string;
}

// Note: includes action button to view uploaded student grades
const Index = () => {
  const [uploadStudentDataSource] = useState<UploadStudentRecord[]>([
    {
      key: 1,
      board: "WAEC",
      class: "SS1",
      reportCardType: "Termly",
      extraCurricularSubjectName: "Music, Arts",
      createdOn: "2025-09-01",
    },
    {
      key: 2,
      board: "NECO",
      class: "SS2",
      reportCardType: "Annual",
      extraCurricularSubjectName: "Drama, Sports",
      createdOn: "2025-09-02",
    },
  ]);

  const uploadStudentListColumns: ColumnsType<UploadStudentRecord> = [
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
      key: "reportCardType",
      title: "Report Card Type",
      dataIndex: "reportCardType",
    },
    {
      key: "extraCurricularSubjectName",
      title: "Extra-Curricular Subjects",
      dataIndex: "extraCurricularSubjectName",
    },
    {
      key: "createdOn",
      title: "Created On",
      dataIndex: "createdOn",
    },
    {
      key: "action",
      title: "Action",
      render: () => (
        <Button
          icon={<EyeFilled/>}
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
    <DashboardContainer name="Manage Report Card" activeKey="30.7">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: "#F6F6F6" },
          header: { backgroundColor: "#f6f6f6" },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex flex-col gap-3">
            <p className="text-[30px] text-[#050505] font-semibold">
              Upload Student Mark 
            </p>
            <p className="text-base text-[#616161] font-light">
              Manage and track report card
            </p>
          </div>
        }
        extra={
          <div className="flex items-center gap-2">
            <Button
              icon={<DownloadOutlined />}
              style={{
                backgroundColor: "#FFD700",
                border: "none",
                height: 38,
                fontWeight: 600,
              }}
            >
              Download Excel
            </Button>
            <Button
              icon={<UploadOutlined />}
              style={{
                backgroundColor: "#FFD700",
                border: "none",
                height: 38,
                fontWeight: 600,
              }}
            >
              Upload Excel
            </Button>
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
            columns={uploadStudentListColumns}
            dataSource={uploadStudentDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default Index;
