import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Row, Select, Upload } from 'antd'
import React from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;


const ApplyMasterFee = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Add Master Fee</p>}
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
                    <FormItem label="Board" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select Board">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Class" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select Class">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={24} sm={24} xs={24} >
                <FormItem label="Choose Payment Plan" style={{fontWeight:"400", height: 10}} name="coverimage" rules={[{required: true}]}>
 <Select placeholder="Select Fee Type" style={{display: "none"}}>

                        </Select>
                </FormItem>
                    
                </Col>

                 <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Fee Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select Fee Type">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Amount" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select Amount">

                        </Select>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Modal>
  )
}

export default ApplyMasterFee