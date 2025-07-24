import UploadContent from '@/components/general/UploadContent';
import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, message, Modal, Row, Select, Upload, UploadFile } from 'antd'
import React, { useState } from 'react'
import { UploadFile as UploadImg } from '../../../../assets/icons';

interface modal {
    open: boolean;
    onCancel: () => void;
}
const FormItem = Form.Item;
const maxFileSize = 4000000;
const AddComplainDetails = ({ open, onCancel }: modal) => {
    const [ file, setFile ] = useState<UploadFile[]>([]);
    const [ fileName, setFileName ] = useState<string>("");

    const handleProductPicture = async (file: any, fileLists: UploadFile[]) => {
        if (file.size > maxFileSize) {
            return message.warning("Please select an image less than 4mb");
        }

        // if (!file.url && !file.preview) {
        //   file.preview = await getBase64(file);
        // }
  
       setFile((prev) => {
        return [...prev, file]
       })
        return false;
    };

    const handleRemoveProductPicture = (fil: UploadFile) => {
        const index = file.indexOf(fil);
        
        setFile((prev:any) => {
            const newFileList = prev.slice();
            newFileList.splice(index, 1);

            return newFileList
        });

        return false;
    };
  return (
    <Modal 
        title={<p className='text-lg font-medium'>Add Postal Receive Details</p>}
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={<Button type="primary" className='!text-[#3E444C] !font-bold' style={{height: 48, minWidth: 107, borderRadius: 5}}>Submit</Button>}
        width={900}
        styles={{body: {marginTop: 20}}}
    >
         <Form layout="vertical">
            <Row gutter={[15, 0]}>
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Complain Type" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Source" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Select placeholder="Select"></Select>
                    </FormItem>
                </Col>
                
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Complain By" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Phone Number" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                 <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Date" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <DatePicker style={{width: "100%"}} />
                    </FormItem>
                </Col>


                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Description" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

               
                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Assigned" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                <Col lg={12} sm={12} xs={12}>
                    <FormItem label="Action Taken" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input 

                        />
                    </FormItem>
                </Col>

                

                <Col lg={24} sm={24} xs={24}>
                    <FormItem label="Note" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
                        <Input.TextArea 
                            style={{height: 132}}
                            placeholder='Type here'
                        />
                    </FormItem>
                </Col>

                <FormItem label="Attach Document" style={{fontWeight:"400", width: "100%"}} name="coverimage" rules={[{required: true}]}>
                        <Upload
                        fileList={file}
                        onRemove={handleRemoveProductPicture}
                        beforeUpload={handleProductPicture}
                        style={{width: "100%"}}
                    >
                        <UploadContent 
                            initialTitle={<p className='text-[#667085] text-[10px]'><span className='text-[#0E0B0A] mr-1'>Click to Upload</span>or drag and drop</p>}
                            value={file.length > 0 ? file[0].name : fileName} 
                            max={<p className='text-[#667085] text-[10px]'>SVG, PNG, JPG or GIF (max. 800x400px)</p>}
                            image={UploadImg}
                        />
                    </Upload>
                </FormItem>
            </Row>
        </Form>
    </Modal>
  )
}

export default AddComplainDetails