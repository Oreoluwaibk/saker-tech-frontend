import DashboardContainer from '@/components/dashboard/DashboardContainer'
import { AlignCenterOutlined, DeleteFilled, EditOutlined, LoadingOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Input, Select, Table } from 'antd'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import EmptyComponent from '@/components/general/EmptyComponent';
import AddcourseModal from '@/components/modals/courses/AddcourseModal';

const Option = Select.Option;
const index = () => {
    const [ select, setSelect ] = useState<any>(null);
    const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
    const [ courses, setCourses ] = useState([]);
    const [ openAddCourse, setOpenAddCourse ] = useState(false);

    const column: ColumnsType = [
        {
            key: "1",
            title: "S.No",
            dataIndex: "name",
        },
        {
            key: "2",
            title: "Course Title",
            dataIndex: "price",
            render(value) {
                if(value){
                    return (  <span>{value}</span>)
                }else{
                    return (<span>Not Set</span>)   
                }
            }
        },
        {
            key: "3",
            title: "Course Sub Title",
            dataIndex: "instructor",
        },
        {
            key: "4",
            title: "Category",
            dataIndex: "numofstudents",
            render(value:any, record:any) {
                // maxstudents
                if(record.maxstudents){
                    return (  <span>{value || "No"} student(s)</span>)
                }else{
                    return (<span>No limit</span>)   
                }
            }
        },
        {
            key: "5",
            title: "Sub Category",
            dataIndex: "createdAt",
            // render(value){
            //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
            // }
        },
        {
            key: "6",
            title: "Online Course",
            dataIndex: "duration",
            // render(value) {
            //     if(value){
            //         return (  <span>{value} minutes</span>)
            //     }else{
            //         return (<span>Not Set</span>)   
            //     }
            // }
        },
        {
            key: "7",
            title: "Course Fee",
            dataIndex: "status",
        },
        {
            key: "7",
            title: "Price",
            dataIndex: "status",
        },
        {
            key: "8",
            title: "Action",
            dataIndex: "role",
            render: (value:any, record:any) => (
                <div className='flex items-center gap-1'>
                    <EditOutlined className="cursor-pointer"  />
                    {/* <DownloadOutlined className="cursor-pointer" /> */}
                    {deleteLoading && select === record.id ? <LoadingOutlined spin /> :<DeleteFilled className="cursor-pointer" onClick={() => {
                        setSelect(record.id)
                        handleDeleteCourse(record);
                    }}  />}
                </div>
            )
        },
    ]

    const handleDeleteCourse = (record:any) => {}
    const tabBarExtras = (
        <div className="flex items-center gap-4 py-4">
            <Input 
                prefix={<SearchOutlined />}
                placeholder='Search...'
                style={{height: 38, width: 146, backgroundColor: "#F4F4F4", border: "none"}}
                
            />

            <Select placeholder="All status" className='yellow_style' style={{height: 38, width: 155, backgroundColor: "#FED500", border: "none"}} prefix={<AlignCenterOutlined rotate={180}/>}>
                <Option>January</Option>
            </Select>
        </div>
      )
  return (
    <DashboardContainer name='Courses' activeKey="1">
        <Card
            variant="borderless"
            styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
            title={<div className='pt-5 pb-3 px-4'>
                <p className='text-[30px] text-[#050505] font-semibold'>Courses</p>
                <p className='text-base text-[#616161] font-light'>Track and manage all courses.</p>
            </div>}
            extra={<Button type="primary" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setOpenAddCourse(true)}>Add course</Button>}
        >
            <Card variant="outlined" extra={tabBarExtras}>
                <Table 
                    columns={column}
                    dataSource={courses}
                    // locale={{
                    //     emptyText: () => (
                    //         <EmptyComponent 
                    //             title='No Course Created yet'
                    //             description='Click on the button below to create a course'
                    //             buttonTitle='Create Course'
                    //             // image={<Image alt='empty image' src={CourseEmpty} />}
                    //             // icon={<PlusOutlined />}
                    //             // onClick={onClick}
                    //         />
                    //     )
                    // }}
                />
            </Card>
        </Card>

        {openAddCourse && <AddcourseModal open={openAddCourse} onCancel={() => setOpenAddCourse(false)} />}
    </DashboardContainer>
  )
}

export default index