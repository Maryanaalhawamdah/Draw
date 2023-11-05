import React, { useState, useEffect } from "react";
import axios from "axios";
import './paints.css';
import { FaShoppingCart } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { MdOutlineLabelImportant } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/orebiSlice";

const Paints = () => {
  const [items, setItems] = useState([]);
   
  useEffect(() => {
    axios.get("http://localhost/DRAW/connection/products/get.php")
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
    <div className="w-full relative group flex flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="cardraw max-w-80 max-h-80 relative overflow-y-hidden">
          <div className="card" style={{ width: '18rem' }}>
            <img className="w-full h-full" src={'/' + item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p><strong>Price:</strong> JD{item.price}</p>
            <ul>
              <li
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item._id,
                      name: item.name,
                      quantity: 1,
                      image:  item.image,
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
              <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                Add to wishlist
                <span>
                  <BsSuitHeartFill />
                </span>
              </li> 
              <li
                onClick={() => handleProductDetails(item)}
                className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              >
                More details
                <span className="text-lg">
                  <MdOutlineLabelImportant />
                </span>
              </li>
            </ul>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Paints;
