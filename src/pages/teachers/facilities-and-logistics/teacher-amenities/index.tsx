import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import { Card, Col, Divider, Form, Input, InputNumber, Row, Select, TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const FormItem = Form.Item;
const index = () => {
  const [form] = Form.useForm();
  const [ selected, setSelected ] = useState("Transport");
  const [ data, setData ] = useState<TableProps["dataSource"]>([
    {
      key: "1",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>BreakFast</p>
        </div>
      ),
      monday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
      tuesday: (
        <div className='flex flex-col text-[#34332F]'>
          -
        </div>
      ),
      wednesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
      thursday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Non-Veg:</p>
          <p>Chicken</p>
        </div>
      ),
      friday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>chai, coffe</p>
        </div>
      ),
      saturday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Non-Veg:</p>
          <p>Panner and roti, chicken</p>
        </div>
      ),
      sunday: (
        <div className='flex flex-col text-[#34332F]'>
         <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
    },
    {
      key: "2",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Lunch</p>
        </div>
      ),
      monday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
      tuesday: (
        <div className='flex flex-col text-[#34332F]'>
          -
        </div>
      ),
      wednesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
      thursday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Non-Veg:</p>
          <p>Chicken</p>
        </div>
      ),
      friday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>chai, coffe</p>
        </div>
      ),
      saturday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Non-Veg:</p>
          <p>Panner and roti, chicken</p>
        </div>
      ),
      sunday: (
        <div className='flex flex-col text-[#34332F]'>
         <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
    },
    {
      key: "3",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Dinner</p>
        </div>
      ),
      monday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
      tuesday: (
        <div className='flex flex-col text-[#34332F]'>
          -
        </div>
      ),
      wednesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
      thursday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Non-Veg:</p>
          <p>Chicken</p>
        </div>
      ),
      friday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Veg:</p>
          <p>chai, coffe</p>
        </div>
      ),
      saturday: (
        <div className='flex flex-col text-[#34332F]'>
          <p className='text-[#1E1E1E]'>Non-Veg:</p>
          <p>Panner and roti, chicken</p>
        </div>
      ),
      sunday: (
        <div className='flex flex-col text-[#34332F]'>
         <p className='text-[#1E1E1E]'>Veg:</p>
          <p>Poha</p>
        </div>
      ),
    },
    
  ]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "Meal Time",
      dataIndex: "period",
    },
    {
      key: "8",
      title: "Sunday",
      dataIndex: "sunday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 0,
            },
          };
        }
        return value;
      },
    },
    {
      key: "2",
      title: "Monday",
      dataIndex: "monday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 24,
            },
          };
        }
        return value;
      },
    },
    {
      key: "3",
      title: "Tuesday",
      dataIndex: "tuesday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 0,
            },
          };
        }
        return value;
      },
    },
    {
      key: "4",
      title: "Wednesday",
      dataIndex: "wednesday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 0,
            },
          };
        }
        return value;
      },
    },
    {
      key: "5",
      title: "Thursday",
      dataIndex: "thursday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 0,
            },
          };
        }
        return value;
      },
    },
    {
      key: "6",
      title: "Friday",
      dataIndex: "friday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 0,
            },
          };
        }
        return value;
      },
    },
    {
      key: "7",
      title: "Saturday",
      dataIndex: "saturday",
      render: (value, row) => {
        if (row.fullWidth) {
          return {
            children: value,
            props: {
              colSpan: 0,
            },
          };
        }
        return value;
      },
    },
    
  ]
  return (
  <TeacherDashboard name='Teacher Amenities' activeKey='3.1'>
  <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Teacher Amenities</p>
        <p className='text-[#616161] text-base'>Admission No: FAPCY446 </p>
    </div>}
  >
    <div className='flex items-center gap-4'>
      <Selector 
        title='Transport'
        selected={selected === "Transport"}
        onclick={() => setSelected("Transport")}
      />

      <Selector 
        title='Hostel'
        selected={selected === "Hostel"}
        onclick={() => setSelected("Hostel")}
      />
    </div>
    <Divider />
    <Card>
      <Form
        form={form}
        layout="vertical"
      >  
        {selected === "Transport" && <Row gutter={16}>
          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Teacher Name">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Route">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Vechile Number">
              <InputNumber style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Fare">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Driver Name">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Driver License">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Driver Phone">
              <InputNumber style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Category">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>
        </Row>}

        {selected === "Hostel" && <Row gutter={16}>
          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Teacher Name">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Rooms">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Hostel Name">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Hostel Address">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Description">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>

          <Col lg={8} sm={12} xs={24}>
            <FormItem name="" label="Category">
              <Input style={{ width: "100%"}} />
            </FormItem>  
          </Col>
        </Row>}  

        {selected === "Hostel" && <div className='mt-6'>
          <ParentTable 
            title=""
            data={data}
            column={column}
            hidePagination
            border

          />
        </div>}
      </Form>
    </Card>
  </Card>
  </TeacherDashboard>
  )
}

export default index