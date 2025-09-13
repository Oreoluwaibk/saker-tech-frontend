import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Input, Switch, Table } from "antd";
import {
  DeleteFilled,
  EditFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

// ✅ Correct type
type TemplateListItem = {
  key: number;
  boardName: string;
  templateName: string;
  templateList: string;
  isActive: boolean;
};

const TemplateListPage = () => {
  // ✅ Use TemplateListItem
  const [templates, setTemplates] = useState<TemplateListItem[]>([
    {
      key: 1,
      boardName: "Board A",
      templateName: "Template One",
      templateList: "Math, Science, English",
      isActive: true,
    },
    {
      key: 2,
      boardName: "Board B",
      templateName: "Template Two",
      templateList: "History, Geography",
      isActive: false,
    },
  ]);

  // ✅ Define table columns
  const templateColumns: ColumnsType<TemplateListItem> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "boardName",
      title: "Board Name",
      dataIndex: "boardName",
    },
    {
      key: "templateName",
      title: "Template Name",
      dataIndex: "templateName",
    },
    {
      key: "templateList",
      title: "Template List",
      dataIndex: "templateList",
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
              setTemplates((prev) =>
                prev.map((template) =>
                  template.key === record.key
                    ? { ...template, isActive: checked }
                    : template
                )
              )
            }
          />
        </div>
      ),
    },
  ];

  // ✅ Search bar
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
    <DashboardContainer name="Manage Template" activeKey="27.1">
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
                Template Lists
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and monitor lists of templates
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
            Add Template
          </Button>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={templateColumns}
            dataSource={templates}
            scroll={{ x: true }}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default TemplateListPage;
