
import { FaArrowRightLong } from "react-icons/fa6";
const AllProducts = () => {
    return(
        <div className="flex justify-between mt-24 p-12">
            <div>
                hello
            </div>
            <div className="w-[900px] h-[400px] shadow bg-[#fff] rounded">
            <div className=" w-[400px] h-[400px] relative left-80 top-20">
                <h1 className="text-3xl font-bold">Easily add your design to a wide range of products</h1>
                <p className="py-6 text-gray-600">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                <span className="text-[#39b75d] py-4 flex font-medium">All products <FaArrowRightLong className="mt-1.5 relative left-2"/></span>
            </div>
            </div>
           
        </div>
    )
}

export default AllProducts;