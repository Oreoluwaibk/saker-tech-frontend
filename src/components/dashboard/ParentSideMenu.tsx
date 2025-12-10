import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import variables from "@/styles/variables.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { Analytics, Certificate, Course, Dashboard, FrontOffice, ManageAss, ManageCont, MAnageMast, ManageQuest, ManageReg, Student, Wallet } from '../../../assets/icons';
import { useRouter } from 'next/router';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

const MenuItem = Menu.Item;
type menuProps = {
    name: string;
    activeKey: string
}


const ParentSideMenu = ({ name, activeKey }: menuProps) => {
    const router = useRouter();
    
    const items = [
        {
          label: "Dashboard",
          key: "Dashboard",
          icon: <Image src={Dashboard} alt="Dashboard" width={20} height={20} />,
        },
        {
            label: "Core Academics",
            key: "Core Academics",
            icon: <Image src={Course} alt="Courses" width={20} height={20} />,
            children: [
                { key: '1.1', label: 'Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.2', label: 'Assessment Result', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.3', label: 'Attendance', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                
                { key: '1.4', label: 'Timetable', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.5', label: 'Student Leave', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ],
        },
        {
            label: "Learning Levels",
            key: "Learning Levels",
            icon: <Image src={Student} alt="Students" width={20} height={20} />,
             children: [
                { key: '2.1', label: 'Learning Level Result', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '2.2', label: 'Level Analytics', icon: <Image src={Course} alt="Courses" width={20} height={20} />}
            ]
        },
        {
            label: "Facilities & Logistics",
            key: "Facilities & Logistics",
            icon: <Image src={Wallet} alt="Wallet" width={20} height={20} />,
            children: [
                { key: '3.1', label: 'Student Amenities', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
            ]
        },
        {
            label: "Exams & Evaluation",
            key: "Exams & Evaluation",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '4.1', label: 'Examination List', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '4.2', label: 'Examination Results', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
            ]
        },
        {
            label: "Financial Management",
            key: "Financial Management",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '5.1', label: 'Fee Payment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Comms & Reporting",
            key: "Comms & Reporting",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '6.1', label: 'Report Card', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '6.2', label: 'Holiday', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '6.3', label: 'Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '6.31', label: 'Bonafide Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />}, 
                        {key: '6.32', label: 'Fee Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    ]
                },
            ]
        },
    ];
    
    const handleChangeMenu = (value:any) => {
        if(value.key === "Dashboard")  router.push("/parents");
        if(value.key === "1.1")  router.push("/parents/core-academics/assignments");
        if(value.key === "1.2")  router.push("/parents/core-academics/assessment-results");
        if(value.key === "1.3")  router.push("/parents/core-academics/attendance");
        if(value.key === "1.4")  router.push("/parents/core-academics/timetable");
        if(value.key === "1.5")  router.push("/parents/core-academics/student-leave");
        if(value.key === "2.1")  router.push("/parents/learning-levels/learning-level-result");
        if(value.key === "2.2")  router.push("/parents/learning-levels/level-analytics");
        if(value.key === "3.1")  router.push("/parents/facilities-and-logistics/student-amenities");
        if(value.key === "4.1")  router.push("/parents/exam-and-evaluation/examination-list"); 
        if(value.key === "4.2")  router.push("/parents/exam-and-evaluation/examination-results"); 
        if(value.key === "5.1")  router.push("/parents/financial-management/fee-payment");
        if(value.key === "6.1")  router.push("/parents/comms-and-reporting/report-card");
        if(value.key === "6.2")  router.push("/parents/comms-and-reporting/holiday");
        if(value.key === "6.31")  router.push("/parents/comms-and-reporting/certificate/bonafide-certificate");
        if(value.key === "6.32")  router.push("/parents/comms-and-reporting/certificate/fee-certificate");
    }
  return (
    <Menu 
        className={variables.sidemenu}
        // defaultSelectedKeys={[name]}
        theme="light"
        mode="inline"
        activeKey={activeKey}
        selectedKeys={[activeKey]}
        items={items}
        onClick={handleChangeMenu}
        expandIcon={({ isOpen }) => isOpen ? <DownOutlined /> :<RightOutlined />}
    />
  )
}

export default ParentSideMenu