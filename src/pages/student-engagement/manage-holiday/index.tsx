import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Input, Select, Switch, Table } from "antd";
import {
  AlignCenterOutlined,
  DeleteFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

type HolidayList = {
  key: number;
  name: string;
  date: string;
  isActive: boolean;
};

const { Option } = Select;

const HolidayListPage = () => {
  const [holidays, setHolidays] = useState<HolidayList[]>([
    {
      key: 1,
      name: "New Year",
      date: "2025-01-01",
      isActive: true,
    },
    {
      key: 2,
      name: "Independence Day",
      date: "2025-10-01",
      isActive: false,
    },
  ]);

  const holidayListColumns: ColumnsType<HolidayList> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
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
            onClick={() =>
              setHolidays((prev) =>
                prev.filter((holiday) => holiday.key !== record.key)
              )
            }
          >
            <DeleteFilled />
          </Button>

          <span
            className={`p-1 px-2 rounded-xl font-bold ${
              value
                ? "bg-[#FED500]/20 text-[#FED500]"
                : "bg-[#F6F6F6] text-black"
            }`}
          >
            {value ? "Active" : "Inactive"}
          </span>

          <Switch
            size="small"
            checked={value}
            onChange={(checked) =>
              setHolidays((prev) =>
                prev.map((holiday) =>
                  holiday.key === record.key
                    ? { ...holiday, isActive: checked }
                    : holiday
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
    <DashboardContainer name="Manage Holiday" activeKey="22">
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
                Holiday List
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of Holidays
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
            Add Holiday
          </Button>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={holidayListColumns}
            dataSource={holidays}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default HolidayListPage;
