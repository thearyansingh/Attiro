import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const currency = "₹";
  const deliveryprice = 10;
  const [search, setsearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  const [CartItem, setCartItems] = useState(() => {
    // Load cart data from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    return savedCart;
  });

  const [totalcart, settotal] = useState(0);
  const [grandTotal, setGrand] = useState(0);
  const [product, setproduct] = useState([]);

  // Function to update cart total


  // Function to add items to cart
  const addtoCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select the size");
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
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);
  };

  // Function to get cart count
  const getcount = () => {
    let cartitems = 0;
    for (const items in CartItem) {
      for (const item in CartItem[items]) {
        if (CartItem[items][item] > 0) {
          cartitems += CartItem[items][item];
        }
      }
    }
    return cartitems;
  };

  // Function to update cart item quantity
  const getUpdate = async (itemId, size, quantity) => {
    const cartData = structuredClone(CartItem);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const cartTotal = () => {
    let total = 0;
    for (const itemid in CartItem) {
      let products = product.find((e) => e._id === itemid);

      for (const quantity in CartItem[itemid]) {

        try {
      if(CartItem[itemid][quantity]>0){
        total+=products.price* CartItem[itemid][quantity];
      }

        } catch (error) {
          
        }
       
      }
    }
    settotal(total);
    setGrand(total > 0 ? total + deliveryprice : 0);
  };

  // Persist cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CartItem));
    cartTotal();
  }, [CartItem]);

  // Fetch products from API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/product/listProduct");
        setproduct(response?.data?.allProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const value = {
    product,
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

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopProvider;
