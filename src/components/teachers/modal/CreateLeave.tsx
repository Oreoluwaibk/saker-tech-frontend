import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Upload } from 'antd'
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const CreateLeave = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Create Leave</p>}
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
                    <FormItem label="Leave Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="From Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker placeholder="Select" style={{width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="To Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker placeholder="Select" style={{width: "100%"}} />
                    </FormItem>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Leave Reason" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input placeholder='Enter Work Description' />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Leave File" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Upload style={{width: "100%"}} >
                            <Input prefix={<Button className='h-6! bg-[#F2F2F2]! text-[#373737]!' type='primary'>Choose File</Button>} placeholder='No Chosen File' />
                        </Upload>
                    </FormItem>
                </Col>
                
            </Row>
        </Form>
    </Modal>
  )
}

export default CreateLeave