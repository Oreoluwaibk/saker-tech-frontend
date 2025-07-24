import TableCards from '@/components/general/TableCards'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { DeleteFilled, DownloadOutlined, EditOutlined, EyeOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AddPostalDispatc from '@/components/modals/AddPostalDispatc';
import AddAcademicYear from '@/components/modals/AddAcademicYear';

const index = () => {
  const [ select, setSelect ] = useState<any>(null);
  const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
  const [ courses, setCourses ] = useState([]);
  const [ addAcademicYear, setAddAcademicYear ] = useState(false)

  const handleDeleteCourse = (record:any) => {}
  const column: ColumnsType = [
    {
        key: "1",
        title: "S/N",
        dataIndex: "name",
    },
    {
        key: "2",
        title: "Academic Year Start Date",
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
        title: "Academic Year End Date",
        dataIndex: "instructor",
    },
    {
        key: "4",
        title: "Date Created",
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
    //     key: "5",
    //     title: "From Title",
    //     dataIndex: "createdAt",
    //     // render(value){
    //     //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
    //     // }
    // },
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
          <EditOutlined />
        <EyeOutlined className="cursor-pointer"  />
        {deleteLoading && select === record.id ? <LoadingOutlined spin /> :<DeleteFilled className="cursor-pointer" onClick={() => {
            setSelect(record.id)
            handleDeleteCourse(record);
        }}  />}
        <DownloadOutlined />
        </div>
        )
    },
  ]

  
  return (
    <>
      <TableCards 
        name='Academic Year List'
        description='Manage and Track All Academic Year'
        title='Academic Year List'
        activeKey='4.1'
        column={column}
        dataSource={courses}
        extra={<div className='flex gap-4'>
          <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddAcademicYear(true)}>Add Academic Year</Button>
        </div>}
      />

      {addAcademicYear && <AddAcademicYear onCancel={() => setAddAcademicYear(false)} open={addAcademicYear} />}
    </>
    
  )
}

export default index