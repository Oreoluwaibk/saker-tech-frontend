import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, InputNumber, Modal, Row, Select, Upload } from 'antd'
import React, { useState } from 'react'
import { ColumnsType, TableProps } from 'antd/es/table';
import ParentTable from '@/components/parents/ParentTable';

interface modal {
    open: boolean;
    onCancel: () => void;
}

const FormItem = Form.Item;
const ExaminationDetails = ({ open, onCancel }: modal) => {
    const [ data, setData ] = useState<TableProps["dataSource"]>([]);

    const colum2: ColumnsType = [
        {
            key: "1",
            title: "S/N",
        },
        {
            key: "2",
            title: "Question Name",
        },
        {
            key: "3",
            title: "Question Type",
        },
        {
            key: "4",
            title: "Options/Answer",
        },
        {
            key: "5",
            title: "Skills",
        },
        {
            key: "6",
            title: "Weightage",
        },
        
    ]
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Examination Details</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={null}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        <Form layout="vertical">
            <Row gutter={[15, 0]}>
                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Curriculum Format" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Class Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Subject Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Paper Code" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Passing (%)" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber style={{ width: "100%" }} disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Total Duration (in minutes)" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Total Marks" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber style={{ width: "100%" }} disabled placeholder="Select" />
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Total Question" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <InputNumber style={{ width: "100%" }} disabled placeholder="Select" />
                    </FormItem>
                </Col>            
            </Row>
        </Form>

        <div>
          <ParentTable 
            title="Question List"
            data={data}
            column={colum2}
            showExtra
          />
      </div>
    </Modal>
  )
}

export default ExaminationDetails