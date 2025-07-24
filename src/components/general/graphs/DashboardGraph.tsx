import React, { useEffect, useRef, useState } from 'react';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler, ArcElement, } from 'chart.js';

// Register necessary Chart.js components
Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler, ArcElement);
import { Line, Doughnut  } from 'react-chartjs-2';
import { Button, Select } from 'antd';
import Image from 'next/image';
import { MoreOutlined } from '@ant-design/icons';
// import { Dcourse } from '../../../../assets/icons';



const Option = Select.Option;
interface props {
  onlyShowMonths?: boolean;
  title?: string;
  isAnalytics?: boolean;
  color?: string;
  padding?: number;
  isWallet?: boolean;
  handleGetAnaltyics?: any;
  analtyics?: any;
  description?: string;
  isDonut?: boolean;
}

type MonthlyDataItem = {
  month: string;
  totalStudents: number;
  totalCoursesSold: number;
  totalEarnings: number;
};

type YearlyDataItem = {
  year: string;
  totalStudents: number;
  totalCoursesSold: number;
  totalEarnings: number;
};

type GraphData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const DashboardGraph = ({ 
  onlyShowMonths, 
  title = "Overview Analytics", 
  isAnalytics = false, 
  color, 
  padding,
  isWallet,
  handleGetAnaltyics,
  analtyics,
  description,
  isDonut
}: props) => {
  const chartRef = useRef<any>(null);
  const [ selected, setSelected ] = useState("students")
  const [ data, setData ] = useState<any>({
    labels,
  
    datasets: [
      {
        label: 'Students',
        data: [0],
        fill: true, // Enable fill
        borderColor: 'rgba(81, 19, 255, 1)',
        // backgroundColor: 'rgba(75,192,192,0.2)', // Fill color
        tension: 0.4, // Smooth borders
      },
      {
        label: 'Courses',
        data: [0],
        fill: true, // Enable fill
        borderColor: 'rgb(129, 0, 190)',
        // backgroundColor: 'rgba(75,192,192,0.2)', // Fill color
        tension: 0.4, // Smooth borders
      },
      {
        label: 'Earnings',
        data: [0],
        fill: true, // Enable fill
        borderColor: 'rgb(255, 95, 0)',
        // backgroundColor: 'rgba(75,192,192,0.2)', // Fill color
        tension: 0.4, // Smooth borders
      }
    ]
  })

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart?.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart?.height!);
      gradient.addColorStop(0, 'rgba(81, 19, 255, 1)');
      gradient.addColorStop(1, 'rgba(81, 19, 255, 0)');
      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  useEffect(() => {
    if (analtyics) setData(convertToGraphData(analtyics));
  }, [analtyics]);

  const convertToGraphData = (data: (MonthlyDataItem | YearlyDataItem)[]): GraphData => {
    if(data.length === 0) return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Total Students",
          data:  [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Total Courses Sold",
          data:  [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Total Earnings",
          data: [0,0,0,0,0,0,0,0,0,0,0],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        }
      ]
    };;
    const isMonthly = "month" in data[0];
  
    const labels = isMonthly
      ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
      : data.map((item) => (item as YearlyDataItem).year).sort();
  
    const sortedData = isMonthly
      ? labels.map((month) =>
          (data as MonthlyDataItem[]).find((item) => item.month === month) || 
          { month, totalStudents: 0, totalCoursesSold: 0, totalEarnings: 0 }
        )
      : data.sort((a, b) => parseInt((a as YearlyDataItem).year) - parseInt((b as YearlyDataItem).year));
  
    return {
      labels,
      datasets: [
        {
          label: "Total Students",
          data: sortedData.map((item) => item.totalStudents),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Total Courses Sold",
          data: sortedData.map((item) => item.totalCoursesSold),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Total Earnings",
          data: sortedData.map((item) => item.totalEarnings),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        }
      ]
    };
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // This sets the Y-axis to begin at zero
        suggestedMin: 0,   // Suggested minimum value
        suggestedMax: 100,  // Suggested maximum value
        title: {
          display: true,
          text: 'Revenue',
          font: {
            size: 14,
            // weight: 'bold',
          },
          color: '#333',
        },

      },
      x: {
        title: {
          display: true,
          text: 'Months',
          font: {
            size: 14,
            // weight: 'bold',
          },
          color: '#333',
        },
      }
    },
    plugins: {
      legend: {
        display: false
      },
    },
    elements: {
      line: {
        tension: 0.4 // Smooth borders
      },
      point: {
        radius: 5,
        hoverRadius: 7,
      }
    }

  };

  const dataed = {
  labels: ['Salaries', 'Supplies', 'Fees', 'Operation', 'Fuel'],
  datasets: [
    {
      // label: 'Revenue',
      data: [1200, 1900, 3000, 500, 2000],
      backgroundColor: [
        '#FFC553',
        '#003E8F',
        '#9E77ED',
        '#B692F6',
        '#D6BBFB'
      ],
      borderWidth: 1,
    }
  ]
};

