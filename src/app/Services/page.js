"use client";
import Link from "next/link";
import ServiceTab from "../../Components/ServicesTab"
import Services_b from "@/Components/Services_b";
export default function Services() {
    return <>
<div className="w-full bgblack  ">
          <div className=" w-full mt-5 mb-5 flex justify-center">
           <h1 className=" text-5xl font-bold mt-6"> Our Services</h1>
           </div>
     <div className="b-black m-10 mr-10 ml-10 lg:mr-25 lg:ml-25 sm:mb-5  lg:h-[70vh] h-[90vh] flex lg:flex-row flex-col gap-5 lg:gap-0.5  items-center justify-around sm:flex-row text-center font-black">
     
     <ServiceTab color="bg-[#002725]" 
                 label="Infrastructure Design &
                  Development"
               
                 textcol="text-white"
                  imgsrc="infrastructure.svg"
                  />
    <ServiceTab color="bg-[#005450]" 
                 label="Wholesale Distribution Authorisations"  
                 textcol="text-white"
                 imgsrc="cloud-computing.svg"
                  />
    <ServiceTab color="bg-[#2E987D]" 
                 label="Import & Export"     
                 textcol="text-white"
                 imgsrc="vercel.svg"
                  />
    <ServiceTab color="bg-[#AACD70]" 
                 label="Import & Export"
                
                 textcol="text-[#005450]"
                 imgsrc="globe.svg"
                  />
    <ServiceTab color="bg-blue-100" 
                 label="Import & Export"
                 t1="Global trade facilitation."
                 t2="Seamless logistics solutions."
                 textcol="text-[#002725]"
                 imgsrc="https://img.icons8.com/ios-filled/50/00000/import.png"
                  />

      </div>

      
    <div className=" mt-15 lg:h-[180vh] h-[330vh] flex flex-col gap-5 mb-10 lg:gap-1.5 justify-center items-center w-full -black">
          <Services_b
          color="bg-blue-600" 
          label="Infrastructure Design & Development"
          textcol="text-white"
           imgsrc="infrastructure.svg"
           text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
         
          <Services_b 
          color="bg-gray-800" 
          label="Wholesale Distribution Authorisations"
         
          textcol="text-white"
          imgsrc="cloud-computing.svg"
          text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
          <Services_b
          color="bg-gray-500" 
          label="Import & Export"
       
          textcol="text-white"
          imgsrc="vercel.svg"
          text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
          <Services_b 
          color="bg-gray-300" 
          label="Import & Export"
         
          textcol="text-gray-900"
          imgsrc="globe.svg"
          text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
          <Services_b 
          color="bg-blue-100" 
          label="Import & Export"
          t1="Global trade facilitation."
          t2="Seamless logistics solutions."
          textcol="text-blue-900"
          imgsrc="https://img.icons8.com/ios-filled/50/FFFFFF/import.png"
          text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."
          />
          

    </div>
 
 </div>
    

    </>;
  }
  