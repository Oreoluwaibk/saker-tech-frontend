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
          title: "Questions",
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
          title: "Board",
          dataIndex: "instructor",
      },
      {
          key: "4",
          title: "Class",
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
          title: "Subject",
          dataIndex: "createdAt",
          // render(value){
          //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
          // }
      },
      // {
      //     key: "6",
      //     title: "Student Name",
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
      name='Verified Question Bank List'
      description='Manage and track questions'
      title='Verified Question Bank List'
      activeKey='8.2'
      column={column}
      dataSource={courses}
      extra={null}
    />

      {/* {addAcademicYear && <AddAcademicYear onCancel={() => setAddAcademicYear(false)} open={addAcademicYear} />} */}
    </>
    
  )
}

export default index