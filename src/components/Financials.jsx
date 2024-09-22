import hari from "../../public/shivam.svg"
const Financials = () => {
    return(
        <div className="flex justify-center items-center mb-28">
        <div className="bg-[#203741] rounded-lg w-[900px] h-[600px] ">
            <h2 className="text-[#fff]">Make Money, Risk-Free</h2>
            <p lassName="text-[#fff]">You pay for fulfillment only when you make a sale</p>
            <div className="bg-[#17262b] w-[300px] h-[300px] rounded-lg relative left-6">
                <div className="flex justify-between">
                <p className="text-[#fff]">You sell a t-shirt</p>
                <span className="text-[#fff]">$ 30</span>
                </div>
                <div className="flex justify-between">
                    <p className="text-[#fff]">You pay for its production</p>
                    <span className="text-[#fff]">$ 12</span>
                </div>
                <div></div>
                <div className="flex justify-between">
                    <h4 className="text-">Your profit</h4>
                    <img src={hari} alt="" />
                    <span>$ 18</span>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Financials;