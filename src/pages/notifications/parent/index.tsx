import ParentDashboard from '@/components/dashboard/ParentDashboard'
import NotificationList from '@/components/general/NotificationList';
import { Card, Col, Row } from 'antd'
import React, { useState } from 'react'

const index = () => {
  const [ notifications, setNotifications ] = useState([
    {
      id: 1,
      title: "The Assessment Proctoring Testing is published.",
      description: "11 Sep, 2024 12:32 PM",
      date: "1 hour ago"
    },
    {
      id: 1,
      title: "The Assignment Assignment Whatsapp Test is published.",
      description: "03 Jun, 2024 11:38 AM",
      date: "30 mins ago"
    }
  ]);
  return (
  <ParentDashboard activeKey='Notification' name='Notification'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Notification</p>
      </div>}
    >
     <Row gutter={[5,5]}>
      {notifications.map((notification: any, i: number) => (
        <Col lg={24} sm={24} xs={24} key={i}>
          <NotificationList 
            title={notification.title}
            date={notification.date}
            description={notification.description}
          />
        </Col>
      ))}
      <Col></Col>
     </Row>
    </Card>
  </ParentDashboard>
  )
}

export default index