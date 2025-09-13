import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'
import React from 'react'


interface modal {
    open: boolean;
    onCancel: (open:boolean) => void;
}

const FormItem = Form.Item;
const EditWorkBook = ({open, onCancel}:modal) => {
   
  return (
     <Modal 
        title={<p className='text-lg font-medium'>Edit Work Book</p>}
        open={open}
        onCancel={()=>onCancel(false)}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Update</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Board" style={{fontWeight:"400"}} name="board" rules={[{required: true}]}>
                       <Select
                          showSearch
                          placeholder='Board name'
                          options={[
                             { value: '1', label: 'Board 1' },
                            { value: '2', label: 'Board 2' },
                            { value: '3', label: 'Board 3' },
                          ]}
                       />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Class" style={{fontWeight:"400"}} name="class" rules={[{required: true}]}>
                         <Select
                          showSearch
                          placeholder='Class Name'
                          options={[
                             { value: '1', label: 'Class 1' },
                            { value: '2', label: 'Class 2' },
                            { value: '3', label: 'Class 3' },
                          ]}
                       />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Subject" style={{fontWeight:"400"}} name="subject" rules={[{required: true}]}>
                         <Select
                          showSearch
                          placeholder='Subject'
                          options={[
                             { value: '1', label: 'English' },
                            { value: '2', label: 'Mathematics' },
                            { value: '3', label: 'Yoruba' },
                          ]}
                       />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Workbook Name" style={{fontWeight:"400"}} name="workbookname" rules={[{required: true}]}>
                        <Select
                          showSearch
                          placeholder='Workbook Name'
                          options={[
                             { value: '1', label: 'English' },
                            { value: '2', label: 'Mathematics' },
                            { value: '3', label: 'Yoruba' },
                          ]}
                       />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="No of Attempts" style={{fontWeight:"400"}} name="attempts" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </Modal>
  )
}

export default EditWorkBook;