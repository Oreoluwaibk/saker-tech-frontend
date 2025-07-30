import DashboardContainer from '@/components/dashboard/DashboardContainer'
import React from 'react';
import { Button, Card, Input, Select, Switch, Table } from 'antd';
import { AlignCenterOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Edit } from '../../../../../assets/icons';
import Image from 'next/image';

type Employee = {
    key: number;
    role: string;
    code: string;
    name: string;
    email: string;
    mobile: string;
    isActive: boolean;
};
type Role = {
    key: number;
    name: string;
    isActive: boolean;
};
const Option = Select.Option;

const index = () => {
    const [currentTable, setCurrentTable] = useState('employees')
    const [roles, setRoles] = useState<Role[]>([
        { key: 1, name: 'Accountant', isActive: true },
        { key: 2, name: 'Desk Receptionist', isActive: false },
        { key: 3, name: 'Coordinator', isActive: true },
        { key: 4, name: 'Data Entry Admin', isActive: true },
        { key: 5, name: 'english teacher', isActive: false },
        { key: 6, name: 'Finance', isActive: true },
        { key: 7, name: 'Head Teacher', isActive: true },
        { key: 8, name: 'Head Director', isActive: true },
        { key: 9, name: 'Hindi Teacher', isActive: true },
        { key: 10, name: 'French Teacher', isActive: false },
    ]);
    const [employees, setEmployees] = useState<Employee[]>([
        // {
        //     key: 1,
        //     role: 'Coordinator',
        //     code: 'EMP72439',
        //     name: 'ajay sah',
        //     email: 'ajay@gmail.com',
        //     mobile: '9889525223',
        //     isActive: true,
        // },
        // {
        //     key: 2,
        //     role: 'Coordinator',
        //     code: 'EMP94684',
        //     name: 'aabha',
        //     email: 'aabha@gmail.com',
        //     mobile: '9889525224',
        //     isActive: false,
        // },
        // {
        //     key: 3,
        //     role: 'Subject Matter Expert',
        //     code: 'EMP88376',
        //     name: 'Puneet Shrivastav',
        //     email: 'puneet@cyboardschool.com',
        //     mobile: '9191919191',
        //     isActive: true,
        // },
        // {
        //     key: 4,
        //     role: 'Sub Admin',
        //     code: 'EMP33864',
        //     name: 'Narendra Pal',
        //     email: 'narendra@gmail.com',
        //     mobile: '8932088508',
        //     isActive: true,
        // },
        // {
        //     key: 5,
        //     role: 'HR Dept',
        //     code: 'EMP76121',
        //     name: 'Prati Raizada',
        //     email: 'prati@cyboardschool.com',
        //     mobile: '9393939393',
        //     isActive: false,
        // },
        // {
        //     key: 6,
        //     role: 'Coordinator',
        //     code: 'EMP16280',
        //     name: 'Rashmi Lal',
        //     email: 'rashmi@gmail.com',
        //     mobile: '9810953807',
        //     isActive: true,
        // },
        // {
        //     key: 7,
        //     role: 'Checker_Updated',
        //     code: 'EMP45879',
        //     name: 'Puhupwas',
        //     email: 'puhupwasbind301@gmail.com',
        //     mobile: '5664646444',
        //     isActive: true,
        // },
        // {
        //     key: 8,
        //     role: 'Coordinator',
        //     code: 'EMP91409',
        //     name: 'PuhupwasCoordinator',
        //     email: 'puhupwascoordinator@gmail.com',
        //     mobile: '2343312312',
        //     isActive: true,
        // },
        // {
        //     key: 9,
        //     role: 'Coordinator',
        //     code: 'EMP51239',
        //     name: 'akash',
        //     email: 'akash@gmail.com',
        //     mobile: '7206577318',
        //     isActive: true,
        // },
        // {
        //     key: 10,
        //     role: 'HR Dept',
        //     code: 'EMP1458',
        //     name: 'Roshni',
        //     email: 'dubeyroshni@gmail.com',
        //     mobile: '9015855822',
        //     isActive: false,
        // },
    ]);
    const EmployeesTable: ColumnsType = [
        {
            key: "1",
            title: "S/N",
            dataIndex: "index",
            render: (value, record, index) => index + 1
        },
        {
            key: "2",
            title: "Role Type",
            dataIndex: "role",
            width: 50,
            render(value) {
                if (value) {
                    return (<span>{value}</span>)
                } else {
                    return (<span>Not Set</span>)
                }
            }
        },
        {
            key: "3",
            title: "Employee Code",
            dataIndex: "code",
        },
        {
            key: "4",
            title: "Employee Name",
            dataIndex: "name",
        },
        {
            key: "5",
            title: "Email(login)ID",
            dataIndex: "email",
        },
        {
            key: "6",
            title: "Mobile No.",
            dataIndex: "mobile",
        },
        {
            key: "7",
            title: "Action",
            dataIndex: "isActive",
            render: (value, record) => {
                return (
                    <div className='flex items-center gap-2'>
                        <Button style={{ border: 'none', padding: '2px', background: 'transparent', boxShadow: 'none' }}>
                            <Image src={Edit} alt='' />
                        </Button>

                        <span className={`p-1 px-2 rounded-xl font-bold ${value ? 'bg-[#FED500]/20 text-[#FED500]' : 'bg-[#F6F6F6] text-black'}  `}>{value ? 'Active' : 'Inactive'}</span>

                        <Switch size='small' checked={value} />
                    </div>
                )
            }
        },

    ]
    const EmployeesRolesTable: ColumnsType = [
        {
            key: "1",
            title: "S/N",
            dataIndex: "index",
            render: (value, record, index) => index + 1
        },
        {
            key: "2",
            title: "Role Name",
            dataIndex: "name",
        },
        {
            key: "3",
            title: "Action",
            dataIndex: "isActive",
            render: (value, record) => {
                return (
                    <div className='flex items-center gap-2'>
                        <Button style={{ border: 'none', padding: '2px', background: 'transparent', boxShadow: 'none' }}>
                            <Image src={Edit} alt='' />
                        </Button>

                        <span className={`p-1 px-2 rounded-xl font-bold ${value ? 'bg-[#FED500]/20 text-[#FED500]' : 'bg-[#F6F6F6] text-black'}  `}>{value ? 'Active' : 'Inactive'}</span>

                        <Switch size='small' checked={value} />
                    </div>
                )
            }
        },

    ]
    const tabBarExtras = (
        <div className="flex items-center gap-4 py-4">
            <Input
                prefix={<SearchOutlined />}
                placeholder='Search...'
                style={{ height: 38, width: 146, backgroundColor: "#F4F4F4", border: "none" }}

            />

            <Select placeholder="All status" className='yellow_style' style={{ height: 38, width: 155, backgroundColor: "#FED500", border: "none" }} prefix={<AlignCenterOutlined rotate={180} />}>
                <Option>January</Option>
            </Select>
        </div>

    )
    const handleChange = (value: string) => {
        setCurrentTable(value);
    }
    return (
        <DashboardContainer name='Manage Employee' activeKey='11.0'>
            <Card
                variant="borderless"
                styles={{ body: { backgroundColor: "#F6F6F6" }, header: { backgroundColor: "#f6f6f6" } }}
                title={
                    <div className='pt-5 pb-3 px-4 flex gap-3 flex-col'>
                        <div >
                            <p className='text-[30px] text-[#050505] font-semibold'>{currentTable === 'employees' ? 'Employee' : 'Role Type'} List</p>
                            <p className='text-base text-[#616161] font-light'>Manage and track lists of {currentTable === 'employees' ? 'employee' : 'role type'}</p>
                        </div>
                        <Select
                            defaultValue="employees"
                            variant='borderless'
                            style={{
                                width: '200px',
                                background: '#ECECEC'
                            }}
                            onChange={handleChange}
                            options={[
                                { value: 'employees', label: 'Employee List' },
                                { value: 'roles', label: 'Role Type List' },

                            ]}
                        />
                    </div>
                }
                extra={currentTable === 'employees' && <Button type="primary" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} >Add Employee</Button>}
            >

                <Card variant="outlined" extra={tabBarExtras}>
                    <Table
                        scroll={currentTable === 'employees' && employees.length > 0 ? { x: 1200 } : {}}
                        columns={currentTable === 'employees' ? EmployeesTable : EmployeesRolesTable}
                        dataSource={currentTable === 'employees' ? employees : roles}
                    />
                </Card>
            </Card>
        </DashboardContainer>
    )
}

export default index