const optionsed = {
  cutout: '48%', // for donut hole (default ~50%)
  plugins: {
    legend: {
      display: true,
      position: 'right' as const,
    },
  },
};

  return (
    <div className="flex flex-col gap-8" style={{ backgroundColor: color ? color : undefined, padding: padding ? padding : undefined}}>
      <div className="flex items-center gap-6 justify-between flex-wrap">
        {!isAnalytics && !isWallet && <div className="flex flex-col gap-0">
          <p className="font-bold text-lg text-[#101828]">{title}</p>
          <p className="text-xs text-[#667085]">{description}</p>
        </div>}
        
        <div>
          <MoreOutlined className="cursor-pointer font-bold text-lg" />
        </div>

        {isAnalytics && <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">{title}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "rgba(81, 19, 255, 1)"}}></div>
                <p className="text-xs">Students</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "rgba(129, 0, 190, 1)"}}></div>
                <p className="text-xs">Courses Sold</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "rgba(255, 95, 0, 1)"}}></div>
                <p className="text-xs">Net Revenue</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "#10535F"}}></div>
                <p className="text-xs">Refund</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "#893300"}}></div>
                <p className="text-xs">Feedback</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "#FFBD3E"}}></div>
                <p className="text-xs">Ratings</p>
              </div>
            </div>
        </div>}

        {isWallet && <div className="flex flex-col flex-wrap flex-shrink gap-2">
            <p className="font-bold text-lg">{title}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "rgba(81, 19, 255, 1)"}}></div>
                <p className="text-xs">Sale</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "rgba(129, 0, 190, 1)"}}></div>
                <p className="text-xs">Courses</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "rgba(255, 95, 0, 1)"}}></div>
                <p className="text-xs">Revenue</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="circle" style={{backgroundColor: "#10535F"}}></div>
                <p className="text-xs">Refund</p>
              </div>
            </div>
        </div>}

        {/* <div className="flex items-center gap-4 flex-wrap flex-shrink" >
          {!onlyShowMonths && <Select placeholder="Select Details" className='h-8 w-auto'>
            <Option value="Students">Students</Option>
            <Option value="Courses">Courses</Option>
            <Option value="Earnings">Earnings</Option>
          </Select>}

          <Select placeholder="Select Duration" className='h-8' onChange={(value) => handleGetAnaltyics(value)}>
           
            <Option value="month">Months</Option>
            <Option value="year">Years</Option> 
          </Select>

          {isAnalytics && (
            <Image src={Dcourse} alt='analtyics' style={{ height: 30, width: 30}} className='cursor-pointer' />
          )}
        </div> */}
      </div>
      <div style={{height:300, overflow: "hidden"}}>
        {!isDonut && <Line data={data} options={options} ref={chartRef} />}

        {isDonut && <Doughnut data={dataed} options={optionsed} ref={chartRef} />}

       
      </div>
      {isDonut && 
        <div className="flex justify-end" style={{marginTop: -80}}>
          <Button type="primary" className="justify-self-end rounded-[8px] !text-[#344054]" style={{height: 40, width: 135}}>View Full Report</Button>
        </div>
      }
    </div>
  )
}

export default DashboardGraph