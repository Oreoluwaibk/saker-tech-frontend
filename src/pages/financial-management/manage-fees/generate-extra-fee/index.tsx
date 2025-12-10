import DashboardContainer from '@/components/dashboard/DashboardContainer'
import { Button, Card, Col, Form, Input, Row, Select, Table } from 'antd'
import React, { useState } from 'react';

const Option = Select.Option;
const FormItem = Form.Item;
const index = () => {
    const [ select, setSelect ] = useState<any>(null);
    const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
    
    
  return (
    <DashboardContainer name='Generate Extra Add on Fees Month Wise for Clsses' activeKey="21.4">
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Generate Extra Add on Fees Month Wise for Clsses</p>
        <p className='text-base text-[#616161] font-light'>Manage and track list of fee and payment</p>
      </div>}
      extra={<div className='flex gap-4'>
        
      </div>}
    >
      <Card variant="outlined" title={<p className='text-[20px] text-[#050505] font-semibold'>Generate Extra Fees </p>}>
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
                    <FormItem label="Student List" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Month List" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Fee Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Fee List" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Enter Fee Decription" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                      <Input.TextArea 
                            style={{height: 132}}
                            placeholder='Description'
                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Fee Concession List" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                       <Select placeholder="Select">

                        </Select>
                    </FormItem>
                </Col>

                <Col lg={24} sm={24} xs={24} className='!flex !justify-end w-full'>
                <Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>
                </Col>
            </Row>
        </Form>
      </Card>
    </Card>
    </DashboardContainer>
  )
}

export default index