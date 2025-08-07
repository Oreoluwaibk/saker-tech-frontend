import React from 'react';
import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Typography,
} from 'antd';
import { UploadOutlined, VideoCameraFilled, AudioFilled, BookFilled, YoutubeFilled,BookTwoTone } from '@ant-design/icons';

const { Title, Text } = Typography;

interface UploadChapterModalProps {
  open: boolean;
  onClose: () => void;
  chapterTitle: string;
  onUpload: (formData: FormData) => void;
}

const DOCUMENT_TYPES = [
  { value: 'video', label: <div className='flex gap-2'><VideoCameraFilled/><p>Video</p></div>},
  { value: 'audio', label: <div className='flex gap-2'><AudioFilled/><p>Audio</p></div>},
  { value: 'course', label: <div className='flex gap-2'><BookFilled/><p>Course Book</p></div>},
  { value: 'youtube link', label: <div className='flex gap-2'><YoutubeFilled/><p>YouTube Link</p></div>},
  { value: 'Workbook', label: <div className='flex gap-2'><BookTwoTone/><p>WorkBook</p></div>},
 
];

const UploadChapter: React.FC<UploadChapterModalProps> = ({
  open,
  onClose,
  chapterTitle,
  onUpload,
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    const formData = new FormData();
    formData.append('heading', values.heading);
    formData.append('type', values.type);
    formData.append('file', values.file.file.originFileObj); // get raw File object

    onUpload(formData);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={<Text strong>{chapterTitle}</Text>}
      centered
      width={600}
    >
      <Title level={4} style={{ marginBottom: 20 }}>
        Upload Document
      </Title>

      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        requiredMark="optional"
      >
        <Form.Item
          label="Document Heading"
          name="heading"
          rules={[{ required: true, message: 'Please enter document heading' }]}
        >
          <Input placeholder="Enter Heading" />
        </Form.Item>

        <Form.Item
          label="Document Type"
          name="type"
          rules={[{ required: true, message: 'Please select document type' }]}
        >
          <Select
            placeholder="Select Document Type"
            options={DOCUMENT_TYPES}
          />
        </Form.Item>

        <Form.Item
          label="Document File"
          name="file"
          valuePropName="file"
          rules={[{ required: true, message: 'Please upload a file' }]}
        >
          <Upload
            beforeUpload={() => false} // prevent auto upload
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Choose File</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: '#FFE580', color: '#000', fontWeight: 600 }}
          >
            Upload
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UploadChapter;
