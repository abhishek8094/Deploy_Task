
import { FaArrowRightLong } from "react-icons/fa6";
const AllProducts = () => {
    return(
        <div className="flex justify-between p-12">
            <div>
                hello
            </div>
            <div className="border-2 w-[300px] h-[400px]">
                <h1 className="text-lg font-bold">Easily add your design to a wide range of products</h1>
                <p>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                <span className="text-[#39b75d] flex">All products <FaArrowRightLong /></span>
            </div>
        </div>
    )
}

export default AllProducts;