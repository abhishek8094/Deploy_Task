const Swiper = () => {
  const SwiperLists = [
    {
      id: 1,
      image: "https://printify.com/pfh/assets/legacy/custom-products.png",
      title: "Create ",
      subtitle:"custom products",
      description:
        " Easily add your designs to a wide range of products using our free tools ",
    },
    {
      id: 2,
      image: "https://printify.com/pfh/assets/legacy/your-products.png",
      title: "SELL ",
      subtitle:"on your terms",
      description: "You choose the products, sale price, and where to sell",
    },
    {
      id: 3,
      image: "https://printify.com/pfh/assets/legacy/fullfillment.png",
      title: "WE HANDLE",
      subtitle:"fulfillment",
      description:
        " Once an order is placed, we automatically handle all the printing and delivery logistics ",
    },
  ];
  return (
    <div className="flex justify-around items-center p-20 border-2">
      {SwiperLists.map((SwiperList, id) => (
        <div key={id} className="w-[200px]">
            <img src={SwiperList.image} alt="img" className="w-32" />
            <h3 className="mt-4">{SwiperList.title}</h3>
            <h4>{SwiperList.subtitle}</h4>
            <p className="text-[#48525]">{SwiperList.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Swiper;
