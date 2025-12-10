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
                { key: 'timetable', label: 'Class Timetable', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
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
                { key: '15', label: 'Transport', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '15.1', label: 'Transport Route', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '15.2', label: 'Add Vechile', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '15.3', label: 'Assign Vechile', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                    ]
                },
                { key: '16', label: 'Mass Management', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '16.1', label: 'Add Meal', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '16.2', label: 'Meal Schedule', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                    ]
                },
                { key: '17', label: 'Hostel', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '17.1', label: 'Hostel', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '17.2', label: 'Room Type', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '17.3', label: 'Hostel Room', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                    ]
                },
                { key: '18', label: 'Inventory', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '18.1', label: 'Issue Item', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '18.2', label: 'Add Item Stock', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '18.3', label: 'Add Item', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },
                        { key: '18.4', label: 'Item Category', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '18.5', label: 'Item Store', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '18.6', label: 'Item Supplier', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                    ]
                },
            ]
        },
        {
            label: "Financial Management",
            key: "Financial Management",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '19', label: 'Expenses', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '19.1', label: 'Add Expense', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '19.2', label: 'Expense Type', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                    ]
                },
                { key: '20', label: 'Income', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '20.1', label: 'Add Income', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '20.2', label: 'Income Type', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                    ]
                },
                { key: '21', label: 'Manage Fees', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '21.1', label: 'Master Fee', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                        { key: '21.2', label: 'concession Fee', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },
                        { key: '21.3', label: 'Generate Fee and Payment', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },
                        { key: '21.4', label: 'Generate Extra Fee', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },
                        { key: '21.5', label: 'Fee Transaction', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                    ]
                },
            ]
        },
        {
            label: "Student Engagement",
            key: "Student Engagement",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '22', label: 'Manage Holiday', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '23', label: 'Events', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '24', label: 'Manage Notice Board', icon: <Image src={Course} alt="Courses" width={20} height={20} />,
                children:[
                    { key: '24.1', label: 'Notice Board List', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                    { key: '24.2', label: 'Notice Viewed By Student', icon: <Image src={Course} alt="Courses" width={20} height={20} /> }, 
                ]
            },
                { key: '25', label: 'Manage Summer Camp', icon: <Image src={Course} alt="Courses" width={20} height={20} />,children:[
                   { key: '25.1', label: 'Manange Student', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                   { key: '25.2', label: 'Create Batch', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                   { key: '25.3', label: 'Time Table', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },  
                ] },
                 { key: '26', label: 'Music Upload', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
                { key: '27', label: 'Message Center', icon: <Image src={Course} alt="Courses" width={20} height={20} />,children:[
                   { key: '27.1', label: 'Template List', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },   
                   { key: '27.2', label: 'Whatsapp Message Center', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },   
                   { key: '27.3', label: 'Whatsapp Default Message', icon: <Image src={Course} alt="Courses" width={20} height={20} /> },   
                ] },
            ]
        },
        {
            label: "Student Administration",
            key: "Student Administration",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '28', label: 'Manage Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                children:[
                  { key: '28.1', label: 'Create Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                   {key: '28.2', label: 'Draft Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                   {key: '28.3', label: 'Published Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                   {key: '28.4', label: 'Submitted Assignment', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                ]
            },
                { key: '29', label: 'Manage Attendance', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                children:[
                 { key: '29.1', label: 'Attendance Details', icon: <Image src={Course} alt="Courses" width={20} height={20} />},   
                 { key: '29.2', label: 'Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},   
                 { key: '29.3', label: 'Attendance Sync', icon: <Image src={Course} alt="Courses" width={20} height={20} />},   
                 { key: '29.4', label: 'Student Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},   
                ]
            },
                { key: '30', label: 'Manage Report Card', icon: <Image src={Course} alt="Courses" width={20} height={20} />,
                children:[
                   { key: '30.1', label: 'Generate Grade', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                   { key: '30.2', label: 'Grade Remark List', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                   { key: '30.3', label: 'Map Core and Extra Subject', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                   { key: '30.4', label: 'Report Card List', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                   { key: '30.5', label: 'Student Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                   { key: '30.6', label: 'Upload Core Student Mark', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                   { key: '30.7', label: 'Upload Extra Student Grade', icon: <Image src={Course} alt="Courses" width={20} height={20} />},    
                ]
            },
            ]
        },
        {
            label: "Admission & Enrollment",
            key: "Admission & Enrollment",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '31', label: 'Lead Management', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                children:[
                    { key: '31.1', label: 'Pending Leads', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '31.2', label: 'Assigned Leads', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                ]
                },
            ]
        },
        {
            label: "Exam & Evaluation",
            key: "Exam & Evaluation",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            children: [
                { key: '32', label: 'Manage Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                children:[
                    { key: '32.1', label: 'Missed Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.2', label: 'Exam Type List', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.3', label: 'Create Question Bank', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.4', label: 'Draft Questions', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.5', label: 'Verified Question Bank', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.6', label: 'Download & Upload Excel', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.7', label: 'Create Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.8', label: 'Draft Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    {key: '32.9', label: 'Published Examination', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                ]
                },
            ]
        },
        {
            label: "Comms & Reporting",
            key: "Comms & Reporting",
            icon: <Image src={Certificate} alt="Certificates" width={20} height={20} />,
            // children: [
            //     { key: '33', label: 'Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            //     { key: '34', label: 'Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />, },
            // ],
            children: [
                { key: '33', label: 'Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '33.1', label: 'Staff & Coordinator Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.2', label: 'Student Attendance Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.3', label: 'Student Fee Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.4', label: 'Registered Reports', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.5', label: 'Class Strength Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.6', label: 'Sibling Student Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.7', label: 'Student Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.8', label: 'Student Fee Concession Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '33.9', label: 'Student Fee Waiver Report', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    ]
                },
                { key: '34', label: 'Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />, 
                    children:[
                        { key: '34.1', label: 'Bonafide Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '34.2', label: 'Transfer Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '34.3', label: 'Fee Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                        {key: '34.4', label: 'Generate Transfer Certificate', icon: <Image src={Course} alt="Courses" width={20} height={20} />},  
                    ]
                },
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

        if(value.key === "6.0")  router.push("/core-academics/manage-registration/manage-staff");
        if(value.key === "6.1")  router.push("/core-academics/manage-registration/manage-student");
        if(value.key === "6.2")  router.push("/core-academics/manage-registration/manage-student-amenities");
        if(value.key === "6.3")  router.push("/core-academics/manage-registration/manage-unapproved-student");
        if(value.key === "6.4")  router.push("/core-academics/manage-registration/student-birthday-list");
        if(value.key === "6.5")  router.push("/core-academics/manage-registration/bulk-promotion");
        if(value.key === "6.6")  router.push("/core-academics/manage-registration/manage-teacher-amenitites");
        if(value.key === "6.7")  router.push("/core-academics/manage-registration/manage-parent");
        if(value.key === "6.8")  router.push("/core-academics/manage-registration/manage-coordinator");
        if(value.key === "6.9")  router.push("/core-academics/manage-registration/coordinator-student-management");
        if(value.key === "7.0")  router.push("/core-academics/manage-registration/student-withdrawal");
        if(value.key === "7.1")  router.push("/core-academics/manage-registration/group-subject-mapping");

        if(value.key === "8.0")  router.push("/core-academics/manage-question/create-question-bank");
        if(value.key === "8.1")  router.push("/core-academics/manage-question/draft-question-bank");
        if(value.key === "8.2")  router.push("/core-academics/manage-question/published-question-bank");
        if(value.key === "8.3")  router.push("/core-academics/manage-question/download-upload-excel");
        if(value.key === "8.4")  router.push("/core-academics/manage-question/upload-images");

        if(value.key === "9.0")  router.push("/core-academics/manage-assessment/create-assessment");
        if(value.key === "9.1")  router.push("/core-academics/manage-assessment/draft-assessment");
        if(value.key === "9.2")  router.push("/core-academics/manage-assessment/published-assessment");
        if(value.key === "9.3")  router.push("/core-academics/manage-assessment/missed-assessment");
        if(value.key === "9.4")  router.push("/core-academics/manage-assessment/published-level");

        if(value.key === "10.0")  router.push("/core-academics/manage-content/create-content");
        if(value.key === "10.1")  router.push("/core-academics/manage-content/create-workbook");
        if(value.key === "10.2")  router.push("/core-academics/manage-content/draft-workbooklist");
        if(value.key === "10.3")  router.push("/core-academics/manage-content/publish-workbook");
        if(value.key === "10.4")  router.push("/core-academics/manage-content/student-workbook");
        if(value.key === "timetable")  router.push("/core-academics/class-timetable");
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

        if(value.key === "15.1")  router.push("/facilities-and-logistics/transport/transport-route");
        if(value.key === "15.2")  router.push("/facilities-and-logistics/transport/add-vechile");
        if(value.key === "15.3")  router.push("/facilities-and-logistics/transport/assign-vechile");

        if(value.key === "16.1")  router.push("/facilities-and-logistics/mess-manamement/add-meal");
        if(value.key === "16.2")  router.push("/facilities-and-logistics/mess-manamement/meal-schedule");

        if(value.key === "17.1")  router.push("/facilities-and-logistics/hostel/hostel");
        if(value.key === "17.2")  router.push("/facilities-and-logistics/hostel/room-type");
        if(value.key === "17.3")  router.push("/facilities-and-logistics/hostel/hostel-room");

        if(value.key === "18.1")  router.push("/facilities-and-logistics/inventory/issue-item");
        if(value.key === "18.2")  router.push("/facilities-and-logistics/inventory/add-item-stock");
        if(value.key === "18.3")  router.push("/facilities-and-logistics/inventory/add-item");
        if(value.key === "18.4")  router.push("/facilities-and-logistics/inventory/item-category");
        if(value.key === "18.5")  router.push("/facilities-and-logistics/inventory/item-store");
        if(value.key === "18.6")  router.push("/facilities-and-logistics/inventory/item-supplier");

        if(value.key === "19.1")  router.push("/financial-management/expenses/add-expense");
        if(value.key === "19.2")  router.push("/financial-management/expenses/expense-type");

        if(value.key === "20.1")  router.push("/financial-management/income/add-income");
        if(value.key === "20.2")  router.push("/financial-management/income/income-type");

        if(value.key === "21.1")  router.push("/financial-management/manage-fees/master-fee");
        if(value.key === "21.2")  router.push("/financial-management/manage-fees/concession-fee");
        if(value.key === "21.3")  router.push("/financial-management/manage-fees/genrate-fee-and-payment");
        if(value.key === "21.4")  router.push("/financial-management/manage-fees/generate-extra-fee");
        if(value.key === "21.5")  router.push("/financial-management/manage-fees/fee-transaction");

        if(value.key === "22")  router.push("/student-engagement/manage-holiday");
        if(value.key === "23")  router.push("/student-engagement/events");
        if(value.key === "24.1")  router.push("/student-engagement/manage-noticeboard/notice-board-list");
        if(value.key === "24.2")  router.push("/student-engagement/manage-noticeboard/notice-viewed-student");
        if(value.key === "25.1")  router.push("/student-engagement/manage-summer-camp/manage-student");
        if(value.key === "25.2")  router.push("/student-engagement/manage-summer-camp/create-batch");
        if(value.key === "25.3")  router.push("/student-engagement/manage-summer-camp/time-table");
        if(value.key === "26")  router.push("/student-engagement/music-upload");
        if(value.key === "27.1")  router.push("/student-engagement/message-center/template-list");
        if(value.key === "27.2")  router.push("/student-engagement/message-center/whatsapp-message-center");
        if(value.key === "27.3")  router.push("/student-engagement/message-center/whatsapp-default-message");
        if(value.key === "28.1")  router.push("/student-adminstration/manage-assignment/create-assignment");
        if(value.key === "28.2")  router.push("/student-adminstration/manage-assignment/draft-assignment");
        if(value.key === "28.3")  router.push("/student-adminstration/manage-assignment/published-assignment");
        if(value.key === "28.4")  router.push("/student-adminstration/manage-assignment/submitted-assignment");
        if(value.key === "29.1")  router.push("/student-adminstration/manage-attendance/attendance-details");
        if(value.key === "29.2")  router.push("/student-adminstration/manage-attendance/attendance-report");
        if(value.key === "29.3")  router.push("/student-adminstration/manage-attendance/attendance-sync");
        if(value.key === "29.4")  router.push("/student-adminstration/manage-attendance/student-attendance-report");
        if(value.key === "30.1")  router.push("/student-adminstration/manage-reportcard/generate-grade");
        if(value.key === "30.2")  router.push("/student-adminstration/manage-reportcard/grade-remark-list");
        if(value.key === "30.3")  router.push("/student-adminstration/manage-reportcard/map-core-extra-subject");
        if(value.key === "30.4")  router.push("/student-adminstration/manage-reportcard/reportcard-list");
        if(value.key === "30.5")  router.push("/student-adminstration/manage-reportcard/student-attendance-report");
        if(value.key === "30.6")  router.push("/student-adminstration/manage-reportcard/upload-core-student-mark");
        if(value.key === "30.7")  router.push("/student-adminstration/manage-reportcard/upload-extra-student-grade");
    
        if(value.key === "31.1")  router.push("/admission-and-enrollment/lead-management/pending-leads");
        if(value.key === "31.2")  router.push("/admission-and-enrollment/lead-management/assigned-leads");

        if(value.key === "32.1")  router.push("/exam-and-evaluation/manage-examination/missed-examination"); 
        if(value.key === "32.2")  router.push("/exam-and-evaluation/manage-examination/exam-type-list");
        if(value.key === "32.3")  router.push("/exam-and-evaluation/manage-examination/create-question-bank");
        if(value.key === "32.4")  router.push("/exam-and-evaluation/manage-examination/draft-examination");
        if(value.key === "32.5")  router.push("/exam-and-evaluation/manage-examination/verified-question-bank");
        if(value.key === "32.6")  router.push("/exam-and-evaluation/manage-examination/download-upload-excel");
        if(value.key === "32.7")  router.push("/exam-and-evaluation/manage-examination/create-examination");
        if(value.key === "32.8")  router.push("/exam-and-evaluation/manage-examination/draft-question");
        if(value.key === "32.9")  router.push("/exam-and-evaluation/manage-examination/published-examination");
        
        if(value.key === "33.1")  router.push("/comms-and-reporting/report/staff-coordinator-attendance-report");
        if(value.key === "33.2")  router.push("/comms-and-reporting/report/student-attendance-report");
        if(value.key === "33.3")  router.push("/comms-and-reporting/report/student-fee-report");
        if(value.key === "33.4")  router.push("/comms-and-reporting/report/registered-reports");
        if(value.key === "33.5")  router.push("/comms-and-reporting/report/class-strength-report");
        if(value.key === "33.6")  router.push("/comms-and-reporting/report/sibling-student-report");
        if(value.key === "33.7")  router.push("/comms-and-reporting/report/student-report");
        if(value.key === "33.8")  router.push("/comms-and-reporting/report/student-fee-concession-report");
        if(value.key === "33.9")  router.push("/comms-and-reporting/report/student-fee-waiver-report");

        if(value.key === "34.1")  router.push("/comms-and-reporting/certificate/bonafide-certificate"); 
        if(value.key === "34.2")  router.push("/comms-and-reporting/certificate/transfer-certificate");
        if(value.key === "34.3")  router.push("/comms-and-reporting/certificate/fee-certificate");
        if(value.key === "34.4")  router.push("/comms-and-reporting/certificate/generate-transfer-certificate");

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