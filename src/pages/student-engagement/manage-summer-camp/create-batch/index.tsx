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

type BatchListItem = {
  key: number;
  ageGroup: string;
  batchName: string;
  teacherID: string;
  isActive: boolean;
};


const BatchListPage = () => {
  const [batches, setBatches] = useState<BatchListItem[]>([
    {
      key: 1,
      ageGroup: "06-09 Years",
      batchName: "Batch A",
      teacherID: "TCH-001",
      isActive: true,
    },
    {
      key: 2,
      ageGroup: "10-12 Years",
      batchName: "Batch B",
      teacherID: "TCH-002",
      isActive: false,
    },
  ]);

  const batchColumns: ColumnsType<BatchListItem> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "ageGroup",
      title: "Age Group",
      dataIndex: "ageGroup",
    },
    {
      key: "batchName",
      title: "Batch Name",
      dataIndex: "batchName",
    },
    {
      key: "teacherID",
      title: "Teacher ID",
      dataIndex: "teacherID",
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
              setBatches((prev) =>
                prev.map((batch) =>
                  batch.key === record.key
                    ? { ...batch, isActive: checked }
                    : batch
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
    </div>
  );

  return (
    <DashboardContainer name="Manage Batch" activeKey="25.2">
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
                Batch Lists
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and monitor lists of created batches
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
            Create Batch
          </Button>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={batchColumns}
            dataSource={batches}
            scroll={{ x: true }}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default BatchListPage;
