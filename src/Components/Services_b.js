import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef,useState,useEffect } from "react";

const Services_b=({color,label,t1,t2,textcol,imgsrc,text})=>{
    const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-10% 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true); // Set a flag to prevent re-animation
    }
  }, [isInView]);
return <>
    
    <motion.div
     ref={ref}
     initial={{ opacity: 0, x: -100 }} // Start hidden and offscreen
     animate={hasAnimated ? { opacity: 1, x: 0 } : {}} // Animate only once
     transition={{ duration: 0.5, ease: "easeOut" }}
    
    
    className="bg-white h-[100%] w-[90%] lg:w-[88%] flex  lg:flex-row flex-col gap-0 lg:gap-3.5 ">
            <div className=" flex-1 bg-blak flex justify-center items-center  ">
                <div className={`${color} ${textcol} overflow-hidden lg:w-[70%] lg:h-[90%] w-[90%] h-[90%] flex flex-col justify-center items-center text-center  gap-0 rounded-2xl`}>
                    <div className=" w-full h-full object-cover bg-bl flex justify-center items-center  flex-1  overflow-hidden  ">
                        <img src={imgsrc} className=" w-[15%]  lg:w-[25%] object-cover flex justify-center items-center "/>
                    </div>
                    <div className=" text-lg font-bold flex justify-center items-center text-center flex-1 w-full ">
                        <div className="lg:w-full w-[70%]" >{label}</div>
                        </div> 
                </div>
            </div>

            <div className=" g-black lg:flex-3 flex justify-center items-center lg:items-center flex-2 -black">
               <p className=" text-lg lg:font-normal font-bold lg:w-full w-[100%] ">
                {text}
               </p>
            </div>
    </motion.div>

</>
}
export default Services_b