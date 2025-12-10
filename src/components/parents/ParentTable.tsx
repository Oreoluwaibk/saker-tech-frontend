import { Button, Card, Input, Pagination, PaginationProps, Select, Table } from 'antd'
import React, { ReactNode } from 'react';
import type { ColumnsType, TablePaginationConfig, TableProps } from 'antd/es/table';
import { AlignCenterOutlined, SearchOutlined } from '@ant-design/icons';


interface props {
    title: string;
    column: ColumnsType;
    data: TableProps["dataSource"];
    showFilter?: boolean;
    showExtra?: boolean;
    hidePagination?: boolean;
    border?: boolean;
    total?: number;
    filter?: {
        pageSize: number;
        pageNumber: number;
    }
    extra?: ReactNode;
}
const Option = Select.Option;
const ParentTable: React.FC<props> = ({
    title,
    data,
    column,
    showExtra,
    showFilter,
    hidePagination,
    border,
    total = 0,
    filter = {pageNumber: 0, pageSize: 0},
    extra
}) => {

    const tabBarExtras = (
        showExtra && <div className="flex items-center gap-4 py-4">
        <Input 
            prefix={<SearchOutlined />}
            placeholder='Search...'
            style={{height: 38, width: 146, backgroundColor: "#F4F4F4", border: "none"}}
        />

        {showFilter && <Select placeholder="All status" className='yellow_style' style={{height: 38, width: 155, backgroundColor: "#FED500", border: "none"}} prefix={<AlignCenterOutlined rotate={180}/>}>
            <Option>January</Option>
        </Select>}
        </div>
    )

    const itemRender: PaginationProps["itemRender"] = (_, type, originalElement) => {
        if(type === "prev")return <div className='flex justify-start'><Button className='!border-[#D0D5DD] !h-8'>Previous</Button></div>
        if(type === "next")return <div className='flex justify-end'><Button className='!border-[#D0D5DD] !h-8'>Next</Button></div>
        return originalElement
    }

    const handlePagination = (page: number, size: number) =>  {
        
    }
  return (
    <Card
        title={title && <p className='text-xl font-semibold text-[#0E0B0A]'>{title}</p>}
        extra={extra || tabBarExtras}
    >
        <Table 
            dataSource={data}
            columns={column}
            className='border border-[#EAECF0] rounded-lg shadow-md'
            pagination={false}
            bordered={border}
        />
        {!hidePagination && <Pagination 
            responsive
            itemRender={itemRender}
            align="center"
            current={filter.pageNumber}
            total={total}
            pageSize={filter.pageSize}
            className="border-t border-t-[#eaecf0] !pt-4 !w-full custom"
            showTotal={(total) =>
                `Page ${filter.pageNumber} of ${Math.ceil(total / (filter.pageSize || 1))}`
            }
            onChange={handlePagination}
        />}
    </Card>
  )
}

export default ParentTable