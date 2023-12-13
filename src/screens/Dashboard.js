import React from "react";
import Header from '../components/Header'
import { Typography, Carousel } from "@material-tailwind/react";
import { About } from "../components/About";
import { ActivitiesTimeline } from "../components/ActivitiesTimeline";
import { FooterWithSitemap } from "../components/FooterWithSitemap";

const Dashboard = () => {
  return (
    <div className="max-h-[768px] w-full">
      <Header />
      <div className="py-3 px-2">
        <div className="w-full" style={{ height: "600px" }}>
          <Carousel loop autoplay className="rounded-xl">
            <div className="relative h-full w-full">
              <img
                src="https://content.presentermedia.com/content/clipart/00006000/6641/sales_transaction_colored_800_wht.jpg"
                alt="image1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    WHY BLOCKCHAIN-BASED PAYMENT AND SETTLEMENT SYSTEM?
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    The rise of distributed ledger technology (DLT), or
                    blockchain, offers the financial services industry
                    transformational opportunities to reduce process complexity,
                    lower costs and increase transparency. It will also promote
                    innovation, deepen customer relationships and allow risk to
                    be more accurately priced
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://th.bing.com/th/id/R.d555178e35032773284af3ef7ef1b677?rik=EjSQDjesg7dTww&pid=ImgRaw&r=0"
                alt="image2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    BLOCKCHAIN
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    A blockchain is a distributed database or ledger shared
                    among a computer network's nodes. It stores data in blocks
                    linked together via cryptography and allows transactions to
                    be verified and recorded
                  </Typography>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <img
                src="https://payflex.co.za/wp-content/uploads/2021/12/How-To-Make-Your-Payment-Gateway-Work-Harder-in-2022-02.png"
                alt="image3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    BLOCKCHAIN SECURITY BATCH OVERVIEW
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    Blockchain security is a comprehensive risk management
                    system for a blockchain network, using cybersecurity
                    frameworks, assurance services and best practices to reduce
                    risks against attacks and fraud
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div
          className=" border-b-1 border-gray-400 flex flex-col items-center justify-start pt-10"
          style={{ height: "400px" }}
        >
          <div className="flex items-start px-20 gap-20 text-center">
            <About />
            <ActivitiesTimeline />
          </div>
        </div>

        <FooterWithSitemap />
      </div>
    </div>
  );
};

export default Dashboard;
