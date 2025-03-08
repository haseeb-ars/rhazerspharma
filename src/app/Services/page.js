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
                  appeartime='0.5'
                  />
    <ServiceTab color="bg-[#005450]" 
                 label="Wholesale Distribution Authorisations"  
                 textcol="text-white"
                 imgsrc="cloud-computing.svg"
                 appeartime='1'
                  />
    <ServiceTab color="bg-[#2E987D]" 
                 label="Import & Export"     
                 textcol="text-white"
                 imgsrc="vercel.svg"
                 appeartime='1.5'
                  />
    <ServiceTab color="bg-[#AACD70]" 
                 label="Import & Export"
                
                 textcol="text-[#005450]"
                 imgsrc="globe.svg"
                 appeartime='2'
                  />
    <ServiceTab color="bg-blue-100" 
                 label="Import & Export"
                 t1="Global trade facilitation."
                 t2="Seamless logistics solutions."
                 textcol="text-[#002725]"
                 imgsrc="https://img.icons8.com/ios-filled/50/00000/import.png"
                 appeartime='2.5'
                  />

      </div>

      
    <div className=" bg-blac mt-20 lg:h-[180vh] h-[300vh] flex flex-col gap-1 mb-10 lg:gap-1.5 justify-center items-center w-full -black">
          <Services_b
          color="bg-black" 
          label="Infrastructure Design & Development"
          textcol="text-white"
           imgsrc="infrastructure.svg"
           text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
         
          <Services_b 
          color="bg-[#002725]" 
          label="Wholesale Distribution Authorisations"
         
          textcol="text-white"
          imgsrc="cloud-computing.svg"
          text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
          <Services_b
          color="bg-[#005450]" 
          label="Import & Export"
       
          textcol="text-white"
          imgsrc="vercel.svg"
          text="Your physical infrastructure is integral to your quality management system. Whether building your own facility or outsourcing your activities, our experienced project managers ensure that Good Manufacturing and Distribution (GMDP) requirements are built in from the outset and integrated into your process ready for inspection, optimising time to market. Please see our previous project page."

          />
          <Services_b 
          color="bg-[#AACD70]" 
          label="Import & Export"
         
          textcol="text-black"
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
  