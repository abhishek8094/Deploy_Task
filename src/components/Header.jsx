import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-4 fixed w-[100%] bg-[#fff] shadow-md z-30 ">
        <div className="w-[150px]">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="nav-logo"
            className="w-[100%]"
          />
        </div>
        <div className="w-[650px] flex items-center justify-center">
          <ul className="w-[100%] flex justify-between ">
            <li>Catlog</li>
            <li className="flex">How it works <FaCaretDown className="mt-[5.8px] mx-1"  /></li>
            <li>Pricing</li>
            <li>Blog</li>
            <li className="flex ">Services <FaCaretDown className="mt-[5.8px] mx-1" /></li>
            <li className="flex">Use-cases <FaCaretDown className="mt-[5.8px] mx-1" /></li>
            <li className="flex">Need help? <FaCaretDown className="mt-[5.8px] mx-1" /></li>
          </ul>
        </div>

        <div className="w-[180px] flex justify-between">
          <button className="border-2  p-2 rounded w-20 font-medium ">Log in</button>
          <button className="bg-[#39b75d] text-[#ffff] p-2 rounded w-20 font-medium">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Header;
