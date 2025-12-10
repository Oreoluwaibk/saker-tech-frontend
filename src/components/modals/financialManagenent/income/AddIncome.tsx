import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select, Upload } from 'antd'
import React from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;

const AddIncome = ({ open, onCancel }: modal) => {
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Add Income</p>}
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
                    <FormItem label="Income Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                                                                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Amount" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber min={0} style={{ width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Invoice Number" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber min={0} style={{ width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker style={{ width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Description" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Payment Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select Payment Type">
                                                                        
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Payment Details" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input />
                    </FormItem>
                </Col>

                <Col lg={24} sm={24} xs={24}>
                    <FormItem label="Attach Document" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Upload style={{ width: "100%"}} >
                            <Input placeholder='no file choose' />
                        </Upload>
                    </FormItem>
                </Col>

               
            </Row>
        </Form>
    </Modal>
  )
}

export default AddIncome