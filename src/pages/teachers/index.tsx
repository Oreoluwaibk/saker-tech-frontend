import ParentDashboard from '@/components/dashboard/ParentDashboard'
import Cards from '@/components/general/Cards'
import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { StudentCard, StudentPurple, StudentYellow } from '../../../assets/icons'
import DashboardGraph from '@/components/general/graphs/DashboardGraph'
import Notice from '@/components/general/Notice'
import ParentTable from '@/components/parents/ParentTable';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useRouter } from 'next/router'
import UpcomingPayments from '@/components/parents/cards/UpcomingPayments'
import StudentDashboard from '@/components/dashboard/StudentDashboard'
import TeacherDashboard from '@/components/dashboard/TeacherDashboard'
import Link from 'next/link'

const index = () => {
    const router = useRouter();
    const [ data, setData ] = useState<TableProps["dataSource"]>([]);
    const column: ColumnsType = [
        {
            key: "1",
            title: "S/N",
            dataIndex: "name",
        },
        {
            key: "2",
            title: "Subject Name",
            dataIndex: "price"
        },
        {
            key: "3",
            title: "Teacher's Name",
            dataIndex: "instructor",
        },
        {
            key: "4",
            title: "Start Time",
            dataIndex: "numofstudents",
        },
        {
            key: "5",
            title: "End Time",
            dataIndex: "createdAt",
        },
        {
            key: "6",
            title: "Action",
            dataIndex: "duration"
        },
        
    ]
  return (
    <TeacherDashboard name='Dashboard' activeKey='Dashboard'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Welcome back, Anjola!</p>
        <p className='text-base text-[#616161] font-light'>Admission No: BISCY102</p>
      </div>}
    >
      <Row gutter={[15,15]}>
        <Col lg={24} sm={24} xs={24}>
          <Notice 
            title="Notice Board"
            description="Notice not available"
            onclick={() => router.push("/notifications/students")}
          />
        </Col>
        <Col lg={5} sm={12} xs={24}>
          <Cards 
            image={<Image src={StudentYellow} alt="studentcard" />}
            title="Total Students"
            total="18"
            // cardLink="All Subjects"
            hideIcon
          />
        </Col>
        <Col lg={5} sm={12} xs={24}>
          <Cards 
            image={<Image src={StudentCard} alt="studentcard" />}
            title="Total Subjects"
            total="3"
            // cardLink="2nd positon in class"
            hideIcon
          />
        </Col>
        <Col lg={4} sm={12} xs={24}>
          <Cards 
            image={<Image src={StudentPurple} alt="studentcard" />}
            title="Assignmet"
            total={8}
              // cardLink="View"
          />
        </Col>
        <Col lg={5} sm={12} xs={24}>
          <Cards 
            image={<Image src={StudentPurple} alt="studentcard" />}
            title="Assessment"
            total={8}
              // cardLink="View"
          />
        </Col>
          <Col lg={5} sm={12} xs={24}>
          <Cards 
            image={<Image src={StudentPurple} alt="studentcard" />}
            title="Examination"
            total={4}
              // cardLink="View"
          />
        </Col>
        <Col lg={24} sm={24} xs={24}>
          <ParentTable 
            title="Student Attendance"
            column={column}
            data={data}
            extra={<Link href="/teachers/core-academics/student-attendance-report">View</Link>}
          />
        </Col>
          
      </Row>
    </Card>
    </TeacherDashboard>
  )
}

export default index