import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Input, Table } from "antd";
import {
  SearchOutlined,
  EyeFilled,
  UploadOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface ReportCardRecord {
  key: number;
  academicSession: string;
  board: string;
  class: string;
  reportCardType: string;
  reportCardName: string;
  totalStudents: number;
  uploadProject: string;
  generateOn: string;
  publishedOn: string;
}

const ReportCardList = () => {
  const [reportCardDataSource] = useState<ReportCardRecord[]>([
    {
      key: 1,
      academicSession: "2024-2025",
      board: "WAEC",
      class: "Class I",
      reportCardType: "Final Report Card",
      reportCardName: "Elite Mindz testing2",
      totalStudents: 1,
      uploadProject: "Upload Project",
      generateOn: "01-03-2023",
      publishedOn: "01-03-2023",
    },
    {
      key: 2,
      academicSession: "2021-2022",
      board: "GCE",
      class: "Class II",
      reportCardType: "Half Yearly Report Card",
      reportCardName: "Term-1",
      totalStudents: 1,
      uploadProject: "Uploaded",
      generateOn: "26-09-2022",
      publishedOn: "26-09-2022",
    },
    {
      key: 3,
      academicSession: "2021-2022",
      board: "WAEC",
      class: "Class I",
      reportCardType: "Half Yearly Report Card",
      reportCardName: "Testing By Mindz",
      totalStudents: 1,
      uploadProject: "Upload Project",
      generateOn: "25-04-2022",
      publishedOn: "25-04-2022",
    },
    {
      key: 4,
      academicSession: "2024-2025",
      board: "WAEC",
      class: "Class I",
      reportCardType: "Half Yearly Report Card",
      reportCardName: "HalfYearly Report card",
      totalStudents: 1,
      uploadProject: "Upload Project",
      generateOn: "25-10-2024",
      publishedOn: "25-10-2024",
    },
  ]);

  const reportCardColumns: ColumnsType<ReportCardRecord> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "academicSession",
      title: "Academic Session",
      dataIndex: "academicSession",
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
      key: "reportCardName",
      title: "Report Card Name",
      dataIndex: "reportCardName",
    },
    {
      key: "totalStudents",
      title: "Total Students",
      dataIndex: "totalStudents",
    },
    {
      key: "uploadProject",
      title: "Upload Project",
      dataIndex: "uploadProject",
      render: (text: string) => (
        <Button
          type="text"
          color="primary"
           variant="outlined"
          
        >
          {text}
        </Button>
      ),
    },
    {
      key: "generateOn",
      title: "Generate On",
      dataIndex: "generateOn",
    },
    {
      key: "publishedOn",
      title: "Published On",
      dataIndex: "publishedOn",
    },
    {
      key: "action",
      title: "Action",
      render: () => (
        <Button
          icon={<EyeFilled />}
         
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
    <DashboardContainer name="Manage Report Card" activeKey="30.4">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: "#F6F6F6" },
          header: { backgroundColor: "#f6f6f6" },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex flex-col gap-3">
            <p className="text-[30px] text-[#050505] font-semibold">
              Report Card List
            </p>
            <p className="text-base text-[#616161] font-light">
              Manage and track lists of report card
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
            Generate Report Card
          </Button>
        }
      >
        <Card
          extra={
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
          }
        >
          <Table
            rowKey="key"
            scroll={{ x: true }}
            columns={reportCardColumns}
            dataSource={reportCardDataSource}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default ReportCardList;
