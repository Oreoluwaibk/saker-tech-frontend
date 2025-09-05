import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Input, Select, Switch, Table } from "antd";
import {
  AlignCenterOutlined,
  DeleteFilled,
  EditFilled,
  EyeFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

type EventItem = {
  key: number;
  title: string;
  class: string;
  eventFromDate: string;
  eventToDate: string;
  eventNotificationMessage: string;
  eventFor: string;
  isActive: boolean;
};

const { Option } = Select;

const EventListPage = () => {
  const [events, setEvents] = useState<EventItem[]>([
    {
      key: 1,
      title: "New Year",
      class: "All Classes",
      eventFromDate: "2025-01-01",
      eventToDate: "2025-01-01",
      eventNotificationMessage: "Happy New Year Celebration 🎉",
      eventFor: "All Students",
      isActive: true,
    },
    {
      key: 2,
      title: "Independence Day",
      class: "Senior Classes",
      eventFromDate: "2025-10-01",
      eventToDate: "2025-10-01",
      eventNotificationMessage: "Independence Day Celebration",
      eventFor: "Senior Students",
      isActive: false,
    },
  ]);

  const eventColumns: ColumnsType<EventItem> = [
    {
      key: "sn",
      title: "S/N",
      render: (_, __, index) => index + 1,
    },
    {
      key: "title",
      title: "Event Title",
      dataIndex: "title",
    },
    {
      key: "class",
      title: "Class",
      dataIndex: "class",
    },
    {
      key: "eventFromDate",
      title: "From",
      dataIndex: "eventFromDate",
    },
    {
      key: "eventToDate",
      title: "To",
      dataIndex: "eventToDate",
    },
    {
      key: "eventNotificationMessage",
      title: "Notification",
      dataIndex: "eventNotificationMessage",
      ellipsis: true,
    },
    {
      key: "eventFor",
      title: "Event For",
      dataIndex: "eventFor",
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
          <Button
            style={{
              border: "none",
              padding: "2px",
              background: "transparent",
              boxShadow: "none",
            }}
          >
             <EyeFilled/>
          </Button>
                 <Button
            style={{
              border: "none",
              padding: "2px",
              background: "transparent",
              boxShadow: "none",
            }}
            onClick={() =>
              setEvents((prev) =>
                prev.filter((event) => event.key !== record.key)
              )
            }
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
    <DashboardContainer name="Manage Holiday" activeKey="23">
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
                Event List
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and Monitor lists of events
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
            Add Events
          </Button>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={eventColumns}
            dataSource={events}
            scroll={{ x: true }}
            pagination={{ pageSize: 5 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default EventListPage;
