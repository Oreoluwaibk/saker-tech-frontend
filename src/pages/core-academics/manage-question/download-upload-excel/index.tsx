import TableCards from '@/components/general/TableCards'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { DeleteFilled, DownloadOutlined, EditOutlined, EyeOutlined, LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
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
          title: "Image Name",
          dataIndex: "price",
          render(value) {
          if(value){
              return (  <span>{value}</span>)
          }else{
              return (<span>Not Set</span>)   
          }
          }
      },
      // {
      //     key: "3",
      //     title: "Board",
      //     dataIndex: "instructor",
      // },
      // {
      //     key: "4",
      //     title: "Class",
      //     dataIndex: "numofstudents",
      //     render(value:any, record:any) {
      //     // maxstudents
      //     if(record.maxstudents){
      //         return (  <span>{value || "No"} student(s)</span>)
      //     }else{
      //         return (<span>No limit</span>)   
      //     }
      //     }
      // },
      // {
      //     key: "5",
      //     title: "Subject",
      //     dataIndex: "createdAt",
      //     // render(value){
      //     //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
      //     // }
      // },
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
    ];
  
  return (
    <>
    <TableCards 
      name='Question Bank by Excel'
      description='Manage and track download & upload excel sheet '
      title='Question Bank by Excel'
      activeKey='8.3'
      // subtitle='Note'
      column={column}
      dataSource={courses}
      extra={null}
      notTable
      field={(
      <div className='text-[#1E1E1E] flex flex-col gap-4'>
        <p className='text-[#FF0004] text-[24px] font-medium'>Note;</p>
        <p className=''><span className='font-semibold'>FILL THE GAP :</span> Compose the question and use [brackets] for the possible answers. For example, [Paris] is the capital of [France].The [biggest/bigger] planet of our solar system is [Jupiter/Neptune/Earth]. <span className='font-semibold block'>When giving multiple options for a fill in the blank, use Slash (/) to separate them and the first option should be the correct one.</span></p>
        <p><span className='font-semibold'>MATCH THE PAIRS :</span> Compose the question and enter the options correctly in matching pairs.<span className='font-semibold block'>Kindly note that a minimum of Three Pairs have to entered for the excel sheet to be accepted by the system.</span></p>
        <p><span className='font-semibold'>ARRANGE THE SEQUENCE :</span>Compose the question and add possible answers in the correct order. We will present them randomly for the users end.<span className='font-semibold block'>Kindly note that a minimum of Three Sequences have to entered for the excel sheet to be accepted by the system.</span></p>

        <div className='flex items-center justify-center gap-10'>
          <div className='cursor-pointer text-[#191919] font-medium flex flex-col items-center gap-0 border-[5px] rounded-[5px] border-[#FAFAFA] px-8 py-16'>
            <div className='bg-[#F1F1F1] flex items-center justify-center' style={{ width: 80, height: 80, borderRadius: 100}}>
              <DownloadOutlined className="text-[24px]" />
            </div>
            <p className='mt-4'>Download</p>
            <p>Question by Excel</p>
          </div>

          <div className='cursor-pointer text-[#191919] font-medium flex flex-col items-center gap-0 border-[5px] rounded-[5px] border-[#FAFAFA] px-8 py-16'>
            <div className='bg-[#F1F1F1] flex items-center justify-center' style={{ width: 80, height: 80, borderRadius: 100}}>
              <UploadOutlined className="text-[24px]" />
            </div>
            <p className='mt-4'>Upload Question</p>
            <p>by Excel</p>
          </div>
        </div>
      </div>
    )}
    />

      {/* {addAcademicYear && <AddAcademicYear onCancel={() => setAddAcademicYear(false)} open={addAcademicYear} />} */}
    </>
    
  )
}

export default index