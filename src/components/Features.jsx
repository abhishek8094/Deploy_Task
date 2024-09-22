const Features = () => {
  const FeaturesList = [
    {
      id: 1,
      image: "	https://printify.com/pfh/assets/legacy/higher-profits.svg",
      title: "Higher Profits",
      description:
        "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
    },

    {
      id: 2,
      image: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
      title: "Robust Scaling",
      description:
        "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
    },

    {
      id: 3,
      image: " https://printify.com/pfh/assets/legacy/best-selection.svg",
      title: "Best Selection",
      description:
        "With 900+ products and top quality brands, you can choose the best products for your business.",
    },
  ];
  return (
    <div className="w-[100%] h-[400px] p-16 flex">
      {FeaturesList.map((featurelist, id) => (
        <div key={id} className="p-12">
          <img src={featurelist.image} alt="img" className="w-28" />
          <h1 className="text-[#17262b] pt-10 font-bold text-2xl leading-tight">
            {featurelist.title}
          </h1>
          <p className="pt-8 text-[#485256] font-semibold">{featurelist.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
