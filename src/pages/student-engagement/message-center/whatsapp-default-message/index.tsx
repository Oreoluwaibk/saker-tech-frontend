"use client";

import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React from "react";
import { Button, Card, Form, Select } from "antd";

const { Option } = Select;

const WhatsAppMessageDefaultCenterPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  return (
    <DashboardContainer name="Manage WhatsApp Message" activeKey="27.3">
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
                WhatsApp Default Message Center
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
                name="messageTemplate"
                label="Message Template"
                rules={[{ required: true, message: "Please select a message Template" }]}
              >
                <Select placeholder="Select Template" size="large">
                  <Option value="1">Template 1</Option>
                  <Option value="2">Template 2</Option>
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

export default WhatsAppMessageDefaultCenterPage;
