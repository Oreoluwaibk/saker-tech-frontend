// import { searchCourses } from '@/redux/actions/public';
import { SearchOutlined } from '@ant-design/icons'
import { Input, message, Select } from 'antd'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
// import { createErrorMessage } from '../../../utils/errorInstance';
// import { getUserCourses } from '@/redux/actions/student/course';
import useDebounce from "@/hooks/useDebounce";

const { Option } = Select;
const DashSearch = ({ type }: { type: string }) => {
  const router = useRouter();
  const [ loading, setLoading ]  = useState(false);
  const [search, setSearch] = useState('');
  const [allCourses, setAllCourses] = useState<any[]>([])
  const [ searchedItems, setSearchItems ] = useState<{
    id: number | string,
    name: string,
    coverimage: string,
    description: string,
    faculty: string,
    facultyId: string | number,
    difficulty: string
  }[]>([]);
  const debouncedSearch = useDebounce(search, 500);

  // const handleSearch = (value: string) => {
  //   if(!value) return;
  //   setLoading(true);
  //   searchCourses(value)
  //   .then(res => {
  //     if(res.status === 200 || res.status === 201) {
  //       setLoading(false);
  //       setSearchItems(res.data.data.courses)
  //     }
  //   })
  //   .catch(err => {
  //     setLoading(false);
  //     const errMsg = createErrorMessage(err?.response?.data);
  //     message.error(err?.response ? errMsg : `Unable to get courses with ${value} parameter, ${err.message}`)
  //   }) 
  // }

  // useEffect(() => {
  //   handleGetStudentCourses()
  // }, [])

  // useEffect(() => {
  //   if (debouncedSearch) {
  //     handleSearch(debouncedSearch);
  //   }
  // }, [debouncedSearch]);

  // const handleGetStudentCourses = () => {
  //   setLoading(true);
  //   getUserCourses()
  //   .then(res => {
  //     if(res.status === 200){
  //       setLoading(false);
  //       setAllCourses(res.data.data);
  //     }
  //   })
  //   .catch(err => {
  //     setLoading(false);
  //     const errMsg = createErrorMessage(err?.response?.data);
  //     console.log("err", err);
  //   })
  // }

  const handleSelect = (value: string | number) => {
    // const selectedCourse = searchedItems.find(item => item.id === value);
    // const isCourseBought = allCourses.find(item => item.courseid === value)

    // if(selectedCourse) {
    //   const faculty = selectedCourse.faculty.split(" ").join("-");
    //   const course = selectedCourse.id;
      
    //   if(type === "student") {
    //     if(isCourseBought) return router.push(`/student/dashboard/courses?course=${course}`);
    //     router.push(`/student/dashboard/faculties?faculty=${faculty}&course=${course}`);
    //   }
    // }
  }

  return (
    <Select 
      placeholder="Search..." 
      onChange={(value) => handleSelect(value)}
      onSearch={(value) => setSearch(value)}
      showSearch
      loading={loading}
      optionFilterProp="children"
      style={{
        width: "350px",
        borderRadius: "5px",
        height: "45px",
        backgroundColor: "#fff"
      }}prefix={<SearchOutlined className='text-xl' />}
    >
    {searchedItems.length > 0 && searchedItems.map((item, index: number) => {
      return <Option key={index} value={item.id}>{item.name}</Option>
    })}
  </Select>
  )
}

export default DashSearch;