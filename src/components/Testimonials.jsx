import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  const TestimonialsLists = [
    {
      id: 1,
      Image: "	https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png",
      title: "Robert A. Voltaire",
      subtitle: " Store link ",
      star: "https://printify.com/pfh/media/star-S46SZESO.svg",
      description:
        " Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ",
    },

    {
      id: 2,
      Image: "	https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png",
      title: "Quinten Barney",
      subtitle: " Etsy Merchant ",
      star: "https://printify.com/pfh/media/star-S46SZESO.svg",
      description:
        " We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. ",
    },

    {
      id: 3,
      Image: "https://printify.com/pfh/media/nikki-TJP4NANB.png",
      title: "Nikki",
      subtitle: "Store link",
      star: "https://printify.com/pfh/media/star-S46SZESO.svg",
      description:
        " Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze. ",
    },

    {
      id: 4,
      Image: "https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png",
      title: "Spencer, Brett, and Kyle",
      subtitle: "Store link",
      star: "https://printify.com/pfh/media/star-S46SZESO.svg",
      description:
        " Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly. ",
    },

    {
      id: 5,
      Image: "https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg",
      title: "April Showers",
      subtitle: "Store link",
      star: "https://printify.com/pfh/media/star-S46SZESO.svg",
      description:
        "  I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.  ",
    },
  ];

  return (
    <div className="h-[600px] mt-8">
      <div className="flex justify-evenly relative top-20 w-[1100px]">
        <div className=" w-[399px] ">
          <h3 className="text-4xl font-bold text-[#353a47]">
            Trusted by over 8M sellers around the world
          </h3>
        </div>

        <div className="w-[400px]">
          <p className="text-[#485256] p-7 relative right-24">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
      </div>
      <div className="mt-32 flex">
        {TestimonialsLists.map((list, id) => (
          <div
            key={id}
            className="p-2 bg-[#fff] w-[420px] h-[320px] m-4 border-2 shadow-lg rounded-lg"
          >
            <div className="flex m-8 justify-between w-[250px] border-2">
              <img src={list.Image} alt="img" className="w-16 rounded" />
              <div className="mt-2 border-2">
                <h3 className="text-xl font-bold">{list.title}</h3>
                <p className="text-[#29ab51] cursor-pointer">{list.subtitle}</p>
                <div className="flex py-2">
                <img src={list.star} alt="" />
                <img src={list.star} alt="" />
                <img src={list.star} alt="" />
                <img src={list.star} alt="" />
                <img src={list.star} alt="" />
                </div>
                
              </div>
            </div>
            <div>
              <p className="text-[#485256]">{list.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
