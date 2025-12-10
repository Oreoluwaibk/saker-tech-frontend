import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import Selector from '@/components/general/Selector';
import CreateStudentLeave from '@/components/parents/modals/CreateStudentLeave';
import ParentTable from '@/components/parents/ParentTable';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Divider, Form, Row, Select, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const FormItem = Form.Item;
const Option = Select.Option;

const subjects = [
  "Arts & Craft",
  "Coding",
  "English",
  "Mathematics",
  "E.V.S",
  "Dancing",
  "Computer",
  "Hindi",
  "French",
  "Extra Activity"
];

const titles = [
  "Meet My Family",
  "If You Are Happy",
  "Tracy's Shoe",
  "Colours of Nature",
  "The Hungry Catarpillar",
  "The Story of The Pot"
];


const index = () => {
  return (
  <StudentDashboard name='Content' activeKey='1.1'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Content</p>
         <p className='text-base text-[#616161] font-light'>View all available content</p>
      </div>}
    >
      <Card>
        <Form layout="vertical">
          <Row gutter={[15,15]}>
            <Col lg={12} sm={12} xs={24}>
            <FormItem label="Select Subject">
              <Select>
                {subjects.map((subject, i) => (
                  <Option key={i}>{subject}</Option>
                ))}
              </Select>
            </FormItem>
            </Col>

            <Col lg={12} sm={12} xs={24}>
            <FormItem label="Select Topic">
              <Select>
                {titles.map((title, i) => (
                  <Option key={i}><Checkbox /> {title}</Option>
                ))}
              </Select>
            </FormItem>
            </Col>
          </Row>
         
        </Form>
      </Card>
    </Card>
  </StudentDashboard>
  )
}

export default index