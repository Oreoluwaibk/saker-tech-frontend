import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Modal, Row, Select } from 'antd'
import React, { useState } from 'react'

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const AddBoardList = ({ open, onCancel }: modal) => {
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Add Board List</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                <Col lg={24} sm={24} xs={24}>
                    <FormItem label="Board Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                
            </Row>
        </Form>
    </Modal>
  )
}

export default AddBoardList