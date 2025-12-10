import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, Form, Modal, Row, Select } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import { Content } from '../../../../assets/images';

interface modal {
    open: boolean;
    onCancel: () => void;
    openAdd: () => void;
}

const FormItem = Form.Item;
const CreateContent = ({ open, onCancel, openAdd }: modal) => {
  const [ steps, setSteps ] = useState(1);

  return (
    <>
    <Modal 
        title={<p className='text-lg font-medium'>Create Content</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={steps === 1 && <Button type="primary" className='!text-[#3E444C] !font-bold' onClick={()=> setSteps(2)} style={{height: 48, minWidth: 107, borderRadius: 5}}>Next</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
        {steps === 1 && <Form layout="vertical">
            <Row gutter={[15, 0]}>
                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Board" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Class" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={24} xs={24}>
                    <FormItem label="Subject" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>
            </Row>
        </Form>}

        {steps === 2 && (
            <div className='flex flex-col items-center justify-center gap-2'>
            <Image  src={Content} alt='content'/>
            <div className='pt-5 pb-3 px-4 text-center gap-2 flex flex-col'>
                <p className='text-xl text-[#050505] font-medium'>Get Started</p>
                <p className='text-base text-[#616161] font-light'>Add New Chapter to add content</p>
                <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold'  onClick={() => {
                    openAdd();
                    onCancel();
                }}>Add Chapter</Button>
            </div>
            </div>
        )}

       
    </Modal>
    </>
  )
}

export default CreateContent