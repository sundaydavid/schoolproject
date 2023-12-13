import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
  } from "@material-tailwind/react";
  import { MapPinIcon, PhoneIcon, InboxIcon } from "@heroicons/react/24/solid";
  
  export const ActivitiesTimeline = () => {
    return (
      <div className="w-2/4">
        <Typography className="text-2xl underline">Contact Us</Typography>
        <Timeline>
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost">
                <InboxIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1 justify-start">
                <Typography variant="h6" color="blue-gray">
                  Email Address
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  info@blockchaintransactionsystem.com
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem className="h-28">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="red">
                <PhoneIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  Phone Number
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  +234 9079029135
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
          <TimelineItem className="h-28">
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <MapPinIcon className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography variant="h6" color="blue-gray">
                  Address
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Atani, Ogbaru L.G.A
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </div>
    );
  };
  