import ParentDashboard from '@/components/dashboard/ParentDashboard'
import { Button, Card, Form, Select } from 'antd'

const FormItem = Form.Item;
const index = () => {
  return (
  <ParentDashboard name='Student Bonafide Certificate' activeKey='6.31'>
    <Card
      variant="borderless"
      styles={{body: {backgroundColor: "", paddingTop: 50}, header: {backgroundColor: "#f6f6f6"}}}
      title={<div className='pt-5 pb-3 px-4'>
        <p className='text-[30px] text-[#050505] font-semibold'>Student Bonafide Certificate</p>
      </div>}

      actions={[
        <div key={1} className='flex items-center justify-end gap-6'>
          <Button type="default" className='!h-[48px] !min-w-[95px] !text-[#3E444C] !rounded-[5px] !font-semibold' >Reset</Button>
          <Button type="primary" className='!h-[48px] !min-w-[95px] !text-[#3E444C] !rounded-[5px] !font-semibold' >Generate</Button>
        </div>
      ]}
    >
      <div>
        <Form layout="vertical">
          <FormItem label="Session Year" className='w-1/2'>
            <Select placeholder="Select Session Year">
              <Select.Option>2025 To 2026</Select.Option>
              <Select.Option>2024 To 2025</Select.Option>
            </Select>
          </FormItem>
        </Form>
      </div>
    </Card>
  </ParentDashboard>
  )
}

export default index