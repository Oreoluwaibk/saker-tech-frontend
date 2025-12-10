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


const TeacherSideMenu = ({ name, activeKey }: menuProps) => {
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
                { key: '1.1', label: 'Student Lists', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.2', label: 'Content', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.3', label: 'Class Work', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.4', label: 'Lab', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.5', label: 'Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                 { key: '1.6', label: 'Assessment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.7', label: 'Assessment Result', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.8', label: 'Pop-up Quiz Results', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.9', label: 'My Attendance', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.91', label: 'Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.92', label: 'Student Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '1.93', label: 'Timetable', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ],
        },
        {
            label: "Learning Levels",
            key: "Learning Levels",
            icon: <Image src={Student} alt="Students" width={20} height={20} />,
             children: [
                { key: '2.1', label: 'Learning Level', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '2.2', label: 'Learning Level Result', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '2.3', label: 'Level Analytics', icon: <Image src={Course} alt="Courses" width={20} height={20} />}
            ]
        },
        {
            label: "Facilities & Logistics",
            key: "Facilities & Logistics",
            icon: <Image src={Wallet} alt="Wallet" width={20} height={20} />,
            children: [
                { key: '3.1', label: 'Teacher Amenities', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '3.2', label: 'Coordinator List', icon: <Image src={Course} alt="Courses" width={20} height={20} />},

            ]
        },
        {
            label: "Exams & Evaluation",
            key: "Exams & Evaluation",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '4.1', label: 'DD/PTA', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '4.2', label: 'DD/PTA Meeting', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '4.3', label: 'Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '4.4', label: 'Examination Results', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
            ]
        },
        {
            label: "Comms & Reporting",
            key: "Comms & Reporting",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '5.1', label: 'Report Card', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '5.2', label: 'Holiday', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '5.3', label: 'Summer Camp Time Table', icon: <Image src={Course} alt="Courses" width={20} height={20} />},

            ]
        },
    ];
    
    const handleChangeMenu = (value:any) => {
        if(value.key === "Dashboard")  router.push("/teachers");
        if(value.key === "1.1")  router.push("/teachers/core-academics/student-lists");
        if(value.key === "1.2")  router.push("/teachers/core-academics/content");
        if(value.key === "1.3")  router.push("/teachers/core-academics/classwork");
        if(value.key === "1.4")  router.push("/teachers/core-academics/lab");
        if(value.key === "1.5")  router.push("/teachers/core-academics/assignment");
        if(value.key === "1.6")  router.push("/teachers/core-academics/assessment");
        if(value.key === "1.7")  router.push("/teachers/core-academics/assessment-result");
        if(value.key === "1.8")  router.push("/teachers/core-academics/pop-up-quiz");
        if(value.key === "1.9")  router.push("/teachers/core-academics/my-attendance");
        if(value.key === "1.91")  router.push("/teachers/core-academics/attendance-report");
        if(value.key === "1.92")  router.push("/teachers/core-academics/student-attendance-report");
        if(value.key === "1.93")  router.push("/teachers/core-academics/timetable");

        if(value.key === "2.1")  router.push("/teachers/learning-levels/learning-level");
        if(value.key === "2.2")  router.push("/teachers/learning-levels/learning-level-result");
        if(value.key === "2.3")  router.push("/teachers/learning-levels/level-analytics");

        if(value.key === "3.1")  router.push("/teachers/facilities-and-logistics/teacher-amenities");
        if(value.key === "3.2")  router.push("/teachers/facilities-and-logistics/coordinator-list");

        if(value.key === "4.1")  router.push("/teachers/exam-and-evaluation/dd-pta"); 
        if(value.key === "4.2")  router.push("/teachers/exam-and-evaluation/dd-pta-meeting"); 
        if(value.key === "4.3")  router.push("/teachers/exam-and-evaluation/examination"); 
        if(value.key === "4.4")  router.push("/teachers/exam-and-evaluation/examination-results"); 

        if(value.key === "5.1")  router.push("/teachers/comms-and-reporting/report-card");
        if(value.key === "5.2")  router.push("/teachers/comms-and-reporting/holiday");
        if(value.key === "5.3")  router.push("/teachers/comms-and-reporting/summer-camp");
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

export default TeacherSideMenu