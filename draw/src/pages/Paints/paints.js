import React, { useState, useEffect } from "react";
import axios from "axios";
import './paints.css';
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdOutlineLabelImportant } from "react-icons/md";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { GiReturnArrow } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";

const Paints = () => {
  const [items, setItems] = useState([]);
   
  useEffect(() => {
    axios.get("http://localhost/DRAW/connection/products/selectpaint.php")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProductDetails = (item) => {
    const rootId = String(item.name).toLowerCase().split(" ").join("");
    navigate(`/product/${rootId}`, {
      state: {
        item,
      },
    });
  };

 

  return (
    <div className="max-w-container mx-auto px-4">
  <Breadcrumbs title="Paints" />

  <div className="w-full flex flex-wrap">
    {/* Left side navigation */}
    <div className="w-1/4">
      <ShopSideNav />
    </div>

    {/* Right side cards */}
    <div className="w-3/4">
      {/* Your product cards */}
      <div className="w-full relative group flex flex-wrap">
  {items.map((item, index) => (
    <div key={index} className="max-w-80 w-full lg:w-1/3 relative overflow-y-hidden">
      <div>
        <div>
          <img
            className="w-full h-full"
            src={`/assets/${item.image}`}
            alt={item.name}
            style={{ height: '250px' }}
          />
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item._id,
                    name: item.name,
                    quantity: 1,
                    image: item.image,
                    badge: item.badge,
                    price: item.price,
                    colors: item.color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {item.name}
          </h2>
          <p className="text-[#767676] text-[14px]">JD{item.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{item.color}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
</div>
  );
};

export default Paints;
