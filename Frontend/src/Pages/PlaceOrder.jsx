import React, { useState } from "react";
import Title from "../Components/Title";
import TotalAmount from "../Components/TotalAmount";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

import { assets } from "../assets/assets";

import { toast } from "react-toastify";
import axios from "axios";
const PlaceOrder = () => {
  const [method, setMethod] = useState("COD");
  const {
    currency,
    grandTotal,
    totalcart,
    CartItem,
    deliveryprice,
    product,
    token,
    Navigate,
    setCartItems
  } = useContext(ShopContext);

  const [userData, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (item) => {
    const name = item.target.name;
    const value = item.target.value;
    setUserdata((data) => ({ ...data, [name]: value })); // here we use to add the previous and the new data
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let orderItem = []; // here we are going to add the cart data to an empty array to  store
      //in the database  for the order records
      for (const items in CartItem) {
        for (const item in CartItem[items]) {
          if (CartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              product.find((data) => data._id === items)// by doing structureClone the exact copy of the item is stored
            );
            if (itemInfo) {
              itemInfo.size = item,
                itemInfo.quantity = CartItem[items][item],
                orderItem.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: userData,
        amount: grandTotal,
        items: orderItem,
      };
      switch(method){
        case "COD":
          if (token) {
            try {
              const response = await axios.post(
                "http://localhost:4000/api/orders/cod",
                orderData,
                { headers: { Authorization: token } }
              );
              if(response?.data?.success){
                localStorage.removeItem("cart");
                setCartItems({})
                toast.success("Order Successfull")
                Navigate("/MyOrder")
              }
              console.log(response);
            } catch (error) {
              toast.error("Order Failed");
            }
          }
          break;
          case"Stripe":{

          }
          break;
          case "Razorpay":{

          }
          break;


          default : break;
      }
      
     
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <div className="p-2">
      <div className="flex justify-start">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row ">
        {/* delivery Information */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4 py-6">
          <div className="flex  gap-3">
            <input
              onChange={onchangeHandler}
              required
              name="firstName"
              value={userData.firstName}
              type="text"
              className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
              placeholder="First Name"
            />
            <input
              onChange={onchangeHandler}
              required
              name="lastName"
              value={userData.lastName}
              type="text"
              className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
              placeholder="Last Name"
            />
          </div>

          <input
            onChange={onchangeHandler}
            required
            name="email"
            value={userData.email}
            type="email"
            className="px-3 py-2 border-2 border-gray-200 rounded-md w-full"
            placeholder="Email Address"
          />

          <input
            onChange={onchangeHandler}
            required
            name="street"
            value={userData.street}
            type="text"
            className="px-3 py-2 border-2 border-gray-200 rounded-md w-full"
            placeholder="Street"
          />

          <div className="flex gap-3 ">
            <input
              onChange={onchangeHandler}
              required
              name="city"
              value={userData.city}
              type="text"
              className="px-3 py-2 border-2 border-gray-200 rounded-mdw-1/2"
              placeholder="City"
            />
            <input
              onChange={onchangeHandler}
              required
              name="state"
              value={userData.state}
              type="text"
              className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
              placeholder="State"
            />
          </div>

          <div className="flex  gap-3 ">
            <input
              onChange={onchangeHandler}
              required
              name="zipcode"
              value={userData.zipcode}
              type="Number"
              className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
              placeholder="Zipcode"
            />
            <input
              onChange={onchangeHandler}
              required
              name="country"
              value={userData.country}
              type="text"
              className="px-3 py-2 border-2 border-gray-200 rounded-md w-1/2"
              placeholder="Country"
            />
          </div>

          <input
            onChange={onchangeHandler}
            required
            name="phone"
            value={userData.phone}
            type="Number"
            className="px-3 py-2 border-2 border-gray-200 rounded-md w-full"
            placeholder="phone"
          />
        </div>

        <div className="w-full flex flex-col items-end gap-4 py-6 ">
          <TotalAmount
            currency={currency}
            subTotal={totalcart}
            shippingFee={deliveryprice}
            Total={grandTotal}
          />
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          <div className="flex justify-start gap-2 ">
            <div
              onClick={() => setMethod("Stripe")}
              className="flex gap-2 px-4  items-center border-[2px]"
            >
              <p
                className={`h-3 w-3 rounded-full border-[2px] border-gray-400 ${
                  method === "Stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img
                src={assets.stripe_logo}
                className="w-16 h-7 cursor-pointer"
                alt=""
              />
            </div>
            <div
              className="flex gap-2 px-4 py-2 border-[2px] items-center"
              onClick={() => setMethod("Razorpay")}
            >
              <p
                className={`h-3 w-3 rounded-full border-[2px] border-gray-400 ${
                  method === "Razorpay" ? "bg-green-500" : ""
                }`}
              ></p>

              <img
                src={assets.razorpay_logo}
                className="w-16 h-5 cursor-pointer"
                alt=""
              />
            </div>
            <div
              onClick={() => setMethod("COD")}
              className="flex gap-2 px-4 py-2 border-[2px] items-center"
            >
              <p
                className={`h-3 w-3 rounded-full border-[2px] border-gray-400 ${
                  method === "COD" ? "bg-green-500" : ""
                }`}
              ></p>

              <p className="font-semibold text-gray-600  cursor-pointer">
                Cash On Delivery
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-1/3 text-[10px] sm:text-sm   px-2 py-2 bg-black text-white"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </form>

      {/* cart total */}
    </div>
  );
};

export default PlaceOrder;
