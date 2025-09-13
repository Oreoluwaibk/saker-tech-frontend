import TableCards from '@/components/general/TableCards'
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { DeleteFilled, DownloadOutlined, EditOutlined, EyeOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import AddPostalDispatc from '@/components/modals/AddPostalDispatc';
import AddAcademicYear from '@/components/modals/AddAcademicYear';
const Option = Select.Option;
const index = () => {
  const [ select, setSelect ] = useState<any>(null);
  const [ deleteLoading, setDeleteLoading ] = useState<boolean>(false);
  const [ courses, setCourses ] = useState([]);
  const [ addAcademicYear, setAddAcademicYear ] = useState(false);
  const [ subTitle, setSubTitle ] = useState("Assssment")

  const handleDeleteCourse = (record:any) => {}
  const column: ColumnsType = [
      {
          key: "1",
          title: "S/N",
          dataIndex: "name",
      },
      {
          key: "2",
          title: "Assessment Name",
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
          dataIndex: "instructor",
      },
      {
          key: "5",
          title: "Assessment Name",
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
          key: "6",
          title: "Created On",
          dataIndex: "instructor",
      },
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
      name="Published Assessments"
      description="Manage and track assessment"
      title="Published Assessments"
      activeKey='9.3'
      column={column}
      dataSource={courses}
      showFilter={subTitle === "Complexity Master" }
      titleFilter={<Select placeholder="Select Session" className='white_style' style={{height: 38, width: 255, backgroundColor: "#f4f4f4", border: "none", marginTop: 20}} onSelect={(value) => setSubTitle(value)}>
        <Option value="Assssment">Filter By Status</Option>
        {/* <Option value="Complexity Master">Complexity Master</Option> */}
      </Select>}
      subtitle=""
      extra={<div className='flex gap-4'>
        <Button type="primary" className='!h-[54px] !min-w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold' icon={<PlusOutlined />} onClick={() => setAddAcademicYear(true)}>Published Assessments</Button>
      </div>}
    />

      {/* {addAcademicYear && <AddAcademicYear onCancel={() => setAddAcademicYear(false)} open={addAcademicYear} />} */}
    </>
    
  )
}

export default index