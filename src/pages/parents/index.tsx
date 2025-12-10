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
            title: "Teacher's Name",
            dataIndex: "price"
        },
        {
            key: "3",
            title: "Class Name",
            dataIndex: "instructor",
        },
        {
            key: "4",
            title: "Subject Name",
            dataIndex: "numofstudents",
        },
        {
            key: "5",
            title: "Start Time",
            dataIndex: "createdAt",
        },
        {
            key: "6",
            title: "End Time",
            dataIndex: "duration"
        },
        
    ]
  return (
    <ParentDashboard name='Dashboard' activeKey='Dashboard'>
        <Card
            variant="borderless"
            styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
            title={<div className='pt-5 pb-3 px-4'>
                <p className='text-[30px] text-[#050505] font-semibold'>Welcome back, Anjola!</p>
            </div>}
        >
            <Row gutter={[15,15]}>
                 <Col lg={24} sm={24} xs={24}>
                    <Notice 
                        title="Notice Board"
                        description="Notice not available"
                        onclick={() => router.push("/notifications/parent")}
                    />
                </Col>
                <Col lg={6} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentYellow} alt="studentcard" />}
                        title="Current Grades/Scores"
                        total={`85%`}
                        cardLink="2nd Position in Class"
                        hideIcon
                    />
                </Col>
                <Col lg={6} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentCard} alt="studentcard" />}
                        title="Total Outstanding"
                        total="$432"
                        cardLink="2 unpaid fees"
                        hideIcon
                    />
                </Col>
                <Col lg={6} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentPurple} alt="studentcard" />}
                        title="Paid Fees"
                        total={2}
                        cardLink="Completed Payments"
                        hideIcon
                    />
                </Col>
                <Col lg={6} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentPurple} alt="studentcard" />}
                        title="Pending Clearance"
                        total={2}
                        cardLink="Processing payments"
                        hideIcon
                    />
                </Col>
                <Col lg={24} sm={24} xs={24}>
                    <ParentTable 
                        title="Kamar TimeTable for Tuesday"
                        column={column}
                        data={data}
                    />
                </Col>
               
            </Row>

            <Row gutter={[15,15]} className='mt-6'>
                <Col lg={12} sm={12} xs={24}>
                    <Card variant="outlined">
                        <DashboardGraph 
                            title='Total Expenses'
                            description=""
                            isDonut
                        />
                    </Card>
                </Col>

                 <Col lg={12} sm={12} xs={24}>
                    <Card title={<p className='text-xl font-medium text-[#1C2A53]'>Upcoming Payments</p>}>
                        <UpcomingPayments
                            title='Tuition Fee - Spring 2024'
                            status="Pending"
                            description="Spring semester tuition payment"
                            date='Sept 20, 2025'
                            amounts={232}
                        />
                    </Card>
                    
                </Col>
            </Row>
        </Card>
    </ParentDashboard>
  )
}

export default index