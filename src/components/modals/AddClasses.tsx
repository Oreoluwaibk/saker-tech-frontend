import UploadContent from '@/components/general/UploadContent';
import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, message, Modal, Row, Select, Upload, UploadFile } from 'antd'
import React, { useState } from 'react'
import { UploadFile as UploadImg } from '../../../assets/icons';

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const AddClasses = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Add Classes</p>}
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
                    <FormItem label="Class Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Class Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Common Class ID" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Zoom Email" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Zoom ID" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Zoom Password" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={24}>
                    <FormItem label="Board Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                
            </Row>
        </Form>
    </Modal>
  )
}

export default AddClasses