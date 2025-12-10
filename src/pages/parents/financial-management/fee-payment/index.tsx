import ParentDashboard from '@/components/dashboard/ParentDashboard'
import Selector from '@/components/general/Selector';
import ParentTable from '@/components/parents/ParentTable';
import { Button, Card, Divider, TableProps } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'

const index = () => {
  const [ selected, setSelected ] = useState("Make Payment");
  const [ data, setData ] = useState<TableProps["dataSource"]>([]);

  const column: ColumnsType = [
    {
      key: "1",
      title: "S/N",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Month Name",
      dataIndex: "price",
      hidden: selected !== "Make Payment"
    },
    {
      key: "3",
      title: "Fee Header",
      dataIndex: "instructor",
      hidden: selected !== "Make Payment"
    },
    {
      key: "4",
      title: "Concession",
      dataIndex: "numofstudents",
      hidden: selected !== "Make Payment"
    },
    {
      key: "5",
      title: "Fee Amount",
      dataIndex: "createdAt",
      hidden: selected !== "Make Payment"
    },
    {
      key: "6",
      title: "Net Amount",
      dataIndex: "duration",
      hidden: selected !== "Make Payment"
    },
    {
      key: "7",
      title: "Late Fee",
      dataIndex: "duration",
      hidden: selected !== "Make Payment"
    },
    {
      key: "8",
      title: "Pay Status",
      dataIndex: "duration",
      hidden: selected !== "Make Payment"
    },
    {
      key: "9",
      title: "Pay Amount",
      dataIndex: "duration",
      hidden: selected !== "Make Payment"
    },
    {
      key: "10",
      title: "Balance",
      dataIndex: "duration",
      hidden: selected !== "Make Payment"
    },
    {
      key: "11",
      title: "Transaction ID",
      dataIndex: "duration",
      hidden: selected === "Make Payment"
    },
    {
      key: "12",
      title: "Receipt No.",
      dataIndex: "duration",
      hidden: selected === "Make Payment"
    },
    {
      key: "13",
      title: "Receipt Date",
      dataIndex: "duration",
      hidden: selected === "Make Payment"
    },
    {
      key: "14",
      title: "Payment Mode",
      dataIndex: "duration",
      hidden: selected === "Make Payment"
    },
    {
      key: "14",
      title: "View Recript",
      dataIndex: "duration",
      hidden: selected === "Make Payment"
    },
  ]
  return (
  <ParentDashboard name='Fee Payment' activeKey='5.1'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Fee Payment</p>
      </div>}
    >
      <div className='flex items-center gap-4'>
        <Selector 
          title='Make Payment'
          selected={selected === "Make Payment"}
          onclick={() => setSelected("Make Payment")}
        />

        <Selector 
          title='Transactions'
          selected={selected === "Transactions"}
          onclick={() => setSelected("Transactions")}
        />
      </div>
      <Divider />
      <div>
        <ParentTable 
          title=""
          data={data}
          column={column}
        />
      </div>

      {selected === "Make Payment" && <div className='relative w-full flex items-center gap-6 bg-white rounded-xl px-6 py-5 mt-4'>
        <p><span className='font-medium'>Amount to be paid:</span> $8</p>
        <p><span className='font-medium'>Date:</span> 16-10-2025</p>

        <Button 
          type="primary" 
          className='absolute left-[60%] block text-[#0E0E0E]! font-medium'>
            Make Payment
        </Button>
      </div>}
    </Card>
  </ParentDashboard>
  )
}

export default index