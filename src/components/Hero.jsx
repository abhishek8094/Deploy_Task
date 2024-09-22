import { FaRegCirclePlay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import heroImg from "../../public/hero.svg"

const Hero = () => {
  return (
    <div className="flex relative top-28 justify-between p-12">
      <div className="py-20 w-[400px]">
        <h1 className="text-[#17262b] text-5xl leading-tight tracking-wide font-bold ">Create and sell custom products</h1>
        <ul className="p-8">
          <li className="flex items-center"><FaCheck className="text-[#39b75d] h-8"/> <span className="px-2">100% Free to use</span></li>
          <li className="flex items-center"><FaCheck className="text-[#39b75d] h-8"/> <span className="px-2">900+ High-Quality Products</span></li>
          <li className="flex items-center"><FaCheck className="text-[#39b75d] h-8" /> <span className="px-2">Largest global print network</span></li>
        </ul>
        <div className="w-[360px] flex justify-between">
          <a href="" className=" bg-[#39b75d] text-[#ffff] p-3 px-6 w-[140px] rounded">Start for free</a>
          <button className="border-2 w-[200px] flex items-center px-6"> <FaRegCirclePlay className="mx-2 mt-1" /> <span>How it works?</span> </button>
        </div>
        <p className="text-[#39b65e] font-medium py-2">
          Trusted by over 8M sellers around the world
        </p>
      </div>
         <div className="realtive left-8">
        <img src={heroImg} alt="" className="" />
        <img src="	https://printify.com/pfh/assets/animations/images/img_5.png" alt=""  className="w-60 h-60 relative bottom-[420px] left-4"/>
        </div>
    </div>
  );
};

export default Hero;
