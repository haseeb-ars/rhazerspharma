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
     <div className=" m-10  lg:h-[70vh] h-[80vh] flex lg:flex-row flex-col gap-0.5  items-center justify-around sm:flex-row text-center font-black">
     
     <ServiceTab color="bg-blue-600" 
                 label="Infrastructure Design & Development"
               
                 textcol="text-white"
                  imgsrc="infrastructure.svg"
                  />
    <ServiceTab color="bg-gray-800" 
                 label="Wholesale Distribution Authorisations"
                
                 textcol="text-white"
                 imgsrc="cloud-computing.svg"
                  />
    <ServiceTab color="bg-gray-500" 
                 label="Import & Export"
              
                 textcol="text-white"
                 imgsrc="vercel.svg"
                  />
    <ServiceTab color="bg-gray-300" 
                 label="Import & Export"
                
                 textcol="text-gray-900"
                 imgsrc="globe.svg"
                  />
    <ServiceTab color="bg-blue-100" 
                 label="Import & Export"
                 t1="Global trade facilitation."
                 t2="Seamless logistics solutions."
                 textcol="text-blue-900"
                 imgsrc="https://img.icons8.com/ios-filled/50/FFFFFF/import.png"
                  />

      </div>

      
    <div className=" lg:h-[100vh] h-[300vh]  w-full b-black">
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
  