const ServiceTab=({color,label,t1,t2,textcol,imgsrc} )=>{
    console.log(color)
    return<>
     <div className={`lg:h-[80%] h-[19%] w-[92%]   lg:w-[19%] ${color} ${textcol} rounded-xl  shadow-md flex flex-col items-center sm:justify-around lg:justify-between overflow-hidden   lg:p-4`}>
    <div className="  w-full h-[50%] flex justify-center items-center">  
          <img src={imgsrc} alt="Import Icon" className="lg:w-13 w-10 h-10 lg:h-13 " /> </div>
          <div className="  w-full h-[40%]">
        <span className="  w-full   lg:text-xl text-sm"> {label}</span>
    </div>
    </div>
   
   

    </>
}
export default ServiceTab