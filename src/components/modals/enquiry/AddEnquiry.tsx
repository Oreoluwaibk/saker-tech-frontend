import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row } from 'antd'
import React from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;
const AddEnquiry = ({ open, onCancel }: modal) => {
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Add Admissions Enquiry</p>}
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
                    <FormItem label="Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Phone Number" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Email Address" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Address" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker style={{width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Next Follow Up Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker style={{width: "100%"}} />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Child's Class" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Number of Children" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber 
                            min={0}
                            style={{width: "100%"}}
                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Reference" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Source" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>
                

                <Col lg={24} sm={24} xs={24}>
                    <FormItem label="Enquiry" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input.TextArea 
                            style={{height: 132}}
                            placeholder='Type here'
                        />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Modal>
  )
}

export default AddEnquiry