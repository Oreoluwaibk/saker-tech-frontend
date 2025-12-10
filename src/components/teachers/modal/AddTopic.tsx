import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Card, Col, DatePicker, Form, Input, Modal, Row, Select, Upload } from 'antd'
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const AddTopic = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Add Topic</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={<div className='flex items-center justify-start gap-6'>
            <Button type="default" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Cancel</Button>
            <Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Add</Button>
        </div>}
        width={900}
        style={{ backgroundColor: "#f6f6f6", padding: 40 }}
        styles={{body: {marginTop: 20}}}
    >
        <Card>
            <Form layout="vertical">
                <Row gutter={[15, 0]}>
                    <Col lg={24} sm={24} xs={24}>
                        <FormItem label="Topic" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                            <Select placeholder="Select"></Select>
                        </FormItem>
                    </Col>

                </Row>
            </Form>
        </Card>
        
    </Modal>
  )
}

export default AddTopic