"use client";
import { useState } from "react";
export default function Contact() {
  const [name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [message,setmessage]=useState("")
  const [responseMessage, setResponseMessage] = useState('');
  const Submit=async(Email_s,name_s)=>{
    // const formData={
    //   name,Email,message
    // }
    // try {
    //   const res = await fetch('../api/Contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();

    //   if (res.ok) {
    //     setResponseMessage(data.message);
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     setResponseMessage(data.error || 'Something went wrong');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   setResponseMessage('Something went wrong');
    // }
  }
  return (
    <>
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center">
        <div className=" flex flex-col justify-around items-center    overflow-hidden w-[80%] h-[90%] rounded-tl-[180px] rounded-tr-[0px] rounded-br-[180px] rounded-bl-[0px] bg-[#79be9b] p-4">
          <div className="w-full flex-1 flex items-center justify-center text-4xl font-black   text-[#228B22] ">
            Contact Us
          </div>
          <div className="flex justify-around items-center gap-2 w-[100%] lg:w-[80%] flex-2 ">
            <input
              className=" lg:w-[40%] w-[50%]  lg:h-[33%] h-[23%] font-bold pl-3 bg-white rounded-2xl border-none outline-none "
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Name"
            ></input>
            <input
              className=" lg:w-[40%]  w-[50%] lg:h-[33%] h-[23%] font-bold pl-3 bg-white rounded-2xl border-none outline-none "
              value={Email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="Email"
            ></input>
          </div>
          <div className="lg:w-[80%] w-[100%] flex-2 ">
            <textarea
              className=" pl-3 rounded-2xl font-bold bg-white w-full h-full text-black border-none outline-none"
              placeholder="Enter Message"
              onChange={(e)=>{
                setmessage(e.target.value)
              }}
            ></textarea>
          </div>
          <div className=" w-[80%] flex-1 bg- flex  items-end justify-center lg:justify-end ">
            <button onClick={(e)=>{
               e.preventDefault();
                Submit(Email,name)
            }} className=" bg-[#228B22] h-[60%] rounded-2xl w-[54%] lg:w-[14%] text-black text-2xl font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
