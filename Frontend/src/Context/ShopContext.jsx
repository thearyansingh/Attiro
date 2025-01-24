import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
export const ShopContext = createContext();

const ShopProvider = (props) => {
  const currency = "₹";
  const deliveryprice = 10;
  const [search, setsearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  const [CartItem, setCartItems] = useState({});
  const [totalcart, settotal] = useState(0);
  const [grandTotal, setGrand] = useState(0);

  const cartTotal = () => {
    let total = 0;
    for (const itemid in CartItem) {
      for (const quantity in CartItem[itemid]) {
        const quant = CartItem[itemid][quantity];
        const product = products.find((e) => e._id === itemid);
        if (product) {
          total += quant * product?.price;
        }
      }
    }
    settotal(total);
    if (total > 0) {
      setGrand(total + deliveryprice);
    } else {
      setGrand(total + 0);
    }
  };

  const addtoCart = async (itemId, size) => {
    //and this is to add the product to the cart
    if (!size) {
      toast.error("select the size");
      return;
    }
    const cartData = structuredClone(CartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    localStorage.setItem("cart", JSON.stringify(cartData));
    cartTotal();
  };
  const getcount = () => {
    // to count the quantity
    let cartitems = 0;
    for (const items in CartItem) {
      for (const item in CartItem[items]) {
        try {
          if (CartItem[items][item] > 0) {
            cartitems += CartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return cartitems;
  };

  useEffect(() => {
    console.log(CartItem);
    cartTotal();
  }, [CartItem]);

  const getUpdate = async (itemId, size, quantity) => {
    // this code is for the quantity
    const cartData = structuredClone(CartItem);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    cartTotal();
  };

  const value = {
    products,
    currency,
    deliveryprice,
    search,
    setsearch,
    showSearch,
    setshowSearch,
    CartItem,
    addtoCart,
    getcount,
    getUpdate,
    totalcart,
    grandTotal,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopProvider;
