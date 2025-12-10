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
import AddRoomType from '@/components/modals/facilityAndLogistics/AddRoomType';

const Option = Select.Option;
const index = () => {
    const [ select, setSelect ] = useState<any>(null);
    const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
    const [ courses, setCourses ] = useState([]);
    const [ openAddRoomType, setAddRoomType ] = useState(false);
      
    const column: ColumnsType = [
       {
           key: "1",
           title: "S/N",
           dataIndex: "name",
       },
       {
           key: "2",
           title: "Room Type",
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
           title: "Description",
           dataIndex: "instructor",
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
    <DashboardContainer name='Room Type List' activeKey="17.2">
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Room Type List</p>
        <p className='text-base text-[#616161] font-light'>Manage and track Room</p>
      </div>}
      extra={<div className='flex gap-4'>
        
        <Button type="primary" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddRoomType(true)}>Add Room Type</Button>
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

    {openAddRoomType && <AddRoomType open={openAddRoomType} onCancel={() => setAddRoomType(false)} />}
    </DashboardContainer>
  )
}

export default index