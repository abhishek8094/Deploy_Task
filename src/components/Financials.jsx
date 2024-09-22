import finanicalImg from "../../public/finanical.svg";

const Financials = () => {
  return (
    <div className="relative top-80">
      <div className="flex justify-center items-center">
        <div className="bg-[#203741] rounded-lg w-[900px] h-[630px] ">
          <div className="p-20 ">
            <h2 className="text-[#fff] w-[235px] text-4xl font-bold">
              Make Money, Risk-Free
            </h2>
            <p className="text-[#fff] py-4 font-semibold w-[300px] ">
              You pay for fulfillment only when you make a sale
            </p>

            <div className="bg-[#17262b] w-[300px] h-[240px] rounded-lg ">
              <div className="p-8">
                <div className="flex justify-between">
                  <p className="text-[#fff] font-semibold">
                    You sell a t-shirt
                  </p>
                  <span className="text-[#fff] font-semibold">$ 30</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#fff] font-semibold py-4">
                    You pay for its production
                  </p>
                  <span className="text-[#fff] font-semibold py-4">$ 12</span>
                </div>
                <hr className="text-[#fff] mt-4" />
                <div className="flex justify-between">
                  <h4 className="text-[#18c75a] font-bold py-5 text-xl">
                    Your profit
                  </h4>
                  <span className="text-[#18c75a] font-bold py-5 text-xl">
                    $ 18
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-[#39b75d] text-[#fff] p-3 mt-4 font-semibold  rounded">
              Start selling
            </button>
            <p className="text-[#c4c7c8] mt-3">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>
      </div>

      <img
        src={finanicalImg}
        className="relative bottom-[517px] w-[400px] left-[698px]"
        alt="financial-img"
      />
    </div>
  );
};

export default Financials;
