import CardTitle from '@/components/general/CardTitle';
import Info from '@/components/general/Info';
import Status from '@/components/general/Status';
import { ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Modal } from 'antd';
import React from 'react'

interface props {
    open: boolean;
    onCancel: () => void;
}
const UpcomingModal: React.FC<props> = ({
    open,
    onCancel
}) => {
  return (
    <Modal
        title={
            <CardTitle 
                title='Student Activity Fee'
                description="Detailed information and payment options"
                status={<Status color='#FFC553' bg="#FFFCF5" title='Pending Clearance' />}
            />
        }
        open={open}
        onCancel={onCancel}
        closeIcon={<CloseCircleOutlined />}
        footer={
            <div className='flex items-center gap-6 justify-end'>
                <Button  
                    type="default" 
                    className='!text-[#3E444C] !font-bold' 
                    style={{height: 48, minWidth: 107, borderRadius: 5}}>
                        Cancel
                </Button>
                <Button 
                    type="primary" 
                    className='!text-[#3E444C] !font-bold' 
                    style={{height: 48, minWidth: 107, borderRadius: 5}}>
                        Pay Now 
                </Button>
            </div>
        }
        width={900}
        styles={{body: {marginTop: 20}}}
        classNames={{ body: "px-4!", header: "px-4!"}}
    >
        <div>
            <Info title='This fee requires immediate payment to avoid late charges.' />

            <div className='flex items-center gap-[25%] text-xl text-[#2E2E2E] mt-6'>
                <p>Amount: $432</p>
                <p>Due: Sept 20, 2025</p>
            </div>

            <Divider  />

            <div>
                <p className='text-[#2E2E2E] font-medium text-xl'>Fee Details</p>

                <div className='grid grid-cols-3 gap-4 text-[#2E2E2E] mt-3'>
                    <div>
                        <p>Reference Number:</p>
                        <p>REF-1-2024</p>
                    </div>
                    <div>
                        <p>Academic Year:</p>
                        <p>2023-2024</p>
                    </div>
                    <div>
                        <p>Semester:</p>
                        <p>Spring</p>
                    </div>
                    <div>
                        <p>Class:</p>
                        <p>Class 1</p>
                    </div>
                    <div>
                        <p>Student ID:</p>
                        <p>CS2024001</p>
                    </div>
                </div>
            </div>

            <Divider />

            <div className='flex flex-col gap-4 text-[#2E2E2E] '>
                <p className='font-medium text-xl'>Description</p>

                <p className='text-lg'>Campus activities and events</p>
            </div>

            <Divider />

            <div className='flex flex-col gap-2 text-[#2E2E2E] mb-6'>
                <p className='font-medium text-xl'>Payment Information</p>

                <p className='text-lg'>Payment Methods:</p>

                <div className='flex items-center gap-4'>
                    <Button 
                        className='h-[35px]! w-[109px]! border-[#535353]! rounded-full! bg-[#fafafa]! hover:text-[#6E6B6B]! text-[#6E6B6B]'  
                        type="default">
                            Credit Card
                    </Button>

                    <Button 
                        className='h-[35px]! w-[109px]! border-[#535353]! rounded-full! bg-[#fafafa]! hover:text-[#6E6B6B]! text-[#6E6B6B]'  
                        type="default">
                            Bank Transfer
                    </Button>
                </div>
            </div>
            <Info 
                title='Payment received and under verification. Processing time: 3-5 business days.' 
                icon={<ClockCircleOutlined className='text-[#3E444C]' />}
            />
            <div className='mb-7'></div>
        </div>
    </Modal>
  )
}

export default UpcomingModal