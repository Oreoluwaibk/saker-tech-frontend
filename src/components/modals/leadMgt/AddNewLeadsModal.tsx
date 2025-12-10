import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select } from 'antd';
import React from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;
const AddNewLeadsModal = ({ open, onCancel }: modal) => {
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Add New Lead</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={null}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <div className='flex justify-end mb-4'>
            <Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Upload Lead by Excel</Button>
        </div>
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="lead Source*" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                                                                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="lead Priority" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                         <Select placeholder="Select">
                                                                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Student Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input  />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Date of Birth" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker style={{ width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Board" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                                                                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Class" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                         <Select placeholder="Select">
                                                                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Contact No*" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber min={0} style={{ width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Alternate Contact No*" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber min={0} style={{ width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Email ID" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input  />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Address" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input  />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Modal>
  )
}

export default AddNewLeadsModal