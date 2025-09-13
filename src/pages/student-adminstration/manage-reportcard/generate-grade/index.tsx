import React from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Button, Select, Row, Col } from "antd";

const { Option } = Select;

const DownloadMarkSheet = () => {
  return (
    <DashboardContainer name="Manage Result" activeKey="30.1">
      {/* Responsive wrapper */}
      <div className="w-full max-w-[1000px] mx-auto px-4">
        <Card
          variant="borderless"
          styles={{
            body: { backgroundColor: "#F6F6F6" },
            header: { backgroundColor: "#f6f6f6" },
          }}
          title={
            <div className="pt-5 pb-3 px-4 flex flex-col gap-3">
              <p className="text-[30px] text-[#050505] font-semibold">
                Download Graded/Non-graded Mark Sheet
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of graded/non-graded mark sheet
              </p>
            </div>
          }
        >
          {/* Tab-like buttons */}
          <div className="flex gap-3 px-4 mb-6">
            <Button
              style={{
                backgroundColor: "#FFD700",
                border: "none",
                fontWeight: 600,
                height: 38,
              }}
            >
              Report
            </Button>
            <Button
              style={{
                backgroundColor: "#F4F4F4",
                border: "none",
                fontWeight: 500,
                height: 38,
              }}
            >
              Report Percentage
            </Button>
            <Button
              style={{
                backgroundColor: "#F4F4F4",
                border: "none",
                fontWeight: 500,
                height: 38,
              }}
            >
              Teacher Analysis
            </Button>
          </div>

          {/* Form section */}
          <Card>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">Board<span className="text-red-500">*</span></p>
                <Select placeholder="Select" className="w-full">
                  <Option value="waec">WAEC</Option>
                  <Option value="gce">GCE</Option>
                  <Option value="neco">NECO</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">Class<span className="text-red-500">*</span></p>
                <Select placeholder="Select" className="w-full">
                  <Option value="class1">Class I</Option>
                  <Option value="class2">Class II</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">Current Session<span className="text-red-500">*</span></p>
                <Select placeholder="Select" className="w-full">
                  <Option value="2024-2025">2024-2025</Option>
                  <Option value="2023-2024">2023-2024</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">Exam Type<span className="text-red-500">*</span></p>
                <Select placeholder="Select" className="w-full">
                  <Option value="midterm">Mid Term</Option>
                  <Option value="final">Final</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">Student Status<span className="text-red-500">*</span></p>
                <Select placeholder="Select" className="w-full">
                  <Option value="active">Active</Option>
                  <Option value="inactive">Inactive</Option>
                </Select>
              </Col>

              <Col xs={24} md={12}>
                <p className="mb-2 font-medium">Report Type<span className="text-red-500">*</span></p>
                <Select placeholder="Select" className="w-full">
                  <Option value="graded">Graded</Option>
                  <Option value="non-graded">Non-Graded</Option>
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

export default DownloadMarkSheet;
