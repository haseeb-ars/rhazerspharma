const Services_b=({color,label,t1,t2,textcol,imgsrc,text})=>{
return <>
    
    <div className="lg:h-[30%]  h-[22%] w-full flex mb-3  lg:flex-row justify-around  flex-col  ">
                <div className="lg:flex-1 sm:flex-3 b-black  p-3 m-5 rounded-2xl h-full   flex justify-center items-center">
                
            <div className={` lg:w-[70%] lg:h-[100%] w-[95%] h-[76%] rounded-2xl  ${color}`}>
                       <div className="  w-full h-[50%] flex justify-center items-center">  
                        <img src={imgsrc} alt="Import Icon" className="w-17  sm:w-10 sm:h-10 h-17 " /> 
                        
                        </div>

                        <div className="  w-full flex justify-center items-center  ">
                           <span className="  w-[100%]  text-center text-white font-bold   lg:text-lg text-2xl"> {label}</span>
                          </div>
       

            </div>
                
                </div>
                <div className=" lg:flex-3  m-5 sm:h-[50%] lg:h-[100%]   items-center flex justify-center  ">
                  <p className=" w-[90%]  h-[100%] lg:text-left  sm:text-center sm:overflow-auto flex justify-center text-wrap items-center ">
                    {text}
                  </p>
                </div>
          </div>

</>
}
export default Services_b