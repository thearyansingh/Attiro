// Cart.js
import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import TotalAmount from "../Components/TotalAmount";
import { Link } from "react-router-dom";

// User selects product
// ↓
// Chooses size
// ↓
// Clicks Add to Cart → addtoCart()
// ↓
// Cart Context updated
// ↓
// Cart component re-renders
// ↓
// Totals recalculated
// ↓
// Data persisted to localStorage



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
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
   
    if (CartItem && product.length > 0) {
      let tempData = [];
      for (const items in CartItem) {
        for (const item in CartItem[items]) {
          if (CartItem[items][item] > 0) {
            
            const productExists = product.find(p => p._id === items);
            if (productExists) {
              tempData.push({
                _id: items,
                size: item,
                quantity: CartItem[items][item],
              });
            }
          }
        }
      }
      setCartData(tempData);
    }
  }, [CartItem, product]);

  const handleQuantityChange = (e, itemId, size) => {
    const value = e.target.value;
    // Validate input
    if (value === "" || value <= 0) {
      getUpdate(itemId, size, 1); // Set minimum quantity to 1
      return;
    }
    // Set maximum quantity limit
    const maxQuantity = 99;
    const quantity = Math.min(parseInt(value), maxQuantity);
    getUpdate(itemId, size, quantity);
  };

  if (!product || product.length === 0) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-start">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      {cartData.length === 0 ? (
        <div className="text-center py-8">
          <p>Your cart is empty</p>
          <Link to="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div>
            {cartData.map((item, index) => {
              const addedProduct = product.find(
                (product) => product._id === item._id
              );

              if (!addedProduct) return null;

              return (
                <div
                  key={`${item._id}-${item.size}-${index}`}
                  className="py-4 border-t-2 grid grid-cols-[1fr_auto_auto] sm:grid-cols-[3fr_1fr_1fr] gap-4 items-center"
                >
                  <div className="flex justify-start gap-4 items-center">
                    <img
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                      src={addedProduct.image[0]}
                      alt={addedProduct.name}
                      onError={(e) => {
                        e.target.src = "placeholder-image-url"; // Add a placeholder image URL
                      }}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-sm sm:text-base font-medium">
                        {addedProduct.name}
                      </p>
                      <div className="flex gap-2 items-center">
                        <p className="text-sm sm:text-base">
                          {currency}
                          {addedProduct.price}
                        </p>
                        <p className="text-sm sm:text-base">
                          Size: {item.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  <input
                    className="w-12 sm:w-16 text-center border border-gray-300 rounded-md"
                    type="number"
                    min={1}
                    max={99}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item._id, item.size)}
                  />

                  <button
                    onClick={() => getUpdate(item._id, item.size, 0)}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <img
                      className="w-6 h-6 cursor-pointer"
                      src={assets.bin_icon}
                      alt="delete"
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <Link
            to="/PlaceOrder"
            className="mt-6 flex flex-col sm:flex-col items-end"
          >
            <TotalAmount
              subTotal={totalcart}
              shippingFee={deliveryprice}
              currency={currency}
              Total={grandTotal}
            />
            <div className="w-full sm:w-auto mt-4">
              <button className="w-full sm:w-auto text-[10px] sm:text-sm px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;