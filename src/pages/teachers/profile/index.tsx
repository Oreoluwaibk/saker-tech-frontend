import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Form, Input, InputNumber, Row, Select, Upload } from 'antd'
import React from 'react';
import { Icon } from "@iconify/react";
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';

const FormItem = Form.Item;
const index = () => {
    const [form] = Form.useForm();
    const [ isEdit, setIsEdit ] = React.useState(false);
  return (
    <TeacherDashboard name='Profile' activeKey='Profile'>
        <Row gutter={15}>
            <Col lg={6} md={16} sm={24} xs={24}>
                <div className='flex flex-col gap-2'>
                    <div className='relative flex flex-col items-center justify-center '>
                        <Avatar
                            icon={<UserOutlined className='text-2xl' />} 
                            alt=''
                            size={84} 
                            className='h-[84px] w-[84px] rounded-full object-cover' 
                        />
                        <Upload
                            className='absolute bottom-0 right-[28%]'
                            accept=".jpg, .png, .jpeg"
                            // beforeUpload={handleUploadPicture}
                            showUploadList={false}
                            >
                            <div className='cursor-pointer bg-[#003E8F] w-[27px] h-[27px] rounded-full flex items-center justify-center'>
                                <Icon icon="mdi:edit" color='#fff' />
                            </div>
                        </Upload>
                    </div>

                    <div className='flex flex-col gap-2 mt-4'>
                        <p className='text-lg text-[#1e1e1e]'>Username: <span className='font-semibold'>PATCY101</span> </p>
                        <p className='text-lg text-[#1e1e1e]'>Name: <span className='font-semibold'>Master Teacher</span> </p>
                        <p className='text-lg text-[#1e1e1e]'>Date of Birth: <span className='font-semibold'>03-02-2015</span> </p>
                        <p className='text-lg text-[#1e1e1e]'>Gender: <span className='font-semibold'>Male</span> </p>
                        <p className='text-lg text-[#1e1e1e]'>Curriculum Format: <span className='font-semibold'>CSBE</span> </p>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-4'>
                        <Button type="primary" className='!h-[44px] !min-w-[140px] !text-[#3E444C] !rounded-[5px] !font-semibold' >View ID Card</Button>
                    </div>
                </div>
            </Col>

            <Col lg={18} md={16} sm={24} xs={24}>
                <Card
                    variant="borderless"
                    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
                    title={<div className='pt-5 pb-3 px-4'>
                    <p className='text-[30px] text-[#050505] font-semibold'>Basic Information</p>
                    </div>}
                >
                    <Card
                        classNames={{ header: "!py-4", body: "", }}
                        className='!mt-0'
                        actions={[<div className='flex items-center justify-end mr-6'><Button onClick={() => setIsEdit(!isEdit)} type='primary' className='text-[#0E0E0E]!'>{isEdit ? "Submit": "Edit"}</Button></div>]}
                    >
                    <Form layout="vertical" form={form} >
                        <Row gutter={[15, 0]} >
                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Mobile No." 
                                className="font-semibold" 
                                name="name"
                            >
                            <InputNumber 
                                placeholder='' 
                                size='large' 
                                style={{fontWeight: 400, width: '100%'}}
                                className='border-none'
                            
                            />
                            </FormItem>
                        </Col>

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Email ID" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                            label="Date of Joining" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Qualification" 
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
                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Marital Status" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Father's/Husband Name" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Experience" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Designation" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Caste Categories" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Address" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="State" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="City" 
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

                    <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Pin Code" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Location/Area" 
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

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Class" 
                                className="font-semibold" 
                                name="pincode"
                            >
                            <Select></Select>
                            </FormItem>
                        </Col>

                        <Col lg={12} sm={12} xs={24}>
                            <FormItem 
                                label="Subject" 
                                className="font-semibold" 
                                name="pincode"
                            >
                            <Select></Select>
                            </FormItem>
                        </Col>

                        </Row>
                    </Form>    
                    </Card>
                </Card>
            </Col>
        </Row>
    </TeacherDashboard>
  )
}

export default index