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
const StudentWorkBookResult = ({open, onCancel}:modal) => {
    const [StudentResultData] = useState([
    { key: 1, name: 'Ronnie Mabel', result: ['Result 1']},
    { key: 2, name: 'Stephanie Goth', result: ['Result 1','Result 2', 'Result 3']},
    { key: 3, name: 'Ronnie Mabel', result: ['Result 1']},  
   
  ]);
   const StudentResultsColumn:ColumnsType = [
    {
      key: '1',
      title: 'S/N',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
    },
    {
      key: '2',
      title: 'Student Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Result',
      dataIndex: 'result',
      render: (value)=><ul className='flex gap-2'>{value.map((link: any)=> <li key={link}>{link}</li>)}</ul>
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
                    <FormItem label="Workbook Name" style={{fontWeight:"400"}} name="board" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Board Name" style={{fontWeight:"400"}} name="class" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Subject Name" style={{fontWeight:"400"}} name="subject" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Chapter Name" style={{fontWeight:"400"}} name="workbookname" rules={[{required: true}]}>
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
          <Table columns={StudentResultsColumn} dataSource={StudentResultData} />
        </Card>
    </Modal>
  )
}

export default StudentWorkBookResult