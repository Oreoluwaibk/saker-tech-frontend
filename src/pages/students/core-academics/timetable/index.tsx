import ParentDashboard from '@/components/dashboard/ParentDashboard'
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import ParentTable from '@/components/parents/ParentTable';
import { BookFilled, UserOutlined } from '@ant-design/icons';
import { Card, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ data, setData ] = useState<TableProps["dataSource"]>([
    {
      key: "1",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Period 1</p>
          <p>11:30 To 20:30</p>
        </div>
      ),
      monday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Manoshree Paul</p>
        </div>
      ),
      tuesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Vrinda Arora</p>
        </div>
      ),
      wednesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Vrinda Arora</p>
        </div>
      ),
      thursday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Vrinda Arora</p>
        </div>
      ),
      friday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      saturday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      sunday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
    },
    {
      key: "2",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Break 1</p>
          <p>10:15 To 10:20</p>
        </div>
      ),
      fullWidth: true,
      monday: (
        <div className='flex justify-center text-[#34332F]'>
          <p className='text-center'>Break 1</p>
        </div>
      ),
    },
    {
      key: "3",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Period 2</p>
          <p>15:40 To 18:40</p>
        </div>
      ),
      monday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Computer</p>
          <p><UserOutlined className='mr-2' /> Narender Singh</p>
        </div>
      ),
      tuesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Computer</p>
          <p><UserOutlined className='mr-2' /> Reema Saini</p>
        </div>
      ),
      wednesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Computer</p>
          <p><UserOutlined className='mr-2' /> Reema Saini</p>
        </div>
      ),
      thursday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Computer</p>
          <p><UserOutlined className='mr-2' /> Reema Saini</p>
        </div>
      ),
      friday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Computer</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      saturday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Computer</p>
          <p><UserOutlined className='mr-2' /> Narender Singh</p>
        </div>
      ),
      sunday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Mathematics</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
    },
    {
      key: "4",
      width: "100%",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Break 2</p>
          <p>18:40 To 19:00</p>
        </div>
      ),
      fullWidth: true,
      monday: (
        <div className='flex justify-center text-[#34332F]'>
          <p className='text-center'>Break 2</p>
        </div>
      ),
    },
    {
      key: "5",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Period 3</p>
          <p>07:00 To 23:59</p>
        </div>
      ),
      monday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Hindu Master</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      tuesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Hindu Master</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      wednesday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Hindu Master</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      thursday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Hindu Master</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      friday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> English</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      saturday: (
        <div className='flex flex-col text-[#34332F]'>
          <p><BookFilled className='mr-2' /> Hindu</p>
          <p><UserOutlined className='mr-2' /> Master Teacher</p>
        </div>
      ),
      sunday: (
        <div className='flex flex-col text-[#34332F]'>
          
        </div>
      ),
    },
    {
      key: "6",
      period: (
        <div className='flex flex-col items-center text-[#1E1E1E] font-semibold'>
          <p>Break 3</p>
          <p>09:00 To 09:00</p>
        </div>
      ),
      fullWidth: true,
      monday: (
        <div className='flex justify-center text-[#34332F]'>
          <p className='text-center'>Break 3</p>
        </div>
      ),
    }
  ]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "Days Period",
      dataIndex: "period",
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
  ]
  return (
  <StudentDashboard name='Time Table' activeKey='1.3'>
    <Card
    variant="borderless"
    styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
    title={<div className='pt-5 pb-3 px-4'>
      <p className='text-[30px] text-[#050505] font-semibold'>Time Table</p>
    </div>}
    >
      <div>
        <ParentTable 
          title=""
          data={data}
          column={column}
          hidePagination
          border

        />
      </div>
    </Card>
  </StudentDashboard>
  )
}

export default index