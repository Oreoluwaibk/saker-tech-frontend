import React, { useState } from 'react';
import { Card, Button, Switch } from 'antd';
import {
  DeleteFilled,
  DownloadOutlined,
  EditOutlined,
  PlusOutlined,
  UploadOutlined,
  PlaySquareFilled,
  EyeOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import CreateContent from '@/components/modals/CreateContent';
import { Media } from '../../../../../assets/icons';
import UploadChapter from '@/components/modals/UploadChapter';


interface Chapter { 
  board: string;
  subject: string;
  class: string;
  chapter: string;
}
const Index = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [chapterLists, setChapterLists] = useState<Chapter[]>([
  ]);

  return (
    <DashboardContainer name="Create Content" activeKey="10.0">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: '#F6F6F6' },
          header: { backgroundColor: '#F6F6F6' },
        }}
        title={
          <div className="pt-5 pb-3 px-4">
            <p className="text-[30px] text-[#050505] font-semibold">Content</p>
            <p className="text-base text-[#616161] font-light">
              Manage and track lists of content
            </p>
          </div>
        }
        extra={
          <div className="flex gap-4">
            <Button
            onClick={()=>setIsCreateModalOpen(true)}
              type="primary"
              className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            >
              Create Content
            </Button>
          </div>
        }
      >
        {chapterLists.length === 0 ? (
          <div className="flex w-full flex-col items-center gap-1">
            <Image src={Media} alt="" />
            <div className="text-center">
              <h3 className="text-2xl">Get Started</h3>
              <p className="text-[#667085]">No Content available</p>
            </div>
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              type="primary"
              className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            >
              Create Content
            </Button>
          </div>
        ) : (
          <section className="flex items-center gap-2 flex-col w-full">
            {chapterLists.map((chapter, index) => (
              <div className="w-full p-4 flex flex-col gap-2" key={index}>
                <Card
                  title={`${chapter.chapter}: ${chapter.subject}`}
                  extra={
                    <div className="flex gap-2 items-center">
                      <Button className="!p-0 text-[#A4A4A4] !border-0 !shadow-none">
                        <DownloadOutlined />
                      </Button>
                      <Button className="!p-0 !border-0 !shadow-none">
                        <EditOutlined />
                      </Button>
                      <Button className="!p-0 !border-0 !shadow-none">
                        <DeleteFilled />
                      </Button>
                      <Switch
                        size="small"
                      />
                    </div>
                  }
                >
                  <Card
                    title={
                      <div className="flex gap-2 items-center">
                        <PlaySquareFilled />
                        <h3>{chapter.board}</h3>
                      </div>
                    }
                    styles={{
                      body: { display: 'none' },
                      header: { backgroundColor: '#FFFFFF' },
                    }}
                    extra={
                      <div className="flex gap-2 items-center">
                        <Button className="!p-0 text-[#A4A4A4] !border-0 !shadow-none">
                          <EyeOutlined />
                        </Button>
                        <Button className="!p-0 !border-0 !shadow-none">
                          <EditOutlined />
                        </Button>
                        <Button className="!p-0 !border-0 !shadow-none">
                          <DeleteFilled />
                        </Button>
                      </div>
                    }
                  />

                  <div className="flex items-center gap-2 mt-5">
                    <Button onClick={()=>setIsUploadModalOpen(true)} size="small" type="primary">
                      <UploadOutlined />
                    </Button>
                    <p className="text-[#FED500]">Upload Content</p>
                  </div>
                </Card>
              </div>
            ))}

            <Button
              icon={<PlusOutlined />}
              onClick={() => setIsCreateModalOpen(true)}
              type="primary"
              className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            >
              Add Chapter
            </Button>
          </section>
        )}
        <UploadChapter open={isUploadModalOpen} onClose={()=> setIsUploadModalOpen(false)} chapterTitle='Chapter one' onUpload={()=>{}}/>
        <CreateContent chapterLists={chapterLists} onAddChapter={setChapterLists}  open={isCreateModalOpen} onCancel={() => setIsCreateModalOpen(false)} />
      </Card>
    </DashboardContainer>
  );
};

export default Index;
