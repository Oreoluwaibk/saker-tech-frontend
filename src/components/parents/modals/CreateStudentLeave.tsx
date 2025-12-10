import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from 'antd'
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const CreateStudentLeave = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Create Student Leave</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Student Leave" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="From Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker placeholder="Select" style={{width: "100%"}}/>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="To Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker placeholder="Select" style={{width: "100%"}}/>
                    </FormItem>
                </Col>

                <Col lg={24} sm={24} xs={24}>
                    <FormItem label="Leave Application" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input.TextArea rows={4} placeholder='Type Here' style={{width: "100%"}}/>
                    </FormItem>
                </Col>
                
            </Row>
        </Form>
    </Modal>
  )
}

export default CreateStudentLeave