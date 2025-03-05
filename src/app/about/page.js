export default function About() {
  return (
    <>
      <div className="relative w-full lg:h-[140vh] h-[100vh] bg-lack mt-9">
        <img src="Fseond.png" className=" relative overflow-hidden"></img>
        <div className=" text-5xl w-full text-center absolute top-[50]">
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

      <div className="lg:w-full w-[100vw] bgblack h-[100vh] flex justify-center items-center g-black mb-10">
        <img
          src="curve.svg"
          className=" overflow-hidden rounded-2xl w-[80%] lg:h-[80%] h-[100%] relative "
        />
        <p className="  lg:w-[81%] w-[80%] lg:h-[85%] h-fit  mb-auto absolute overflow-auto text-2xl p-0 pt-1 font-normal flex justify-center items-center text-black ">
          We believe in the value of systems that ensure continuous improvement,
          working collaboratively with regulators and healthcare practitioners,
          and putting patient (customer) needs at the center of our work.
          <br />
          <br />
          With our ability to offer a range of strategic solutions suitable for
          various stages of businesses development, we aim to provide a
          comprehensive service and develop long-lasting partnerships, working
          with our clients to add real and measurable value at each step.
          <br />
          <br />
          Through our partnership with Paradigm Shift Consulting Ltd we benefit
          from an established team with industry-leading experience in quality
          assurance, wholesale and pharmacy operations. Through our management
          team we offer the breadth of experience to deliver on our wider
          mission.{" "}
        </p>
      </div>

      <div className="w-full lg:h-[110vh] h-[140vh]  bg-lack flex justify-center items-center">
        <div className=" w-[96%] h-[96%]  flex lg:flex-row flex-col justify-center items-center gap-0">
           <div className=" lg:h-[90%]   w-[90%] flex flex-col items-center  flex-1 m-6">
             <h1 className=" w-full bg-blck h-[10%] text-center text-4xl font-black   text-[#228B22] ">Over values</h1>
              <p className=" w-[70%]  h-[86%] text-xl   overflow-hidden">
              We place patients and quality at the centre of our work, to aid in delivering synergistic benefits between the business and its customers.
               <br/>
               <br/>
              We believe that a quality management system is not just about ensuring compliance, but is central to your business success and patient safety.
              </p>
           
           </div>




           <div className=" overflow-hidden lg:h-[90%] w-[90%] bg-[#f4e2dd] flex-1 m-6 flex flex-col items-center rounded-bl-[0px] rounded-tl-[90px]  lg:rounded-tl-[190px] rounded-tr-[0px] rounded-br-[180px]  p-4">
           <h1 className=" w-full bg-blck h-[10%] text-center text-4xl font-black   text-[#228B22] ">Our Solutions</h1>
              <p className=" w-[70%]  h-[86%] text-xl    overflow-auto">
              We can provide distribution and manufacturing solutions, tried-and-tested processes, supply chain tools and a number of other services- please see our services page.
              <br/>
              <br/>
               Our processes have been MHRA audited, operationally tested, and refined to ensure a robust and scalable supply to UK patients. – Please see our blog on what a well implemented quality management system can support.              </p>
                      </div>

        </div>
      </div>
    </>
  );
}
