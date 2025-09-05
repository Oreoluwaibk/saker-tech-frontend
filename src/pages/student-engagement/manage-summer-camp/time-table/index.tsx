"use client";

import DashboardContainer from "@/components/dashboard/DashboardContainer";
import React, { useState } from "react";
import { Button, Card, Segmented } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

// Event type
type TimetableEvent = {
  id: number;
  title: string; // Subject
  teacher: string;
  description: string;
  start: string; // "08:00"
  end: string;   // "10:00"
  color: string;
};

const TimetablePage = () => {
  const [view, setView] = useState("Day");

  const [events] = useState<TimetableEvent[]>([
    {
      id: 1,
      title: "Mathematics Class",
      teacher: "Mr Tochi",
      description: "In today's class, we will be solving on the topic Fraction",
      start: "08:00",
      end: "10:00",
      color: "#D9E9FF",
    },
    {
      id: 2,
      title: "English Language Class",
      teacher: "Miss Gbemisola",
      description:
        "In today's class, we will be solving on the topic Adjective",
      start: "11:30",
      end: "14:00",
      color: "#FFF7D6",
    },
  ]);

  // Time slots from 6AM to 7PM
  const hours = Array.from({ length: 14 }, (_, i) => 6 + i);

  // Convert "HH:mm" → number of minutes since 00:00
  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  return (
    <DashboardContainer name="Manage Timetable" activeKey="25.3">
      <Card
        variant="borderless"
        styles={{
          body: { backgroundColor: "#F6F6F6" },
          header: { backgroundColor: "#f6f6f6" },
        }}
        title={
          <div className="pt-5 pb-3 px-4 flex flex-col gap-3">
            <p className="text-[30px] text-[#050505] font-semibold">
              TimeTable
            </p>
            <p className="text-base text-[#616161] font-light">
              Manage and Monitor Timetable
            </p>
          </div>
        }
        extra={
          <Button
            type="primary"
            className="!h-[54px] !w-[160px] !text-[#3E444C] !rounded-[5px] !font-semibold"
            icon={<PlusOutlined />}
          >
            Create Class
          </Button>
        }
      >
        <Card
          variant="outlined"
          extra={
            <Segmented
              options={["Day", "Week", "Month", "Agenda"]}
              value={view}
              onChange={(val) => setView(val as string)}
              className="!bg-transparent [&>.ant-segmented-item-selected]:!bg-[#FED500]"
            />
          }
        >
          {/* Timetable container */}
          <div className="grid grid-cols-[100px_1fr] relative border-t border-l">
            {/* Left column with hours */}
            <div className="flex flex-col">
              {hours.map((h) => (
                <div
                  key={h}
                  className="h-[60px] border-b border-r px-2 text-xs flex items-start justify-end text-[#616161]"
                >
                  {dayjs().hour(h).minute(0).format("h:mm A")}
                </div>
              ))}
            </div>

            {/* Right column with events */}
            <div className="relative border-r">
              {hours.map((h) => (
                <div
                  key={h}
                  className="h-[60px] border-b border-gray-200"
                ></div>
              ))}

              {/* Render events */}
              {events.map((event) => {
                const startMins = toMinutes(event.start);
                const endMins = toMinutes(event.end);
                const top = ((startMins - 360) / 60) * 60; // 6:00 = 360 mins
                const height = ((endMins - startMins) / 60) * 60;

                return (
                  <div
                    key={event.id}
                    className="absolute left-2 right-2 rounded-md shadow-md p-2 border"
                    style={{
                      top,
                      height,
                      background: event.color,
                    }}
                  >
                    <p className="font-semibold m-0">{event.teacher}</p>
                    <p className="text-sm m-0">{event.title}</p>
                    <p className="text-xs text-[#616161] truncate m-0">
                      {event.description}
                    </p>
                    <p className="text-xs font-medium text-[#3E444C] m-0">
                      {event.start} - {event.end}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </Card>
    </DashboardContainer>
  );
};

export default TimetablePage;
