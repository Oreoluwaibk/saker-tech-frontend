import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Card, Table, Col, Form, Input, Modal, Row } from 'antd'
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table';

interface modal {
    open: boolean;
    onCancel: (open:boolean) => void;
}

const FormItem = Form.Item;
const WorkStudentDetail = ({open, onCancel}:modal) => {
    const [QuestionListData] = useState([
    { key: 1, name: 'Excel MCQ', type: 'MCQ', answer:'options: op1,op2,op3,op4' , skill: 'Listening'},
    { key: 2, name: 'Excel MCQ', type: 'MCQ', answer:'options: op1,op2,op3,op4' , skill: 'Listening'},
    { key: 3, name: 'Excel MCQ', type: 'MCQ', answer:'options: op1,op2,op3,op4' , skill: 'Listening'},
   
  ]);
   const questionListColumn:ColumnsType = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Question Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Question Type',
      dataIndex: 'type',
    },
       {
      key: '3',
      title: 'Options/Answer',
      dataIndex: 'answer',
    },
       {
      key: '4',
      title: 'Skill',
      dataIndex: 'skill',
    },
  ];
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
                    <FormItem label="Board" style={{fontWeight:"400"}} name="board" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Class" style={{fontWeight:"400"}} name="class" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Subject" style={{fontWeight:"400"}} name="subject" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Workbook Name" style={{fontWeight:"400"}} name="workbookname" rules={[{required: true}]}>
                        <Input 

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
         <Card
         title={<h3>Question List</h3>}
          extra={
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search..."
              style={{
                height: 38,
                width: 146,
                backgroundColor: '#F4F4F4',
                border: 'none',
              }}
            />
          }
        >
          <Table columns={questionListColumn} dataSource={QuestionListData} />
        </Card>
    </Modal>
  )
}

export default WorkStudentDetail