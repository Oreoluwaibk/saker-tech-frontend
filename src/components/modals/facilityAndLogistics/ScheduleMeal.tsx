import { CloseCircleOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select } from 'antd'
import React from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;

const ScheduleMeal = ({ open, onCancel }: modal) => {
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Schedule Meal</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Weekday" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Meal Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Meal Period" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Meal Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Meal Start Time" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input suffix={<InfoCircleOutlined />} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Meal End Time" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input suffix={<InfoCircleOutlined />} />
                    </FormItem>
                </Col>
               
            </Row>
        </Form>
    </Modal>
  )
}

export default ScheduleMeal