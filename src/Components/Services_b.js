const Services_b=({color,label,t1,t2,textcol,imgsrc,text})=>{
return <>
    
    <div className="bg-white h-[100%] w-[88%] flex  lg:flex-row flex-col gap-0 lg:gap-3.5 ">
            <div className="flex-1 bg-blak flex justify-center items-center  ">
                <div className={`${color} ${textcol} overflow-hidden lg:w-[70%] lg:h-[90%] w-[80%] h-[100%] flex flex-col justify-center items-center text-center  gap-0 rounded-2xl`}>
                    <div className=" w-full h-full object-cover bg-bl flex justify-center items-center  flex-1  overflow-hidden  ">
                        <img src={imgsrc} className="  w-[25%] object-cover flex justify-center items-center "/>
                    </div>
                    <div className=" text-xl font-bold flex justify-center items-center text-center flex-1 w-full ">
                        <span >{label}</span>
                        </div> 
                </div>
            </div>

            <div className="lg:flex-3 flex justify-center items-center flex-2 -black">
               <p className=" lg:w-full w-[90%] ">
                {text}
               </p>
            </div>
    </div>

</>
}
export default Services_b