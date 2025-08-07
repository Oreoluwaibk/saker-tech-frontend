import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import React, { useState } from 'react';
import Image from 'next/image';
import { Media } from '../../../assets/icons';

interface ModalProps {
  open: boolean;
  onCancel: (open: boolean) => void;
}

const FormItem = Form.Item;

const BOARDS = [
  { value: '1', label: 'Board 1' },
  { value: '2', label: 'Board 2' },
  { value: '3', label: 'Board 3' },
];

const CLASSES = [
  { value: '1', label: 'Class 1' },
  { value: '2', label: 'Class 2' },
  { value: '3', label: 'Class 3' },
];

const SUBJECTS = [
  { value: '1', label: 'English' },
  { value: '2', label: 'Mathematics' },
  { value: '3', label: 'Yoruba' },
];

type Step = 'create' | 'addChapter' | 'chapter';

const CreateContent = ({ open, onCancel }: ModalProps) => {
  const [form] = Form.useForm();
  const [step, setStep] = useState<Step>('create');

  const handleNextStep = (nextStep: Step) => {
    setStep(nextStep);
  };

  const handleClose = () =>{
     setStep('create');
     onCancel(false)
  }  
  const handleFormSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Form data so far:', values);
      handleNextStep('addChapter');
    } catch (err) {
      console.error('Validation Failed:', err);
    }
  };

  return (
    <Modal
      title={<p className="text-lg font-medium">{step === 'chapter' ? 'Chapter' : 'Create Content'}</p>}
      open={open}
      onCancel={handleClose}
      closeIcon={<CloseCircleOutlined />}
      width={900}
      footer={null}
      styles={{ body: { marginTop: 20 } }}
    >
      <Form layout="vertical" form={form}>
        {step === 'create' && (
          <Row gutter={[15, 0]}>
            <Col lg={12} sm={12} xs={24}>
              <FormItem
                label="Board"
                name="board"
                rules={[{ required: true }]}
              >
                <Select showSearch placeholder="Board name" options={BOARDS} />
              </FormItem>
            </Col>
            <Col lg={12} sm={12} xs={24}>
              <FormItem
                label="Class"
                name="class"
                rules={[{ required: true }]}
              >
                <Select showSearch placeholder="Class name" options={CLASSES} />
              </FormItem>
            </Col>
            <Col lg={12} sm={12} xs={24}>
              <FormItem
                label="Subject"
                name="subject"
                rules={[{ required: true }]}
              >
                <Select showSearch placeholder="Subject" options={SUBJECTS} />
              </FormItem>
            </Col>
            <Col span={24}>
              <div className="flex justify-end">
                <Button
                  onClick={() => handleNextStep('addChapter')}
                  type="primary"
                  className="!text-[#3E444C] !font-bold"
                  style={{ height: 48, minWidth: 107, borderRadius: 5 }}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Row>
        )}

        {step === 'addChapter' && (
          <div className="flex flex-col items-center gap-4">
            <Image src={Media} alt="media" />
            <div className="text-center">
              <h3 className="text-2xl">Get Started</h3>
              <p className="text-[#667085]">Add new chapter to add content</p>
            </div>
            <Button
              onClick={() => handleNextStep('chapter')}
              type="primary"
              className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            >
              Add Chapter
            </Button>
          </div>
        )}

        {step === 'chapter' && (
          <Row gutter={[15, 0]}>
            <Col span={24}>
              <FormItem
                label="Chapter"
                name="chapter"
                rules={[{ required: true }]}
              >
                <Select
                  showSearch
                  placeholder="Select Chapter"
                  options={BOARDS}
                />
              </FormItem>
            </Col>
            <Col span={24}>
            <div className='flex gap-2'>
            <Button
                  className="!text-[#3E444C] !font-bold"
                  onClick={handleClose}
                  style={{ height: 48, minWidth: 107, borderRadius: 5 }}
                >
                    Cancel
                </Button>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={handleFormSubmit}
                  className="!text-[#3E444C] !font-bold"
                  style={{ height: 48, minWidth: 107, borderRadius: 5 }}
                >
                  Add
                </Button>
              </Form.Item>
                </div>
            </Col>
          </Row>
        )}
      </Form>
    </Modal>
  );
};

export default CreateContent;
