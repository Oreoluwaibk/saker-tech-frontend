import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import { Button, Card, Col, Divider, Form, Row, Select, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const FormItem = Form.Item;
const index = () => {
  const [ selected, setSelected ] = useState("Level 1");
  const [form] = Form.useForm();
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Month",
      dataIndex: "price"
    },
    {
      key: "3",
      title: "Subject",
      dataIndex: "instructor",
    },
    {
      key: "4",
      title: "Chapter",
      dataIndex: "numofstudents",
    },
    {
      key: "5",
      title: "Concept",
      dataIndex: "createdAt",
    },
    {
      key: "6",
      title: "Learning L. Name",
      dataIndex: "duration"
    },
    {
      key: "7",
      title: "Description",
      dataIndex: "duration",
    },
    {
      key: "8",
      title: selected === "Level 1" ? "L1" : selected === "Level 2" ? "L2" : "L3",
      dataIndex: "duration",
    },
    {
      key: "9",
      title: "Remedial",
      dataIndex: "duration",
    },
    {
      key: "10",
      title: "Description",
      dataIndex: "duration",
    },
  ]
  return (
  <TeacherDashboard name='Level Analytics' activeKey='2.3'>
  <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Level Analytics</p>
    </div>}
  >
     <Card actions={[<div className='flex items-center gap-6 justify-end mr-6'>
      <Button type="default" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Reset</Button>
      <Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>
      </div>]}>
        <Form
          form={form}
          layout="vertical"
        >  
          <Row gutter={16}>
            <Col lg={12} sm={24} xs={24}>
              <FormItem name="" label="Student Class">
                <Select placeholder="Select Class"></Select>
              </FormItem>  
            </Col>

            <Col lg={12} sm={24} xs={24}>
              <FormItem name="" label="Student Student">
                <Select placeholder="Select Student"></Select>
              </FormItem>  
            </Col>
          </Row>
          
        </Form>
      </Card>
  </Card>
  </TeacherDashboard>
  )
}

export default index