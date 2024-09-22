const Store = () => {
  return (
    <div className="mt-10 ">
      <h1 className="text-center text-4xl font-bold">Connect your store</h1>
      <p className="text-center py-4 text-[#485256]">
        Printify easily integrates with major e-commerce platforms and
        marketplaces
      </p>
      <div className="flex justify-around bg-[#e2f7e3]  items-center w-[1080px] h-[146px] rounded relative left-20 rounded-lg bg-[url('https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg')] bg-contain bg-no-repeat bg-right">
        <div className="w-[316px]">
          <h3 className="text-[#1f6b45] font-bold  text-xl">
            Are you a large business looking for custom solutions?
          </h3>
        </div>

        <div className="bg-[#fff] rounded relative left-12">
          <h3 className="p-2 w-36 text-center font-semibold ">Talk to sales</h3>
        </div>
      </div>
    </div>
  );
};

export default Store;
