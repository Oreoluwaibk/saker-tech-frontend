import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Modal, Radio, Row, Select, Upload } from 'antd'
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;


const AddConcessionFee = ({ open, onCancel }: modal) => {
    const [ fee,setFee ] = useState(1);
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Add Concession Fee</p>}
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

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Concession Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Input />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Concession Amount Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Radio.Group onChange={(e) => setFee(e.target.value)}>
                        <Radio value={1} checked={fee ===1}>
                            <p>Percentage (%)</p>
                        </Radio>
                        <Radio value={2} checked={fee ===2}>
                            <p>Flat</p>
                        </Radio>
                       </Radio.Group>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Concession Amount" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <InputNumber style={{width: "100%"}} min={0} />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Modal>
  )
}

export default AddConcessionFee