import ParentDashboard from '@/components/dashboard/ParentDashboard'
import { UserOutlined } from '@ant-design/icons'
// import Icon from '@ant-design/icons/lib/components/AntdIcon';
import { Avatar, Button, Card, Col, Form, Input, Row, Upload } from 'antd'
import React from 'react';
import { Icon } from "@iconify/react";

const FormItem = Form.Item;
const index = () => {
    const [form] = Form.useForm();
  return (
    <ParentDashboard name='Profile' activeKey='Profile'>
    <Card
        variant="borderless"
        styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
        title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Profile Setting</p>
        </div>}
    >
        <Card
            title={
            <div className='flex items-center gap-2'>
            <div className='relative'>
                <Avatar
                    icon={<UserOutlined className='text-2xl' />} 
                    alt=''
                    size={84} 
                    className='h-[84px] w-[84px] rounded-full object-cover' 
                />
                <Upload
                    className='absolute bottom-2 right-0'
                    accept=".jpg, .png, .jpeg"
                    // beforeUpload={handleUploadPicture}
                    showUploadList={false}
                    >
                    <div className='cursor-pointer bg-[#003E8F] w-[27px] h-[27px] rounded-full flex items-center justify-center'>
                        <Icon icon="mdi:edit" color='#fff' />
                    </div>
                </Upload>
            </div>
            </div>
            }
            classNames={{ header: "!py-4", body: "", }}
            className='!mt-0'
            actions={[<div className='flex items-center justify-end'><Button type='primary' className='text-[#0E0E0E]!'>Submit</Button></div>]}
        >
        <Form layout="vertical" form={form} >
            <Row gutter={[15, 0]} >
            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Name" 
                    className="font-semibold" 
                    name="name"
                >
                <Input 
                    placeholder='FatherOfPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Spouse Name" 
                    className="font-semibold" 
                    name="spouseName"
                >
                <Input 
                    placeholder='MotherofPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                label="Mobile No." 
                className="font-semibold" 
                name="mobile"
                >
                <Input 
                    placeholder='2342342342121212' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Spouse Mobile No." 
                    className="font-semibold" 
                    name="spouseMobile"
                >
                <Input 
                    placeholder='2342342342121212' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>
             <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Qualification" 
                    className="font-semibold" 
                    name="qualification"
                >
                <Input 
                    placeholder='FatherQualificationPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Spouse Qualification" 
                    className="font-semibold" 
                    name="spouseQualification"
                >
                <Input 
                    placeholder='FatherOccupationPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Occupation" 
                    className="font-semibold" 
                    name="spouseOccupation"
                >
                <Input 
                    placeholder='MotherOccupationPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Spouse Occupation" 
                    className="font-semibold" 
                    name="spouseOccupation"
                >
                <Input 
                    placeholder='MotherOccupationPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Email ID" 
                    className="font-semibold" 
                    name="email"
                >
                <Input 
                    placeholder='maharsh@gmail.com' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Spouse EmailID" 
                    className="font-semibold" 
                    name="spouseEmailID"
                >
                <Input 
                    placeholder='MotherEmailIDPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Address" 
                    className="font-semibold" 
                    name="address"
                >
                <Input 
                    placeholder='AddressPuhupwasNew' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Location/Area" 
                    className="font-semibold" 
                    name="location"
                >
                <Input 
                    placeholder='Delhi' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

           <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="State" 
                    className="font-semibold" 
                    name="state"
                >
                <Input 
                    placeholder='State' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="City" 
                    className="font-semibold" 
                    name="city"
                >
                <Input 
                    placeholder='City' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            <Col lg={8} sm={12} xs={24}>
                <FormItem 
                    label="Pincode" 
                    className="font-semibold" 
                    name="pincode"
                >
                <Input 
                    placeholder='231212' 
                    size='large' 
                    style={{fontWeight: 400}}
                    className='border-none'
                
                />
                </FormItem>
            </Col>

            </Row>
        </Form>    
        </Card>
    </Card>
    </ParentDashboard>
  )
}

export default index