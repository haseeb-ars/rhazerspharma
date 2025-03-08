const ServiceTab=({color,label,t1,t2,textcol,imgsrc} )=>{
    console.log(color)
    return<>
     <div className={`lg:h-[70%] h-[18%] w-[92%]   lg:w-[17%] ${color} ${textcol} rounded-xl  shadow-md flex flex-col items-center sm:justify-around lg:justify-between overflow-hidden   lg:p-4`}>
    <div className=" bg-lack w-full h-[50%] flex justify-center items-center">  
          <img src={imgsrc} alt="Import Icon" className="lg:w-13 w-12 h-11 lg:h-13 " /> </div>
          <div className=" flex justify-center items-center   w-full h-[40%]">
        <div className="  bg-whte lg:w-full w-[70%] font-normal text-wrap  lg:text-xl text-md"> {label}</div>
    </div>
    </div>
   
   

    </>
}
export default ServiceTab