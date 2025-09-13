import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Modal, Row } from 'antd'
import React from 'react'

interface modal {
    open: boolean;
    onCancel: (open:boolean) => void;
}

const FormItem = Form.Item;

const VerifiedWorkBookDetail = ({open, onCancel}:modal) => {
  
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Work Student Details</p>}
        open={open}
        onCancel={()=>onCancel(false)}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Board Name" style={{fontWeight:"400"}} name="boardName" rules={[{required: true}]}>
                        <Input 
                          placeholder='Checkerboard'
                          disabled={true}
                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Subject Name" style={{fontWeight:"400"}} name="subjectName" rules={[{required: true}]}>
                       <Input 
                          placeholder='Mathematics'
                          disabled={true}
                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Workbook Name" style={{fontWeight:"400"}} name="workbookName" rules={[{required: true}]}>
                        <Input 
                          placeholder='Adaptive Learning Mathematics'
                          disabled={true}
                        />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Class Name" style={{fontWeight:"400"}} name="className" rules={[{required: true}]}>
                        <Input 
                          placeholder='Class XII Checker'
                          disabled={true}
                        />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Chapter Name" style={{fontWeight:"400"}} name="className" rules={[{required: true}]}>
                        <Input 
                          placeholder='Class XII Checker'
                          disabled={true}
                        />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="No of Attempts" style={{fontWeight:"400"}} name="attempts" rules={[{required: true}]}>
                        <Input 
                            placeholder='9'
                          disabled={true}
                        />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Modal>
  )
}

export default VerifiedWorkBookDetail