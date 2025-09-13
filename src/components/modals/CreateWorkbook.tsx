import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Card,
  Table,
} from 'antd';
import {
  CloseCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Item: FormItem } = Form;

interface CreateWorkbookModalProps {
  open: boolean;
  onCancel: (open: boolean) => void;
}

type Step = 'form' | 'selectQuestions';

const BOARD_OPTIONS = [
  { value: '1', label: 'Board 1' },
  { value: '2', label: 'Board 2' },
  { value: '3', label: 'Board 3' },
];

const CLASS_OPTIONS = [
  { value: '1', label: 'Class 1' },
  { value: '2', label: 'Class 2' },
  { value: '3', label: 'Class 3' },
];

const SUBJECT_OPTIONS = [
  { value: '1', label: 'English' },
  { value: '2', label: 'Mathematics' },
  { value: '3', label: 'Yoruba' },
];

const QUESTION_TABLE_COLUMNS = [
  {
    title: '',
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: () => null,
  },
  {
    title: 'S/N',
    key: 'sn',
    render: (_: any, __: any, index: number) => index + 1,
  },
  {
    title: 'Questions',
    dataIndex: 'question',
    key: 'question',
  },
  {
    title: 'Question Type',
    dataIndex: 'questionType',
    key: 'questionType',
  },
  {
    title: 'Skill',
    dataIndex: 'skill',
    key: 'skill',
  },
];

const SELECTED_QUESTIONS_COLUMNS = QUESTION_TABLE_COLUMNS.slice(1); // remove checkbox for selected view

const MOCK_QUESTIONS = [
  {
    key: '1',
    question: 'What is React?',
    questionType: 'MCQ',
    skill: 'SkillSubjectChecker',
  },
];

const CreateWorkbookModal = ({ open, onCancel }: CreateWorkbookModalProps) => {
  const [form] = Form.useForm();
  const [step, setStep] = useState<Step>('form');
  const [selectedQuestions, setSelectedQuestions] = useState<any[]>([]);
  const [selectedQuestionKeys, setSelectedQuestionKeys] = useState<React.Key[]>([]);

  const handleStepChange = (nextStep: Step) => {
    setStep(nextStep);
  };

  return (
    <Modal
      title={
        <p className="text-lg font-medium">
          {step === 'form' ? 'Create Workbook' : 'Add Question List'}
        </p>
      }
      open={open}
      closeIcon={<CloseCircleOutlined />}
      width={900}
      onCancel={() => onCancel(false)}
      styles={{ body: { marginTop: 20 } }}
      footer={
        step === 'form' ? (
          <div className="flex gap-2 justify-end">
            <Button>Draft</Button>
            <Button type="primary" className="!text-black">
              Publish
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setStep('form')}
            type="primary"
            className="!text-black"
          >
            Add Question
          </Button>
        )
      }
    >
      {step === 'form' ? (
        <div className="flex flex-col gap-3">
          <Form layout="vertical" form={form}>
            <Row gutter={[15, 0]}>
              <Col lg={12} sm={12} xs={24}>
                <FormItem
                  label="Board"
                  name="board"
                  rules={[{ required: true }]}
                >
                  <Select showSearch placeholder="Select board" options={BOARD_OPTIONS} />
                </FormItem>
              </Col>

              <Col lg={12} sm={12} xs={24}>
                <FormItem
                  label="Class"
                  name="class"
                  rules={[{ required: true }]}
                >
                  <Select showSearch placeholder="Select class" options={CLASS_OPTIONS} />
                </FormItem>
              </Col>

              <Col lg={12} sm={12} xs={24}>
                <FormItem
                  label="Subject"
                  name="subject"
                  rules={[{ required: true }]}
                >
                  <Select showSearch placeholder="Select subject" options={SUBJECT_OPTIONS} />
                </FormItem>
              </Col>

              <Col lg={12} sm={12} xs={24}>
                <FormItem
                  label="Workbook Name"
                  name="workbookName"
                  rules={[{ required: true }]}
                >
                  <Input />
                </FormItem>
              </Col>

              <Col lg={12} sm={12} xs={24}>
                <FormItem
                  label="No of Attempts"
                  name="attempts"
                  rules={[{ required: true }]}
                >
                  <Input />
                </FormItem>
              </Col>

              <Col span={24}>
                <Button
                  onClick={() => handleStepChange('selectQuestions')}
                  type="primary"
                  icon={<PlusOutlined />}
                  className="!text-[#3E444C] !font-bold"
                  style={{ height: 48, minWidth: 107, borderRadius: 5 }}
                >
                  Add Question
                </Button>
              </Col>
            </Row>
          </Form>

          {selectedQuestions.length > 0 && (
            <Card
              title="Selected Questions"
              className="mt-5"
              extra={
                <Input
                  prefix={<SearchOutlined />}
                  placeholder="Search..."
                  style={{
                    height: 38,
                    width: 146,
                    backgroundColor: '#F4F4F4',
                    border: 'none',
                  }}
                />
              }
            >
              <Table
                columns={SELECTED_QUESTIONS_COLUMNS}
                dataSource={selectedQuestions}
                pagination={{ pageSize: 5 }}
              />
            </Card>
          )}
        </div>
      ) : (
        <Card
          title="Available Questions"
          extra={
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search..."
              style={{
                height: 38,
                width: 146,
                backgroundColor: '#F4F4F4',
                border: 'none',
              }}
            />
          }
        >
          <Table
            columns={QUESTION_TABLE_COLUMNS}
            dataSource={MOCK_QUESTIONS}
            pagination={{ pageSize: 5 }}
            rowSelection={{
              type: 'checkbox',
              selectedRowKeys: selectedQuestionKeys,
              onChange: (keys, rows) => {
                setSelectedQuestionKeys(keys);
                setSelectedQuestions(rows);
              },
            }}
          />
        </Card>
      )}
    </Modal>
  );
};

export default CreateWorkbookModal;
