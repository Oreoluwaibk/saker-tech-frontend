import React, { ReactNode, useEffect, useState } from 'react';
import { Avatar, Layout, Modal } from 'antd';
import variables from "@/styles/variables.module.scss";
import { BackButton, Logo } from '../../../assets/icons';
import Image from 'next/image';
import SideMenu from './SideMenu';
import { BellOutlined, LoadingOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
// import { TestImage } from '../../../assets/images';
// import DashSearch from '../general/DashSearch';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Router, { useRouter } from 'next/router';
// import { signOut } from '@/redux/reducers/auth/auth';
import { redirect } from 'next/navigation';
// import { createErrorMessage } from '../../../utils/errorInstance';
import Link from 'next/link';
import DashSearch from '../general/DashSearch';


const { Content, Sider, Header } = Layout;

type Props = {
    children: ReactNode;
    name: string;
    goback?: () => void;
    activeKey: string;
}

const DashboardContainer = ({
    children,
    name,
    goback,
    activeKey
}:Props) => {
    // const router = useRouter();
    // const dispatch = useAppDispatch();
    // const { isAuthenticated, loginType } = useAppSelector(state => state.auth);
    // const [ loading, setLoading ] = useState(false);
    const [collapsed, setCollapsed] = useState(false);


    // useEffect(() => { 
    //     if(!isAuthenticated) router.push("/auth/signin");
    //     if(isAuthenticated && loginType !== "tutor") router.push("/auth/signin");
    //     if(isAuthenticated && loginType === "tutor") {
    //         const isTokenExpred = localStorage.getItem("tlp_token_expire");
    //         if(isTokenExpred) {
    //             const expiredDate = new Date(JSON.parse(isTokenExpred));
    //             const today = new Date(Date.now());
    //             if(today > expiredDate) handleExpiredToken();
    //         }
    //     }
    // }, [isAuthenticated]);

    // const handleLogout = () => {
    //     console.log("logging out...");
    //     Modal.info({
    //         title: "Are you sure you want to logout?",
    //         onOk: () => {
    //             handleLog();
    //         },
    //         closable: true,
    //     })
    // }

    // const handleLog = () => {
    //     setLoading(true);
    //     logoutInstructor()
    //     .then(res => {
    //         if(res.status === 200){
    //             setLoading(true);
    //             dispatch(signOut());
    //             localStorage.clear();
    //             setLoading(false);
    //         }
    //     })
    //     .catch(err => {
    //         setLoading(false);
    //         const errMsg = createErrorMessage(err?.response?.data);
    //         setLoading(true);
    //         dispatch(signOut());
    //         localStorage.clear();
    //         setLoading(false);
    //     })
    // }

    // const handleExpiredToken = () => {
    //     Modal.info({
    //         title: "Your session has expired, Logging you out....",
    //     })

    //     setTimeout(() => {
    //         handleLog();
    //     }, 2000)
    // }

    // if(!isAuthenticated) return;

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
            

            {/* <hr className="w-full"/> */}

            <SideMenu name={name} activeKey={activeKey} />

            {/* <div className="flex items-center gap-4 px-3 bg-white" style={{height: "5%"}} onClick={handleLogout}>
                <Image 
                    src={Logout}
                    alt='log out'
                />
                <p className="text-lg text-headerLink cursor-pointer w-1/2">Logout</p>
                {loading && <LoadingOutlined spin className="text-lg text-pBlue" />}
            </div> */}
            
           
        </Sider>

        <Layout>
            <Content>
                <Header className="!bg-white flex items-center gap-3 justify-between !py-4 !h-24">
                {collapsed ? <MenuUnfoldOutlined className="text-2xl md:!hidden" onClick={() => setCollapsed(false)} /> : <MenuFoldOutlined className='md:!hidden text-2xl' onClick={() => setCollapsed(true)} />}
                    <div className="bg-white flex items-center gap-8">
                        <Image src={BackButton} alt="Back button" onClick={goback} />
                        <h2 className="text-xl font-bold text-[#0E0E0E]">{name}</h2>
                    </div>
                    <DashSearch type='tutor' />

                    <div className='flex items-center gap-6'>
                        <div>
                            <BellOutlined className="text-2xl text-black bg-[#f6f6f6] p-1" />
                        </div>
                        
                        <Link href="/student/dashboard/profile-settings">
                            <div className='flex items-center gap-3 bg-[#f6f6f6] p-2 px-4 rounded-[5px]'>
                                <Avatar icon={<UserOutlined />} size={30} />
                                <div className='flex flex-col'>
                                    <p className='text-[#4B4B4B] text-sm font-medium m-0'>Adekunle Anjola</p>
                                    <p className='text-[#9C9D9E] text-xs m-0'>Super Admin</p>
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

export default DashboardContainer