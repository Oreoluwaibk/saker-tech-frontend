import React, { ReactNode, useState } from 'react';
import { Avatar, Layout, Select } from 'antd';
import variables from "@/styles/variables.module.scss";
import { BackButton, Logo } from '../../../assets/icons';
import Image from 'next/image';
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TeacherSideMenu from './TeacherSideMenu';


const { Content, Sider, Header } = Layout;

type Props = {
    children: ReactNode;
    name: string;
    goback?: () => void;
    activeKey: string;
}

const TeacherDashboard = ({
    children,
    name,
    goback,
    activeKey
}:Props) => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={variables.dashboardCont}>
        <Sider 
            className={variables.sider} 
            theme="light"
            breakpoint="md"
            collapsedWidth="0"
            width="300"
            collapsible
            collapsed={collapsed}
            onCollapse={(collapsed) => setCollapsed(collapsed)}
        >
            <Link href="/" className='block justify-items-center mt-6'>
                <Image 
                    src={Logo}
                    alt='Imo Varsity'
                    className="bg-white"
                />
            </Link>

            <TeacherSideMenu name={name} activeKey={activeKey} />
           
        </Sider>

        <Layout>
            <Content>
                <Header className="!bg-white flex items-center gap-3 justify-between !py-4 !h-24">
                {collapsed ? <MenuUnfoldOutlined className="text-2xl md:!hidden" onClick={() => setCollapsed(false)} /> : <MenuFoldOutlined className='md:!hidden text-2xl' onClick={() => setCollapsed(true)} />}
                    <div className="bg-white flex items-center gap-8">
                        <Image src={BackButton} alt="Back button" onClick={goback} />
                        <h2 className="text-xl font-bold text-[#0E0E0E]">{name}</h2>
                    </div>

                    <Select style={{width: 179, height: 40}}>
                        <Select.Option value="search" sty>
                           Kabui Hakik
                        </Select.Option>
                    </Select>

                    <div className='flex items-center gap-6'>
                        <div>
                            <BellOutlined 
                                className="text-2xl text-black bg-[#f6f6f6] p-1 cursor-pointer" 
                                onClick={() => router.push("/notifications/teachers")}
                            />
                        </div>
                        
                        <Link href="/teachers/profile">
                            <div className='flex items-center gap-3 bg-[#f6f6f6] p-2 px-4 rounded-[5px]'>
                                <Avatar icon={<UserOutlined />} size={30} />
                                <div className='flex flex-col'>
                                    <p className='text-[#4B4B4B] text-sm font-medium m-0'>Adekunle Anjola</p>
                                    <p className='text-[#9C9D9E] text-xs m-0'>Teacher</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    
                   {/* <div className="flex items-center gap-4">
                        
                        <Avatar icon={<UserOutlined />} size={50} />
                    </div> */}
                    
                    
                </Header>
                <Layout className={variables.children}>
                    {children}
                </Layout>
               
            </Content>
        </Layout>
    </Layout>
  )
}

export default TeacherDashboard