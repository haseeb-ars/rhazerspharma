"use client";
import Link from "next/link";
import "../styles/globals.css";
import ServiceTab from "@/Components/ServicesTab";
export default function Home() {
  return (
    <>
      <div className="  w-[100%] bgblack lg:h-[100vh] h-[80vh] relative overflow-hidden  ">
        <svg
          className="  absolute top-50 left-[-30]"
          width="70"
          height="70"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_221_10)">
            <path
              d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
              fill="#228b22  "
            />{" "}
            {/* Change this to your desired color */}
          </g>
          <defs>
            <clipPath id="clip0_221_10">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className=" absolute top-5 left-4"
          width="70"
          height="70"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_221_10)">
            <path
              d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z"
              fill="#228b22  "
            />{" "}
            {/* Change this to your desired color */}
          </g>
          <defs>
            <clipPath id="clip0_221_10">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className="absolute lg:top-0 lg:left-120 top-30 left-40 w-122 h-122 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-130 lg:h-130"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(248, 117, 55, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(251, 168, 31, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M20.5,-25.4C26.2,-19.7,30.1,-12.9,33.5,-4.3C36.9,4.2,39.8,14.5,36.2,21.1C32.6,27.7,22.4,30.6,13.2,32.3C4,33.9,-4.3,34.1,-12,31.8C-19.8,29.5,-27.1,24.7,-30.2,18.1C-33.2,11.5,-31.9,3,-31.1,-6.2C-30.3,-15.4,-30,-25.4,-24.9,-31.2C-19.8,-37,-9.9,-38.6,-1.2,-37.1C7.4,-35.7,14.9,-31.1,20.5,-25.4Z"
            transform="translate(50 50)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}
          ></path>
        </svg>

        <h1 className=" lg:block hidden text-left sm:m-4 lg:m-0 text-8xl  lg:left-0  lg:text-8xl absolute top-56 lg:top-25  animate-moveRight">
          Welcome to <br /> my site
        </h1>
        <h1 className=" sm:block lg:hidden text-left sm:m-4 lg:m-0 text-8xl left-[-10] lg:left-0  lg:text-8xl absolute top-56 lg:top-25  animate-moveRightsm">
          Welcome to <br /> my site
        </h1>
      </div>
      <div className="relative w-full lg:h-[140vh] h-[80vh] bg-lack mt-9">
        <img src="Fseond.png" className=" relative overflow-hidden"></img>
        <div className=" text-5xl w-full text-center absolute lg:top-[50] top-[0]">
          <h1 className=" font-bold tracking-wide">
            We are not your tipical CBPM <br />
            Consultancy
          </h1>
        </div>

        <div className=" b absolute  lg:top-[90] top-[200] right-0 w-full h-[50%] lg:h-full flex justify-center lg:flex-row flex-col ">
          <div className=" w-full h-fit mt-5.5 g-black">
            <img src="next.svg" className=" lg:p-20 p-20 lg:mt-25"></img>
          </div>
          <div className=" lg:mt-30 mt-0  w-full h-full ">
            <img src="Fsecond_pic.jpg" className="lg:p-10 p-5"></img>
          </div>
        </div>
      </div>


      <div className="w-[100%]  h-[100vh] ">
        <div className="lg:m-0  sm:m-10">
          <div className=" w-full mt-5 mb-5 flex justify-center">
            <h1 className=" text-5xl font-bold mt-6"> Our Services</h1>
          </div>
          <div className=" m-10 mb-0 bg-blk  lg:h-[70vh] h-[80vh] flex lg:flex-row flex-col gap-0.5  items-center justify-around sm:flex-row text-center font-black">
            <ServiceTab
              color="bg-blue-600"
              label="Infrastructure Design & Development"
              textcol="text-white"
              imgsrc="infrastructure.svg"
            />
            <ServiceTab
              color="bg-gray-800"
              label="Wholesale Distribution Authorisations"
              textcol="text-white"
              imgsrc="cloud-computing.svg"
            />
            <ServiceTab
              color="bg-gray-500"
              label="Import & Export"
              textcol="text-white"
              imgsrc="vercel.svg"
            />
            <ServiceTab
              color="bg-gray-300"
              label="Import & Export"
              textcol="text-gray-900"
              imgsrc="globe.svg"
            />
            <ServiceTab
              color="bg-blue-100"
              label="Import & Export"
              t1="Global trade facilitation."
              t2="Seamless logistics solutions."
              textcol="text-blue-900"
              imgsrc="https://img.icons8.com/ios-filled/50/FFFFFF/import.png"
            />
           
          </div>
               <div className=" w-full bg-blac flex justify-center items-center">
                <Link href="/Services" className=" text-black text-xl mt-3 sm:mt-0 font-bold text-center">list all {">"}</Link>

               </div>
        </div>
      </div>


      <div className="w-full flex  justify-center items-center 5 h-[100vh] ">
         <div className=" flex  lg:flex-row flex-col justify-around gap-10 w-[80%] bg-white h-[95%]">
              <div className="flex-1 flex-col flex justify-center gap-1 h-full bg-blck">
                      <div className=" flex justify-center font-bold   text-6xl text-[#228B22] flex-1  bg-blak">
                       <h1> Why Canna Strategy? </h1>
                      </div>
                      <div className="flex-3 text-2xl text-left flex justify-center items-center bg-green-">
                          <p>
                          We believe in the value of systems that ensure continuous improvement, working collaboratively with regulators and healthcare practitioners, and putting patient (customer) needs at the centre of our work.
                          <br/>
                          <br />
                          With our ability to offer a range of strategic solutions suitable for various stages of businesses development, we aim to provide a comprehensive service and develop long-lasting partnerships, working with our clients to add real and measurable value at each step. 
                          </p>
                      </div>
              </div>
              <div className="flex-1 flex justify-center items-center h-full bg-blck">
              <img src="next.svg"/>
              </div>
         </div>
      </div>
    </>
  );
}
