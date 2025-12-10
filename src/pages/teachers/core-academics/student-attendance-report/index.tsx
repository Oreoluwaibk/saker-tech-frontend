import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import ParentTable from '@/components/parents/ParentTable';
import { Button, Card, Col, DatePicker, Form, Row, Select, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const FormItem = Form.Item;
const index = () => {
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
      title: "Date"
    },
    {
      key: "3",
      title: "Student Name"
    },
    {
      key: "4",
      title: "Class",
    },
    {
      key: "5",
      title: "Student ID",
    },
  ]

  return (
  <TeacherDashboard name='Student Attendance Report' activeKey='1.92'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Student Attendance Report</p>
    </div>}
    >
      <Card actions={[<div className='flex items-center justify-end mr-6'><Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button></div>]}>
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

            <Col lg={12} sm={24} xs={24}>
              <FormItem name="" label="Date">
                <DatePicker style={{ width: "100%"}} />
              </FormItem>  
            </Col>
          </Row>
          
        </Form>
      </Card>

      <div className='mt-6'>
        <ParentTable 
          title=""
          data={data}
          column={column}
          showExtra
        />
      </div>
    </Card>
  </TeacherDashboard>
  )
}

export default index