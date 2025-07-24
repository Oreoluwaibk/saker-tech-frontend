import TableCards from '@/components/general/TableCards'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { DownloadOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AddComplaintType from '@/components/modals/complain/AddComplainType';
import AddComplainDetails from '@/components/modals/complain/AddComplainDetailss';

const index = () => {
  const [ select, setSelect ] = useState<any>(null);
  const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
  const [ courses, setCourses ] = useState([]);
  const [ addDetails, setAddDetails ] = useState(false);
  const [ addType, setAddType ] = useState(false)

  const handleDeleteCourse = (record:any) => {}
  const column: ColumnsType = [
    {
        key: "1",
        title: "S/N",
        dataIndex: "name",
    },
    {
        key: "2",
        title: "Complain Type",
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
        title: "Name",
        dataIndex: "instructor",
    },
     {
        key: "5",
        title: "Phone Number",
        dataIndex: "createdAt",
        // render(value){
        //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
        // }
    },
    {
        key: "4",
        title: "Date",
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
   
    // {
    //     key: "6",
    //     title: "Call Type",
    //     dataIndex: "duration",
    //     // render(value) {
    //     //     if(value){
    //     //         return (  <span>{value} minutes</span>)
    //     //     }else{
    //     //         return (<span>Not Set</span>)   
    //     //     }
    //     // }
    // },
    {
        key: "7",
        title: "Action",
        dataIndex: "role",
        render: (value:any, record:any) => (
        <div className='flex items-center gap-1'>
          {/* <EditOutlined /> */}
        <EyeOutlined className="cursor-pointer"  />
        {/* {deleteLoading && select === record.id ? <LoadingOutlined spin /> :<DeleteFilled className="cursor-pointer" onClick={() => {
            setSelect(record.id)
            handleDeleteCourse(record);
        }}  />} */}
        <DownloadOutlined />
        </div>
        )
    },
  ]

  
  return (
    <>
      <TableCards 
        name='Complain Details'
        description='Manage and track your complains'
        title='Complain Details'
        activeKey='3.4'
        column={column}
        dataSource={courses}
        extra={<div className='flex gap-4'>
          <Button type="default" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddType(true)}>Add Complaint Type</Button>
          <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddDetails(true)}>Add Details</Button>
        </div>}
      />

      {addType && <AddComplaintType onCancel={() => setAddType(false)} open={addType} />}
      {addDetails && <AddComplainDetails onCancel={() => setAddDetails(false)} open={addDetails} />}
    </>
    
  )
}

export default index