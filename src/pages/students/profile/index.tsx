import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Form, Input, InputNumber, List, Row, Select, Upload } from 'antd'
import React, { useState } from 'react';
import { Icon } from "@iconify/react";
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import Selector from '@/components/general/Selector';

const FormItem = Form.Item;
const info = [
    "Basic Information",
    "Parent's Information",
    "Address Information",
    "Change Password",
    "Co-Curricular Information",
    "Learning Requirements for online Classes"
]

const requireInfo = [
    {id: 1, title: "Do you have a laptop/desktop?", answer: "Yes"},
    {id: 2, title: "Do you have a seperate Table, Chair or similar for studying", answer: "No"},
    {id: 3, title: "DO you have a seperate room?", answer: "Yes"},
    {id: 4, title: "Do you have Wi-Fi connectivity/internet connection?", answer: "No"},
]
const index = () => {
    const [form] = Form.useForm();
    const [ isEdit, setIsEdit ] = useState(false);
     const [ selected, setSelected ] = useState("Basic Information");
  return (
    <StudentDashboard name='Profile' activeKey='Profile'>
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
            <p className='text-lg text-[#1e1e1e]'>Name: <span className='font-semibold'>Bipul Kumar</span> </p>
            <p className='text-lg text-[#1e1e1e]'>Date of Birth: <span className='font-semibold'>03-02-2015</span> </p>
            <p className='text-lg text-[#1e1e1e]'>Class: <span className='font-semibold'>Class I</span> </p>
            <p className='text-lg text-[#1e1e1e]'>Curriculum Session: <span className='font-semibold'>01-04-2023 To 31-03-2024</span> </p>
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
        title={ <div className='flex flex-wrap items-center gap-4 pt-4'>
        {info.map((item, i: number) => (
            <Selector 
                key={i}
                title={item}
                selected={selected === item}
                onclick={() => setSelected(item)}
            />))}
        </div>}
        >
        <Card
            classNames={{ header: "!py-4", body: "", }}
            className='!mt-0'
            actions={[selected !== "Learning Requirements for online Classes" && <div className='flex items-center justify-end mr-6'><Button onClick={() => setIsEdit(!isEdit)} type='primary' className='text-[#0E0E0E]! w-[100px]'>{isEdit ? "Submit": "Edit"}</Button></div>]}
        >
        <Form layout="vertical" form={form} >
            {selected === "Basic Information" && <Row gutter={[15, 0]} >
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
                                        label="Gender" 
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
                    label="Place of Birth" 
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
                    label="Nationality" 
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
                    label="Mother's Tongue" 
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
                    label="Class currently studying In" 
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
                    label="Name of previous school attended" 
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
                    label="Medium of Instruction" 
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
                    label="1st Language Studied" 
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
                    label="2nd Language Studied" 
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
                    label="Caste Category" 
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

            
            </Row>}

            {selected === "Parent's Information" && <Row gutter={[15, 0]} >
            <Col lg={12} sm={12} xs={24}>
                <FormItem 
                    label="Father's Name" 
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
                    label="Father's Mobile No." 
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
                label="Father's Qualification" 
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
                    label="Father's Occupation" 
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
                    label="Mother's Name" 
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
                    label="Mother's Mobile No." 
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
                    label="Mother's Qualification" 
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
                    label="Mother's Occupation" 
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
            </Row>}

            {selected === "Address Information" && <Row gutter={[15, 0]} >
            <Col lg={12} sm={12} xs={24}>
                <FormItem 
                    label="Address" 
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
                    label="City" 
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
                label="State" 
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
                    label="Pin Code" 
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
                    label="Location/Area" 
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
            </Row>}

            {selected === "Change Password" && <Row gutter={[15, 0]} >
                <Col lg={24} sm={24} xs={24} className='mb-3'>
                    <p className='text-[#1e1e1e] text-lg font-medium'>Change Passsword</p>
                </Col>
                <Col lg={24} sm={24} xs={24}>
                    <FormItem 
                        label="Current Password" 
                        className="font-semibold" 
                        name="name"
                    >
                    <Input.Password 
                        placeholder='' 
                        size='large' 
                        style={{fontWeight: 400, width: '100%'}}
                        className='border-none'
                    
                    />
                    </FormItem>
                </Col>

                <Col lg={24} sm={24} xs={24}>
                    <FormItem 
                        label="New Password" 
                        className="font-semibold" 
                        name="spouseName"
                    >
                    <Input.Password 
                        placeholder='MotherofPuhupwasNew' 
                        size='large' 
                        style={{fontWeight: 400}}
                        className='border-none'
                    
                    />
                    </FormItem>
                </Col>
            </Row>}

            {selected === "Co-Curricular Information" && <Row gutter={[15, 0]} >
            <Col lg={12} sm={12} xs={24}>
                <FormItem 
                    label="Hobbies" 
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
                    label="Interests" 
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
                label="Sports" 
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
            </Row>}

            {selected === "Learning Requirements for online Classes" && <Row gutter={[15, 0]} >
                <List 
                    dataSource={requireInfo} 
                    itemLayout="vertical"
                    renderItem={(item) => (
                        <List.Item>
                            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 w-full'>
                                <p className='text-base text-[#1e1e1e]'>{item.title}</p>
                                <p>{item.answer}</p>
                            </div>
                        </List.Item>
                    )}
                />
            </Row>}
        </Form>    
        </Card>
    </Card>
    </Col>
    </Row>
    </StudentDashboard>
  )
}

export default index