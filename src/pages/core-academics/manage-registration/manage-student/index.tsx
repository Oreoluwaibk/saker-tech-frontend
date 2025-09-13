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
          title: "Login ID",
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
          title: "Mobile No.",
          dataIndex: "instructor",
      },
      {
          key: "5",
          title: "Student DOB",
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
          key: "6",
          title: "Email",
          dataIndex: "instructor",
      },
      {
          key: "7",
          title: "Class",
          dataIndex: "instructor",
      },
      {
          key: "8",
          title: "Father's Name",
          dataIndex: "instructor",
      },
      {
          key: "9",
          title: "Father's Mobile",
          dataIndex: "instructor",
      },
      {
          key: "10",
          title: "Mother's Name",
          dataIndex: "instructor",
      },
      {
          key: "11",
          title: "Mother's Mobile",
          dataIndex: "instructor",
      },
      {
          key: "12",
          title: "Admission Date",
          dataIndex: "instructor",
      },
      {
          key: "13",
          title: "Withdrawal Date",
          dataIndex: "instructor",
      },
      {
          key: "14",
          title: "Document Collection Date",
          dataIndex: "instructor",
      },
      {
          key: "15",
          title: "Withdrawal Status",
          dataIndex: "instructor",
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
          key: "16",
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
      name='Student List'
      description='Manage and Monitor students'
      title='Student List'
      activeKey='6.1'
      column={column}
      dataSource={courses}
      extra={<div className='flex gap-4'>
        <Button type="default" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} >Student Bulk Uploader</Button>
        <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} >Add Student</Button>
      </div>}
    />

      {/* {addAcademicYear && <AddAcademicYear onCancel={() => setAddAcademicYear(false)} open={addAcademicYear} />} */}
    </>
    
  )
}

export default index