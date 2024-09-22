import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { RiRedditFill } from "react-icons/ri";

const Footer = () => {
  const FooterLists = [
    {
      id: 1,
      title: "Integrations",
      items: [
        "Shopify",
        "Etsy",
        "eBay",
        "Amazon",
        "TikTok Shop",
        "PrestaShop",
        "BigCommerce",
        "Wix",
        "WooCommerce",
        "Squarespace",
        "Printify API",
        "Printify Pop-Up Store",
        "Shutterstock",
      ],
    },

    {
      id: 2,
      title: "Discover",
      items: [
        "Blog",
        "Guides",
        "Products",
        "Etsy print-on-demand",
        "Shopify print-on-demand",
        "WooCommerce print-on-demand",
        "Wix print-on-demand",
        "Squarespace print-on-demand",
        "Make Your Own Shirts",
        "Brands",
        "Pricing",
        "Shipping Rates",
        "Mockup Generator",
      ],
    },

    {
      id: 3,
      title: "Start selling",
      items: [
        "Custom T-shirts",
        "Custom Hoodies",
        "Custom Mugs",
        "Custom Socks",
        "Custom Backpacks",
        "Custom Branding",
        "Sell on Etsy",
        "Sell on Social Media",
        "Free T-shirt Designs",
        "Custom Products",
        "Custom All-Over-Print Hoodies",
        "Start a Clothing Line",
        "Start POD Business",
        "Bulk Orders",
        "Transfering To Printify",
      ],
    },

    {
      id: 4,
      title: "Printify",
      items: [
        "Print on Demand",
        "Print Providers",
        "Experts Program",
        "Printify Express Delivery",
        "Become a Partner",
        "About",
        "Printify Quality Promise",
        "Jobs",
        "Webinars",
        "Printing Profits Podcast",
        "Contact Us",
        "Affiliate",
        "Contact Sales",
        "POD Glossary",
        "Network Fulfillment Status",
        "Merchant Protection",
        "Security",
        "Sitemap",
      ],
    },
  ];
  return (
    <>
    <div className="p-8">
      <div className="flex justify-between">
        <div>
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="footer-logo"
            className="w-36"
          />
        </div>
        <div className="flex  justify-between items-center w-[300px]">
          <MdOutlineFacebook className="text-[#39b75d] text-3xl" />
          <FaSquareInstagram className="text-[#39b75d] text-3xl" />
          <FaLinkedin className="text-[#39b75d] text-3xl" />
          <FaSquareXTwitter className="text-[#39b75d] text-3xl" />
          <FaSquareYoutube className="text-[#39b75d] text-3xl" />
          <AiFillTikTok className="text-[#39b75d] text-3xl" />
          <RiRedditFill className="text-[#39b75d] text-3xl" />
        </div>
      </div>
      <div className="flex w-[100%]  p-4 mt-16 justify-between">
        {FooterLists.map((FooterList, id) => (
          <div key={id}>
            <h1 className="font-medium text-[17px] text-[#353a47]">{FooterList.title}</h1>
            <ul className="py-4 ">
              {FooterList.items.map((item, id) => (
                <div key={id} className="gap-3 text-gray-600 hover:text-[#39b75d] cursor-pointer py-2">{item}</div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
     <div className="bg-[#f7f7f7] p-8 ">
     <ul className="flex cursor-pointer justify-center items-center p-2 text-[#949494] ">
         <li className="hover:text-[#39b75d] mx-2">Intellectual Property Policy</li>
         <li className="hover:text-[#39b75d] mx-2">Terms of Service</li>
         <li className="hover:text-[#39b75d] mx-2">Privacy Policy</li>
         <li className="hover:text-[#39b75d] mx-2">Security</li>
     </ul>
     <p className="text-center text-sm">© 2024 Printify, Inc. All rights reserved.</p>
   </div>
   </>
  );
};

export default Footer;
