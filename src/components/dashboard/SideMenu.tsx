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

const SideMenu = ({ name, activeKey }: menuProps) => {
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
                { key: '1', label: 'Course', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                {
                    key: 'sub1',
                    label: 'Front Office',
                    icon: <Image src={FrontOffice} alt="Courses" width={20} height={20} />,
                    children: [
                        { key: '2', label: 'Admission Enquiry', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '3', label: 'Visitor Book', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '3.1', label: 'Phone Call Log', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '3.2', label: 'Postal Dispatch', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '3.3', label: 'Postal Receive', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '3.4', label: 'Complain', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                    ],
                },
                {
                    key: 'sub2',
                    label: 'Manage Master',
                    icon: <Image src={MAnageMast} alt="Courses" width={16} height={16} />,
                    children: [
                        { key: '4', label: 'School Setup', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '4.1', label: 'Academics Year', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.2', label: 'Class List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.3', label: 'Reason List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.4', label: 'Board List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.5', label: 'Subject List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.6', label: 'Learning Level Master', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '4.7', label: 'Subject Skills', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.8', label: 'Group Subject Skills', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '4.9', label: 'Manage Category', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '5.0', label: 'Manage Sub Category', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '5.1', label: 'Manage Level', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                    ],
                },
                {
                    key: 'sub3',
                    label: 'Manage Registration',
                    icon: <Image src={ManageReg} alt="Courses" width={16} height={16} />,
                    children: [
                        { key: '6.0', label: 'Manage Staff', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '6.1', label: 'Manage Student', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '6.2', label: 'Manage Student Amenities', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '6.3', label: 'Manage Unapprove Student', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '6.4', label: 'Student Birthday List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '6.5', label: 'Bulk Promotion', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                         { key: '6.6', label: 'Manage Teacher Amenities', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '6.7', label: 'Manage Parent', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '6.8', label: 'Manage Coordinator', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '6.9', label: 'Coordinator & Student Management', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '7.0', label: 'Student Withdrawal/Inactivity', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '7.1', label: 'Group Subject Mapping', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                    ],
                },
                {
                    key: 'sub4',
                    label: 'Manage Question Banks',
                    icon: <Image src={ManageQuest} alt="Courses" width={16} height={16} />,
                    children: [
                        { key: '8.0', label: 'Create Question Bank', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '8.1', label: 'Draft Question Bank', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '8.2', label: 'Published Question Bank', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '8.3', label: 'Download & Upload Excel', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '8.4', label: 'Upload Images', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                    ],
                },
                {
                    key: 'sub5',
                    label: 'Manage Assesment',
                    icon: <Image src={ManageAss} alt="Courses" width={16} height={16} />,
                    children: [
                        { key: '9.0', label: 'Create Assessment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '9.1', label: 'Draft Assessment List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '9.2', label: 'Published Assessment List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '9.3', label: 'Missed Assessment List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '9.4', label: 'Published Level List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                    ],
                },
                {
                    key: 'sub6',
                    label: 'Manage Content',
                    icon: <Image src={ManageCont} alt="Courses" width={16} height={16} />,
                    children: [
                        { key: '10.0', label: 'Create Content', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                        { key: '10.1', label: 'Create Work Book', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '10.2', label: 'Draft Work Book List', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '10.3', label: 'Published Work Book', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                        { key: '10.4', label: 'Student Work Book', icon: <Image src={Course} alt="Courses" width={20} height={20} />,  },
                    ],
                },
                { key: 'timeiable', label: 'Time Table', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ],
        },
        {
            label: "Staff Management",
            key: "Staff Management",
            icon: <Image src={Student} alt="Students" width={20} height={20} />,
             children: [
                { key: 'sub7', label: 'Role Management', icon: <Image src={Course} alt="Courses" width={20} height={20} />,
               children:[
                   { key: '11.0', label: 'Employee List', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                { key: '11.1', label: 'Assign menu', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
               ]
            },
            
                { key: 'sub8', label: 'Human Resources', icon: <Image src={Course} alt="Courses" width={20} height={20} />,
                children:[
                    { key: '11.2', label: 'Leave Type', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                    { key: '11.3', label: 'Approve Leave Request', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                    { key: '11.4', label: 'Apply Leave', icon: <Image src={Course} alt="Courses" width={20} height={20} />},
                ]
            },
                { key: 'sub9', label: 'Manage Leaves', icon: <Image src={Course} alt="Courses" width={20} height={20} />,
                children:[
                    { key: '11.5', label: 'Leave Type', icon: <Image src={Course} alt="Courses" width={20} height={20} />}, 
                    { key: '11.6', label: 'Pending Leaves', icon: <Image src={Course} alt="Courses" width={20} height={20} />}, 
                    { key: '11.7', label: 'Approve Student Leaves', icon: <Image src={Course} alt="Courses" width={20} height={20} />}, 
                    { key: '11.8', label: 'Approve Employee Leaves', icon: <Image src={Course} alt="Courses" width={20} height={20} />}, 
                    { key: '11.9', label: 'Disapprove Employee Leaves', icon: <Image src={Course} alt="Courses" width={20} height={20} />}, 
                ]
             },
            ]
        },
        {
            label: "Facilities & Logistics",
            key: "Facilities & Logistics",
            icon: <Image src={Wallet} alt="Wallet" width={20} height={20} />,
            children: [
                { key: '15', label: 'Transport', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '16', label: 'Mass Management', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '17', label: 'Hostel', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '18', label: 'Inventory', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Financial Management",
            key: "Financial Management",
            icon: <Image src={Analytics} alt="Analytics" width={20} height={20} />,
             children: [
                { key: '19', label: 'Expenses', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '20', label: 'Income', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '21', label: 'Manage Fees', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Student Engagement",
            key: "Student Engagement",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '22', label: 'Manage Holiday', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '23', label: 'Events', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '24', label: 'Manage Notice Board', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '25', label: 'Manage Summer Camp', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                 { key: '26', label: 'Music Upload', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '27', label: 'Message Center', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Student Administration",
            key: "Student Administration",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '28', label: 'Manage Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '29', label: 'Manage Attendance', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '30', label: 'Manage Report Card', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Admission & Enrollment",
            key: "Admission & Enrollment",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '31', label: 'Lead Management', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Exam & Evaluation",
            key: "Exam & Evaluation",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '32', label: 'Manage Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
        {
            label: "Comms & Reporting",
            key: "Comms & Reporting",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '33', label: 'Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '34', label: 'Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            ]
        },
    ];
    
    const handleChangeMenu = (value:any) => {
        if(value.key === "Dashboard")  router.push("/dashboard");
        if(value.key === "1")  router.push("/core-academics/course");
        if(value.key === "2")  router.push("/core-academics/front-office/admission-inquiry");
        if(value.key === "3")  router.push("/core-academics/front-office/visitors-book");
        if(value.key === "3.1")  router.push("/core-academics/front-office/phone-call-log");
        if(value.key === "3.2")  router.push("/core-academics/front-office/postal-dispatch");
        if(value.key === "3.3")  router.push("/core-academics/front-office/postal-receive");
        if(value.key === "3.4")  router.push("/core-academics/front-office/complain");
        if(value.key === "4")  router.push("/core-academics/manage-master/school-setup");
        if(value.key === "4.1")  router.push("/core-academics/manage-master/academics-year");
        if(value.key === "4.2")  router.push("/core-academics/manage-master/classlist");
        if(value.key === "4.3")  router.push("/core-academics/manage-master/reasonlist");
        if(value.key === "4.4")  router.push("/core-academics/manage-master/boardlist");
        if(value.key === "4.5")  router.push("/core-academics/manage-master/subjectlist");
        if(value.key === "4.6")  router.push("/core-academics/manage-master/learning-level-master");
        if(value.key === "4.7")  router.push("/core-academics/manage-master/subject-skills");
        if(value.key === "4.8")  router.push("/core-academics/manage-master/group-subject-skills");
        if(value.key === "4.9")  router.push("/core-academics/manage-master/manage-category");
        if(value.key === "5.0")  router.push("/core-academics/manage-master/manage-subcategory");
        if(value.key === "5.1")  router.push("/core-academics/manage-master/manage-level");
        if(value.key === "11.0")  router.push("/staff-management/role-management/employee-list");
        if(value.key === "11.1")  router.push("/staff-management/role-management/assign-menu");
        if(value.key === "11.2")  router.push("/staff-management/human-resources/leave-type");
        if(value.key === "11.3")  router.push("/staff-management/human-resources/approve-leave-request");
        if(value.key === "11.4")  router.push("/staff-management/human-resources/apply-leave");
        if(value.key === "11.5")  router.push("/staff-management/manage-leaves/leave-type");
        if(value.key === "11.6")  router.push("/staff-management/manage-leaves/pending-leaves");
        if(value.key === "11.7")  router.push("/staff-management/manage-leaves/approve-student-leaves");
        if(value.key === "11.8")  router.push("/staff-management/manage-leaves/approved-employee-leaves");
        if(value.key === "11.9")  router.push("/staff-management/manage-leaves/disapproved-employee-leaves");
        if(value.key === "Students")  router.push("/students");
        if(value.key === "Wallet")  router.push("/wallet");
        if(value.key === "Analytics")  router.push("/analytics");
        if(value.key === "Certificates")  router.push("/certificates");
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

export default SideMenu