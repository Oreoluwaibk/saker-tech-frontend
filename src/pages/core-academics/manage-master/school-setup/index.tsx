import DashboardContainer from '@/components/dashboard/DashboardContainer';
import UploadContent from '@/components/general/UploadContent';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, message, Row, Upload, UploadFile } from 'antd';
import React, { useState } from 'react'
import { UploadImage } from '../../../../../assets/icons';


const FormItem = Form.Item;
const maxFileSize = 4000000;
const index = () => {
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
    <DashboardContainer name='School Setup' activeKey="4">
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
          <p className='text-[30px] text-[#050505] font-semibold'>School Setup</p>
          <p className='text-base text-[#616161] font-light'>Setup Your School's Identity.</p>
      </div>}
      // extra={<div className='flex gap-4'>
      //   <Button type="default" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setOpenAddSource(true)}>Add Source</Button>
      //   <Button type="primary" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setOpenAddEnquiry(true)}>Add Enquiry</Button>
      // </div>}
    >
      <Card 
        variant="outlined"
        title={<p className='text-lg font-medium'>Setup Your School</p>}
        extra={<CloseCircleOutlined />}
      >
        <Form layout="vertical">
        <Row gutter={[15, 0]}> 
          <Col lg={12} sm={12} xs={12}>
            <FormItem label="School Name" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
              <Input 

              />
            </FormItem>
          </Col>
          <Col lg={12} sm={12} xs={12}>
            <FormItem label="Mailer Notification Send by Email" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
              <Input 

              />
            </FormItem>
          </Col>

          <Col lg={12} sm={12} xs={12}>
            <FormItem label="Mailer Notification  CC Email" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
              <Input 

              />
            </FormItem>
          </Col>

          <Col lg={12} sm={12} xs={12}>
            <FormItem label="Mailer Notification BCC Email" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
              <Input 

              />
            </FormItem>
          </Col>

          <Col lg={12} sm={12} xs={12}>
            <FormItem label="School Tagline" style={{fontWeight:"400"}} name="coverimage" rules={[{required: true}]}>
              <Input 

              />
            </FormItem>
          </Col>

          <FormItem label="Upload Image" style={{fontWeight:"400", width: "100%"}} name="coverimage" rules={[{required: true}]}>
            <Upload
              fileList={file}
              onRemove={handleRemoveProductPicture}
              beforeUpload={handleProductPicture}
              style={{width: "100%"}}
            >
              <UploadContent 
                initialTitle={<span className='text-[#667085] text-[10px]'><span className='text-[#0E0B0A] mr-1'>Click to Upload</span>or drag and drop</span>}
                value={file.length > 0 ? file[0].name : fileName} 
                max={<span className='text-[#667085] text-[10px]'>SVG, PNG, JPG or GIF (max. 800x400px)</span>}
                image={UploadImage}
              />
            </Upload>
          </FormItem>

          <FormItem style={{fontWeight:"400", width: "100%", justifyContent: "right"}} name="coverimage" rules={[{required: true}]}>
            <Button type="primary" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold !block' style={{justifySelf: "right"}}>Submit</Button>
          </FormItem>

          
        </Row>
    </Form>
      </Card>
    </Card>
    </DashboardContainer>
  )
}

export default index;