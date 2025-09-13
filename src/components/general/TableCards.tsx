import { ColumnsType } from 'antd/es/table';
import React, { ReactNode } from 'react';
import DashboardContainer from '@/components/dashboard/DashboardContainer'
import { Card, Input, Select, Table } from 'antd';
import { AlignCenterOutlined, SearchOutlined } from '@ant-design/icons';

interface TablecardProps {
  name: string;
  activeKey: string;
  title: string;
  description: string;
  extra: ReactNode;
  column: ColumnsType;
  dataSource: any;
  showFilter?: boolean;
  titleFilter?: ReactNode;
  subtitle?: string;
  notTable?: boolean;
  field?: ReactNode;
}

const Option = Select.Option;
const TableCards = ({
  name,
  activeKey,
  title,
  description,
  extra,
  column,
  dataSource,
  showFilter,
  titleFilter,
  subtitle,
  notTable,
  field
}: TablecardProps) => {
  const tabBarExtras = (
    <div className="flex items-center gap-4 py-4">
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

  return (
    <DashboardContainer name={name} activeKey={activeKey}>
      <Card
        variant="borderless"
        styles={{body: {backgroundColor: "#F6F6F6"}, header: {backgroundColor: "#f6f6f6"}}}
        title={<div className='pt-5 pb-3 px-4'>
          <p className='text-[30px] text-[#050505] font-semibold'>{title}</p>
          <p className='text-base text-[#616161] font-light'>{description}</p>
          {titleFilter}
        </div>}
        extra={extra}
      >
        <Card variant="outlined" extra={!notTable && tabBarExtras} title={titleFilter &&<p className='text-[24px] text-[#050505] font-semibold'>{subtitle}</p>}>
          {!notTable && <Table 
            columns={column}
            dataSource={dataSource}
            style={{ overflowX: "scroll"}}
            className='table-display'
            // locale={{
            //     emptyText: () => (
            //         <EmptyComponent 
            //             title='No Course Created yet'
            //             description='Click on the button below to create a course'
            //             buttonTitle='Create Course'
            //             // image={<Image alt='empty image' src={CourseEmpty} />}
            //             // icon={<PlusOutlined />}
            //             // onClick={onClick}
            //         />
            //     )
            // }}
          />}
          {notTable && field}
        </Card>
      </Card>
    </DashboardContainer>
  )
}

export default TableCards