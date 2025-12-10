import DashboardContainer from '@/components/dashboard/DashboardContainer'
import { AlignCenterOutlined, DeleteFilled, EditOutlined, EyeOutlined, LoadingOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Input, Select, Table } from 'antd'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import AddPhoneCall from '@/components/modals/phonecall/AddPhoneCall';
import AddTransportRoute from '@/components/modals/facilityAndLogistics/AddTransportRoute';
import AddVechile from '@/components/modals/facilityAndLogistics/AddVechile';
import ScheduleMeal from '@/components/modals/facilityAndLogistics/ScheduleMeal';
import AddHostel from '@/components/modals/facilityAndLogistics/AddHostel';
import AddExpense from '@/components/modals/financialManagenent/expense/AddExpense';

const Option = Select.Option;
const index = () => {
    const [ select, setSelect ] = useState<any>(null);
    const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
    const [ courses, setCourses ] = useState([]);
    const [ openAddExpense, setAddExpense ] = useState(false);
      
    const column: ColumnsType = [
           {
               key: "1",
               title: "S/N",
               dataIndex: "name",
           },
           {
               key: "2",
               title: "Lead ID",
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
               title: "Student Name",
               dataIndex: "instructor",
           },
           {
               key: "4",
               title: "Father's Name",
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
               title: "Mother's Name",
               dataIndex: "createdAt",
               // render(value){
               //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
               // }
           },
           {
               key: "6",
               title: "Contact Number",
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
               key: "6",
               title: "Email ID",
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
               key: "6",
               title: "Lead Source",
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
               key: "6",
               title: "Lead Priority",
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
               key: "8",
               title: "Action",
               dataIndex: "role",
               render: (value:any, record:any) => (
               <div className='flex items-center gap-1'>
               <EyeOutlined className="cursor-pointer"  />
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
    
          {/* <Select placeholder="All status" className='yellow_style' style={{height: 38, width: 155, backgroundColor: "#FED500", border: "none"}} prefix={<AlignCenterOutlined rotate={180}/>}>
            <Option>January</Option>
          </Select> */}
        </div>
    )
  return (
    <DashboardContainer name='Manage Assigned Leads' activeKey="31.2">
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Assigned Leads</p>
        <p className='text-base text-[#616161] font-light'>Manage and track lists of assigned leads</p>
      </div>}
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

    {openAddExpense && <AddExpense open={openAddExpense} onCancel={() => setAddExpense(false)} />}
    </DashboardContainer>
  )
}

export default index