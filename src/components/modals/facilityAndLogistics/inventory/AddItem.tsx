import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select, Upload } from 'antd'
import React from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;

const AddItem = ({ open, onCancel }: modal) => {
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Add Item</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                
                <Col lg={8} sm={8} xs={8}>
                    <FormItem label="Item" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                                                
                        </Select>
                    </FormItem>
                </Col>

                <Col lg={8} sm={8} xs={8}>
                    <FormItem label="Item Category" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select">
                                                
                        </Select>
                    </FormItem>
                </Col>

                 <Col lg={8} sm={8} xs={8}>
                    <FormItem label="Unit" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input />
                    </FormItem>
                </Col>


                <Col lg={24} sm={24} xs={24}>
                    <FormItem label="Description" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input.TextArea 
                            style={{height: 132}}
                            placeholder='Description'
                        />
                    </FormItem>
                </Col>

               
            </Row>
        </Form>
    </Modal>
  )
}

export default AddItem