import TableCards from '@/components/general/TableCards'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { DeleteFilled, DownloadOutlined, EditOutlined, EyeOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AddPostalDispatc from '@/components/modals/AddPostalDispatc';
import AddDetails from '@/components/modals/postalReceived/AddDetails';
import AddReference from '@/components/modals/postalReceived/AddReference';

const index = () => {
  const [ select, setSelect ] = useState<any>(null);
  const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
  const [ courses, setCourses ] = useState([]);
  const [ addPostalReceived, setAddPostalReceived ] = useState(false);
  const [ addReference, setAddReference ] = useState(false)

  const handleDeleteCourse = (record:any) => {}
  const column: ColumnsType = [
    {
        key: "1",
        title: "S/N",
        dataIndex: "name",
    },
    {
        key: "2",
        title: "To TItle",
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
        title: "Reference Title",
        dataIndex: "instructor",
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
    {
        key: "5",
        title: "From Title",
        dataIndex: "createdAt",
        // render(value){
        //     return (<span>{moment(value).format("DD MMM, YYYY")}</span>)
        // }
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
        }}  />}
        <DownloadOutlined /> */}
        </div>
        )
    },
  ]

  
  return (
    <>
      <TableCards 
        name='Postal Recived Details'
        description='Track All Postal Recived Details'
        title='Postal Recived Details'
        activeKey='3.3'
        column={column}
        dataSource={courses}
        extra={<div className='flex gap-4'>
          <Button type="default" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddReference(true)}>Add Reference</Button>
          <Button type="primary" className='!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddPostalReceived(true)}>Add Details</Button>
        </div>}
      />

      {addPostalReceived && <AddDetails onCancel={() => setAddPostalReceived(false)} open={addPostalReceived} />}
      {addReference && <AddReference onCancel={() => setAddReference(false)} open={addReference} />}
    </>
    
  )
}

export default index