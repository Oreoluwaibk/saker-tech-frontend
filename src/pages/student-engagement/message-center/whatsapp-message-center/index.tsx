"use client";

import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React from "react";
import { Button, Card, Form, Select } from "antd";

const { Option } = Select;

const WhatsAppMessageCenterPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  return (
    <DashboardContainer name="Manage WhatsApp Message" activeKey="27.2">
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
                WhatsApp Message Center
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track lists of whatsapp messages
              </p>
            </div>
          </div>
        }
      >
        <div className="bg-white rounded-lg p-8">
          <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            requiredMark="optional"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Session */}
              <Form.Item
                name="session"
                label="Session"
                rules={[{ required: true, message: "Please select a session" }]}
              >
                <Select placeholder="Select Session" size="large">
                  <Option value="2024/2025">2024/2025</Option>
                  <Option value="2025/2026">2025/2026</Option>
                </Select>
              </Form.Item>

              {/* Board */}
              <Form.Item
                name="board"
                label="Board"
                rules={[{ required: true, message: "Please select a board" }]}
              >
                <Select placeholder="Select Board" size="large">
                  <Option value="board-a">Board A</Option>
                  <Option value="board-b">Board B</Option>
                </Select>
              </Form.Item>

              {/* Class */}
              <Form.Item
                name="class"
                label="Class"
                rules={[{ required: true, message: "Please select a class" }]}
              >
                <Select placeholder="Select Class" size="large">
                  <Option value="class-1">Class 1</Option>
                  <Option value="class-2">Class 2</Option>
                </Select>
              </Form.Item>

              {/* Student */}
              <Form.Item
                name="student"
                label="Student"
                rules={[{ required: true, message: "Please select a student" }]}
              >
                <Select placeholder="Select Student" size="large">
                  <Option value="john-doe">John Doe</Option>
                  <Option value="jane-smith">Jane Smith</Option>
                </Select>
              </Form.Item>

              {/* Template List */}
              <Form.Item
                name="template"
                label="Template List"
                rules={[
                  { required: true, message: "Please select a template" },
                ]}
              >
                <Select placeholder="Select Template" size="large">
                  <Option value="template-1">Template One</Option>
                  <Option value="template-2">Template Two</Option>
                </Select>
              </Form.Item>

              {/* Message Schedule */}
              <Form.Item
                name="schedule"
                label="Message Schedule"
                rules={[
                  {
                    required: true,
                    message: "Please select a message schedule",
                  },
                ]}
              >
                <Select placeholder="Select Message Schedule" size="large">
                  <Option value="daily">Daily</Option>
                  <Option value="weekly">Weekly</Option>
                  <Option value="monthly">Monthly</Option>
                </Select>
              </Form.Item>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <div className="flex justify-end mt-6">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-[#FFD600] !text-black !rounded-md !px-10 !h-[50px] font-semibold"
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </DashboardContainer>
  );
};

export default WhatsAppMessageCenterPage;
