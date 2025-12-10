import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Upload } from 'antd'
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const CreateClasswork = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Create ClassWork</p>}
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
                    <FormItem label="Curriculum Format" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Class" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Subject" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Student" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Work Description" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input placeholder='Enter Work Description' />
                    </FormItem>
                </Col>

                
                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Claswork Title" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input placeholder='Enter Claswork Title' />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Leave Application" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Upload>
                            <Input prefix={<Button className='h-6! bg-[#F2F2F2]! text-[#373737]!' type='primary'>Choose File</Button>} placeholder='No Chosen File' />
                        </Upload>
                    </FormItem>
                </Col>
                
            </Row>
        </Form>
    </Modal>
  )
}

export default CreateClasswork