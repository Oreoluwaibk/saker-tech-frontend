import ParentDashboard from '@/components/dashboard/ParentDashboard'
import { Button, Card, Checkbox, Col, Form, Row, Select } from 'antd'
import React from 'react'

const FormItem = Form.Item;
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const index = () => {
 
  return (
  <ParentDashboard name='Fee Certificate' activeKey='6.32'>
      <Card
      variant="borderless"
      styles={{body: {backgroundColor: "", paddingTop: 50}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Fee Certificate</p>
      </div>}

      actions={[
        <div key={1} className='flex items-center justify-end gap-6'>
          <Button type="default" className='!h-[48px] !min-w-[95px] !text-[#3E444C] !rounded-[5px] !font-semibold' >Reset</Button>
          <Button type="primary" className='!h-[48px] !min-w-[95px] !text-[#3E444C] !rounded-[5px] !font-semibold' >Generate</Button>
        </div>
      ]}
    >
      <div>
        <Form layout="vertical">
          <Row gutter={[15, 15]}>
            <Col lg={12} sm={24} xs={24}>
              <FormItem label="Session Year">
                <Select placeholder="Select Session Year">
                  <Select.Option>2025 To 2026</Select.Option>
                  <Select.Option>2024 To 2025</Select.Option>
                </Select>
              </FormItem>
            </Col>

            <Col lg={12} sm={24} xs={24}>
              <FormItem label="Month">
                <Select placeholder="Select Month">
                  {months.map((month:string,i: number) => (
                    <Select.Option key={i}><Checkbox className='mb-2! mr-2!' /> {month}</Select.Option>
                  ))}
                </Select>
              </FormItem>
            </Col>
          </Row>
         
        </Form>
      </div>
    </Card>
  </ParentDashboard>
  )
}

export default index