import DashboardContainer from '@/components/dashboard/DashboardContainer'
import Cards from '@/components/general/Cards'
import { Card, Col, Row } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import { StudentCard, StudentPurple, StudentYellow } from '../../../assets/icons'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import DashboardGraph from '@/components/general/graphs/DashboardGraph'

const Dashboard = () => {
    const [ showMore, setShowMore ] = useState(false);
  return (
    <DashboardContainer name='Dashboard' activeKey='Dashboard'>
        <Card
            variant="borderless"
            styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
            title={<div className='pt-5 pb-3 px-4'>
                <p className='text-[30px] text-[#050505] font-semibold'>Welcome back, Anjola!</p>
                <p className='text-base text-[#616161] font-light'>Track and manage LMS platform performance.</p>
            </div>}
        >
            <Row gutter={[15,15]}>
                <Col lg={8} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentYellow} alt="studentcard" />}
                        title="Total Students"
                        total={1276}
                        cardLink="View Students"
                        // percentage={cardObect.percentage}
                        // multipleImage
                    />
                </Col>
                <Col lg={8} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentCard} alt="studentcard" />}
                        title="Total Teachers"
                        total={213}
                        cardLink="View Teachers"
                        // percentage={cardObect.percentage}
                        // multipleImage
                    />
                </Col>
                <Col lg={8} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentPurple} alt="studentcard" />}
                        title="Total Parents"
                        total={1109}
                        cardLink="View Parents"
                        // percentage={cardObect.percentage}
                        // multipleImage
                    />
                </Col>
                {showMore&&<Col lg={8} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentPurple} alt="studentcard" />}
                        title="Total Alumni"
                        total={3581}
                        cardLink="View Alumni"
                        // percentage={cardObect.percentage}
                        // multipleImage
                    />
                </Col>}
                {showMore && <Col lg={8} sm={12} xs={24}>
                    <Cards 
                        image={<Image src={StudentPurple} alt="studentcard" />}
                        title="Total Non-academic staffs"
                        total={454}
                        cardLink="View Non-academic staffs"
                        // percentage={cardObect.percentage}
                        // multipleImage
                    />
                </Col>}
                 <Col lg={24} sm={24} xs={24}>
                <span className='flex justify-center text-[#0E0B0A] font-semibold cursor-pointer' onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"} {showMore ? <UpOutlined className='ml-4' /> :<DownOutlined className='ml-4' />}</span>
                </Col>
            </Row>

            <Row gutter={[15,15]} className='mt-6'>
                <Col lg={16} sm={12} xs={24}>
                    <Card variant="outlined">
                        <DashboardGraph 
                            title='Total Revenue'
                            description="Keep track of revenue generated"
                        />
                    </Card>
                    
                </Col>
                <Col lg={8} sm={12} xs={24}>
                    <Card variant="outlined">
                        <DashboardGraph 
                            title='Total Expenses'
                            description=""
                            isDonut
                        />
                    </Card>
                </Col>
            </Row>
        </Card>
    </DashboardContainer>
  )
}

export default Dashboard