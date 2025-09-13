import React, { useState } from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import { Card, Select, Button, Form } from "antd";

const { Option } = Select;

const AttendanceSyncPage = () => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleSubmit = (values: { userType: string; classType: string }) => {
    console.log("Form Values:", values);
    // 🔗 you can call API to sync attendance
  };

  return (
    <DashboardContainer name="Attendance Sync" activeKey="29.3">
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
                Attendance Sync
              </p>
              <p className="text-base text-[#616161] font-light">
                Manage and track attendance
              </p>
            </div>
          </div>
        }
      >
        <Card variant="borderless">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* User Type */}
            <Form.Item
              label="User Type"
              name="userType"
              rules={[{ required: true, message: "Please select a user type" }]}
            >
              <Select placeholder="Select User Type" size="large">
                <Option value="Coordinator">Coordinator</Option>
                <Option value="Staff">Staff</Option>
                <Option value="Student">Student</Option>
              </Select>
            </Form.Item>

            {/* Class */}
            <Form.Item
              label="Class"
              name="classType"
              rules={[{ required: true, message: "Please select a class" }]}
            >
              <Select placeholder="Select Class" size="large">
                <Option value="Class I">Class I</Option>
                <Option value="Class II">Class II</Option>
                <Option value="Class III">Class III</Option>
                <Option value="Class IV">Class IV</Option>
                <Option value="Class V">Class V</Option>
                <Option value="Class VI">Class VI</Option>
                <Option value="Class VII">Class VII</Option>
              </Select>
            </Form.Item>

            {/* Actions */}
            <div className="col-span-1 md:col-span-2 flex justify-end gap-4">
              <Button
                onClick={handleReset}
                style={{
                  height: 40,
                  border: "1px solid #000",
                  fontWeight: 500,
                }}
              >
                Reset
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#FFD700",
                  border: "none",
                  height: 40,
                  fontWeight: 600,
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default AttendanceSyncPage;
