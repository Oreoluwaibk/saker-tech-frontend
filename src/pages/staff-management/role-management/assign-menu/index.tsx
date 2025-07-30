import React, { useState } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { Card, Form, Checkbox, Select, Button } from 'antd';
import type { CheckboxChangeEvent, FormProps } from 'antd';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;

interface IRoles {
  key: number;
  title: string;
  children: {
    title: string;
    children: string[];
    checked: string[];
  }[];
}

const Roles: IRoles[] = [
  {
    key: 1,
    title: 'Course',
    children: [
      {
        title: 'Manage Course',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
      {
        title: 'Manage Content',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
    ],
  },
  {
    key: 2,
    title: 'Front Office',
    children: [
      {
        title: 'Admission Enquiry',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
      {
        title: 'Visitor book',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
      {
        title: 'Phone Call Log',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
      {
        title: 'Portal Recieve',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
      {
        title: 'Complain',
        children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'],
        checked: [],
      },
    ],
  },
  {
    key: 3,
    title: 'Manage Master',
    children: [
      { title: 'School setup', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Academic Year', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Class List', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Reason List', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Board List', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Subject List', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Learning Level List', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Subject skills', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Group Subject Skills', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Category', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Sub Category', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Level', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
    ],
  },
  {
    key: 4,
    title: 'Manage Registration',
    children: [
      { title: 'Manage Staff', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Student', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Student Amenties', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Unapproved', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Student Birthday List', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Bulk Promotion', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Teacher Amenities', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Parents', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Manage Coordinator', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Coordinator & Student Map', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Student Withdrawal', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Group subject mapping', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
    ],
  },
  {
    key: 5,
    title: 'Manage Question Bank',
    children: [
      { title: 'Create Question Bank', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Draft Question Bank', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Published Question Bank', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Download & Upload Excel', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
      { title: 'Upload Images', children: ['Add', 'View', 'Edit with view', 'Delete with view', 'Active/inactive with view'], checked: [] },
    ],
  },
];

const Index = () => {
  const [checkedList, setCheckedList] = useState(Roles);
  const [selectedRole, setSelectedRole] = useState('');

  const onChange = (list: string[], title: string) => {
    const updated = checkedList.map((group) => ({
      ...group,
      children: group.children.map((item) =>
        item.title === title ? { ...item, checked: list } : item
      ),
    }));
    setCheckedList(updated);
  };

  const onCheckAllSectionChange = (e: CheckboxChangeEvent, title: string) => {
    const updated = checkedList.map((group) => ({
      ...group,
      children: group.children.map((item) =>
        item.title === title
          ? { ...item, checked: e.target.checked ? item.children : [] }
          : item
      ),
    }));
    setCheckedList(updated);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent, key: number) => {
    const updated = checkedList.map((group) => {
      if (group.key !== key) return group;
      return {
        ...group,
        children: group.children.map((item) => ({
          ...item,
          checked: e.target.checked ? item.children : [],
        })),
      };
    });
    setCheckedList(updated);
  };

  const onFinish: FormProps<{ roles: string }>['onFinish'] = (values) => {
    console.log(values, checkedList);
  };

  return (
    <DashboardContainer name="Assign Menu" activeKey="11.1">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#f6f6f6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex gap-3 flex-col">
            <div>
              <p className="text-[30px] text-[#050505] font-semibold">
                Assign Menu For Role & Employee
              </p>
              <p className="text-base text-[#616161] font-light">Assign and track roles</p>
            </div>
          </div>
        }
      >
        <Form layout="vertical" className="space-x-2.5" onFinish={onFinish}>
          <Card
            variant="outlined"
            style={{ marginBottom: '30px' }}
            title={<h1 className="text-2xl">Assign Roles</h1>}
          >
            <Form.Item name="roles" label="Role" rules={[{ required: true }]}>
              <Select
                onChange={(value) => setSelectedRole(value)}
                placeholder="Select a role"
                allowClear
              >
                <Option value="sub-admin">Sub-Admin</Option>
                <Option value="director">Director</Option>
                <Option value="principal">Principal</Option>
                <Option value="teacher">Teacher</Option>
                <Option value="hr">HR</Option>
                <Option value="accountant">Accountant</Option>
                <Option value="administrator">Administrator</Option>
                <Option value="facility-manager">Facility Manager</Option>
              </Select>
            </Form.Item>
          </Card>

          {selectedRole &&
            checkedList.map((section) => (
              <Card key={section.title} variant="outlined">
                <div className="flex flex-col gap-4">
                  <Checkbox
                    name={section.title}
                    checked={section.children.every(
                      (item) => item.checked.length === item.children.length
                    )}
                    indeterminate={
                      section.children.flatMap((i) => i.checked).length > 0 &&
                      section.children.flatMap((i) => i.checked).length !==
                        section.children.flatMap((i) => i.children).length
                    }
                    onChange={(e) => onCheckAllChange(e, section.key)}
                  >
                    {section.title}
                  </Checkbox>

                  <div className="flex flex-col gap-4 bg-[#F5F5F5] p-2 rounded-lg">
                    {section.children.map((item) => (
                      <div
                        key={item.title}
                        className="bg-[#F1F1F1] rounded-lg p-2"
                      >
                        <Checkbox
                          checked={item.checked.length === item.children.length}
                          indeterminate={
                            item.checked.length > 0 &&
                            item.checked.length < item.children.length
                          }
                          onChange={(e) => onCheckAllSectionChange(e, item.title)}
                          style={{ marginBottom: 8 }}
                        >
                          {item.title}
                        </Checkbox>

                        <CheckboxGroup
                          style={{ justifyContent: 'space-between', width: '100%' }}
                          value={item.checked}
                          onChange={(list) => onChange(list, item.title)}
                          options={item.children}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

          {selectedRole && (
            <div className="flex justify-end">
              <Button
                style={{ color: 'black', fontWeight: 800 }}
                type="primary"
                htmlType="submit"
              >
                Approve
              </Button>
            </div>
          )}
        </Form>
      </Card>
    </DashboardContainer>
  );
};

export default Index;
