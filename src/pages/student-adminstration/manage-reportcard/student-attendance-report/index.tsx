import React from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Select, Row, Col } from "antd";

const { Option } = Select;

const DownloadAttendance = () => {
  return (
    <DashboardContainer name="Manage Attendance" activeKey="30.5">
      {/* Responsive wrapper */}
      <div className="w-full max-w-[900px] mx-auto px-4">
        <Card
          variant="borderless"
          styles={{
            body: { backgroundColor: "#F6F6F6" },
            header: { backgroundColor: "#f6f6f6" },
          }}
          title={
            <div className="pt-5 pb-3 px-4 flex flex-col gap-3">
              <p className="text-[30px] text-[#050505] font-semibold">
                Download Student Attendance Excel Sheet
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of student attendance
              </p>
            </div>
          }
        >
          <Card>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">
                  Board<span className="text-red-500">*</span>
                </p>
                <Select placeholder="Select" className="w-full">
                  <Option value="waec">WAEC</Option>
                  <Option value="gce">GCE</Option>
                  <Option value="neco">NECO</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">
                  Class<span className="text-red-500">*</span>
                </p>
                <Select placeholder="Select" className="w-full">
                  <Option value="class1">Class I</Option>
                  <Option value="class2">Class II</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">
                  Current Session<span className="text-red-500">*</span>
                </p>
                <Select placeholder="Select" className="w-full">
                  <Option value="2024-2025">2024-2025</Option>
                  <Option value="2023-2024">2023-2024</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">
                  Select Month<span className="text-red-500">*</span>
                </p>
                <Select placeholder="Select" className="w-full">
                  <Option value="january">January</Option>
                  <Option value="february">February</Option>
                  <Option value="march">March</Option>
                  <Option value="april">April</Option>
                </Select>
              </Col>
            </Row>

            {/* Download button */}
            <div className="flex justify-end mt-6">
              <Button
                style={{
                  backgroundColor: "#FFD700",
                  border: "none",
                  height: 40,
                  fontWeight: 600,
                  minWidth: 120,
                }}
              >
                Download
              </Button>
            </div>
          </Card>
        </Card>
      </div>
    </DashboardContainer>
  );
};

export default DownloadAttendance;
