const Swiper = () => {
  const SwiperLists = [
    {
      id: 1,
      image: "https://printify.com/pfh/assets/legacy/custom-products.png",
      title: "Create custom products",
      description:
        " Easily add your designs to a wide range of products using our free tools ",
    },
    {
      id: 2,
      image: "https://printify.com/pfh/assets/legacy/your-products.png",
      title: "SELL on your terms",
      description: "You choose the products, sale price, and where to sell",
    },
    {
      id: 3,
      image: "https://printify.com/pfh/assets/legacy/fullfillment.png",
      title: "WE HANDLE fulfillment",
      description:
        " Once an order is placed, we automatically handle all the printing and delivery logistics ",
    },
  ];
  return (
    <div className="flex p-20 border-2">
      {SwiperLists.map((SwiperList, id) => (
        <div key={id}>
            <img src={SwiperList.image} alt="img" className="w-20" />
            <h1>{SwiperList.title}</h1>
            <p>{SwiperList.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Swiper;
