import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import TotalAmount from "../Components/TotalAmount";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    product,
    currency,
    CartItem,
    getUpdate,
    grandTotal,
    totalcart,
    deliveryprice,
  } = useContext(ShopContext);
  const [cartData, SetCartdata] = useState([]);


  useEffect(() => {
    let tempData = [];
    for (const items in CartItem) {
      // for the item present in cart
      for (const item in CartItem[items]) {
        // for the size present in cart
        if (CartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: CartItem[items][item],
          });
        }
      }
    }
    SetCartdata(tempData);
  }, [CartItem]);

  console.log(totalcart);
  console.log(grandTotal);

  return (
    <div className="p-4">
      {/* Cart Title */}
      <div className="flex justify-start">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      {/* Cart Items */}
      <div>
        {cartData.map((item, index) => {
          const addedProduct = product.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t-2 grid grid-cols-[1fr_auto_auto] sm:grid-cols-[3fr_1fr_1fr] gap-4 items-center"
            >
              {/* Product Details */}
              <div className="flex justify-start gap-4 items-center">
                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  src={addedProduct?.image[0]}
                  alt="product"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm sm:text-base font-medium">
                    {addedProduct?.name}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm sm:text-base">
                      {currency}
                      {addedProduct?.price}
                    </p>
                    <p className="w-12 text-center font-semibold text-sm sm:text-base bg-gray-200 p-1">
                      {item.quantity}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                className="w-12 sm:w-16 text-center border border-gray-300 rounded-md"
                type="number"
                min={1}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === 0
                    ? null
                    : getUpdate(item._id, item.size, Number(e.target.value))
                }
                defaultValue={item.quantity}
              />

              {/* Delete Icon */}
              <img
                onClick={() => getUpdate(item._id, item.size, 0)}
                className="w-6 h-6 cursor-pointer"
                src={assets.bin_icon}
                alt="delete"
              />
            </div>
          );
        })}
      </div>

      {/* Total Amount Section */}
      <Link to='/PlaceOrder' className="mt-6 flex flex-col sm:flex-col  items-end">
        <TotalAmount
          subTotal={totalcart}
          shippingFee={deliveryprice}
          currency={currency}
          Total={grandTotal}
          
        />
       <div>
       <button className="w-full text-[10px] sm:text-sm   px-2 py-2 bg-black text-white">
        PROCEED TO CHECKOUT
      </button>
       </div>
      </Link>
    </div>
  );
};

export default Cart;
