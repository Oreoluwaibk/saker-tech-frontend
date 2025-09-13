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

type MusicItem = {
  key: number;
  ageGroup: string;
  fileUrl: string;
  isActive: boolean;
};

const { Option } = Select;

const MusicUploadPage = () => {
  const [musicList, setMusicList] = useState<MusicItem[]>([
    {
      key: 1,
      ageGroup: "06-09 Years",
      fileUrl: "/music/sample1.mp3",
      isActive: true,
    },
    {
      key: 2,
      ageGroup: "06-09 Years",
      fileUrl: "/music/sample2.mp3",
      isActive: true,
    },
    {
      key: 3,
      ageGroup: "06-09 Years",
      fileUrl: "/music/sample3.mp3",
      isActive: true,
    },
  ]);

  const musicColumns: ColumnsType<MusicItem> = [
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
      dataIndex: "fileUrl",
      render: (url) => (
        <audio controls style={{ width: "250px" }}>
          <source src={url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ),
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "isActive",
      render: (value, record) => (
        <div className="flex items-center gap-2">
    
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
              setMusicList((prev) =>
                prev.map((music) =>
                  music.key === record.key
                    ? { ...music, isActive: checked }
                    : music
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
    <DashboardContainer name="Upload Music" activeKey="26">
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
                Upload Music
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and Monitor music
              </p>
            </div>
          </div>
        }
        extra={
          <Button
            type="primary"
            className="!h-[54px] !w-[180px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            icon={<PlusOutlined />}
          >
            Upload Music
          </Button>
        }
      >
        <Card variant="outlined" extra={tabBarExtras}>
          <Table
            rowKey="key"
            columns={musicColumns}
            dataSource={musicList}
            scroll={{ x: true }}
            pagination={{ pageSize: 6 }}
          />
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default MusicUploadPage;
