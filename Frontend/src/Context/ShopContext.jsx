// ShopContext.js
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const currency = "₹";
  const deliveryprice = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [token, setToken] = useState("");
  const Navigate = useNavigate();
  const [CartItem, setCartItems] = useState(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      return savedCart || {};
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return {};
    }
  });

  const [totalcart, setTotal] = useState(0);
  const [grandTotal, setGrand] = useState(0);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to add items to cart
  const addtoCart = async (itemId, size, token) => {
    if (!itemId || !size) {
      toast.error("Invalid product or size selection");
      return;
    }

    try {
      const cartData = structuredClone(CartItem);

      // Verify product exists
      const productExists = product.find((p) => p._id === itemId);
      if (!productExists) {
        toast.error("Product not found");
        return;
      }

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
      console.log(token);

      if (token) {
        try {
          await axios.post(
            "http://localhost:4000/api/cart/addCart",
            { itemId, size },
            { headers: { Authorization: token } } // Ensure this matches case in your middleware
          );
        } catch (error) {
          console.log(
            "Error:",
            error.response ? error.response.data : error.message
          );
        }
      } else {
        console.log("authentication error"); // Fixed console.log
      }
      console.log("added to database");
      toast.success("Added to cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add to cart");
    }
  };

  // Function to get cart count
  const getcount = () => {
    try {
      let cartItems = 0;
      for (const items in CartItem) {
        for (const item in CartItem[items]) {
          if (CartItem[items][item] > 0) {
            cartItems += CartItem[items][item];
          }
        }
      }
      return cartItems;
    } catch (error) {
      console.error("Error calculating cart count:", error);
      return 0;
    }
  };

  // Function to update cart item quantity
  const getUpdate = async (itemId, size, quantity) => {
    try {
      const cartData = structuredClone(CartItem);

      if (quantity === 0) {
        // Remove the size if quantity is 0
        if (cartData[itemId] && cartData[itemId][size]) {
          delete cartData[itemId][size];
          // Remove the product if no sizes remain
          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
          }
        }
      } else {
        if (!cartData[itemId]) {
          cartData[itemId] = {};
        }
        cartData[itemId][size] = quantity;
      }

      setCartItems(cartData);
      console.log(token);
      if (token) {
        try {
          await axios.post(
            "http://localhost:4000/api/cart/updateCart",
            { itemId, size, quantity },
            { headers: { Authorization: token } } // Ensure this matches case in your middleware
          );

          toast.success(
            quantity === 0 ? "Item removed from cart" : "Cart updated"
          );
        } catch (error) {
          console.log(
            "Error:",
            error.response ? error.response.data : error.message
          );
        }
      } else {
        console("not updated");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
    }
  };

  const cartTotal = () => {
    try {
      let total = 0;
      for (const itemId in CartItem) {
        const products = product.find((e) => e._id === itemId);
        if (products) {
          for (const size in CartItem[itemId]) {
            if (CartItem[itemId][size] > 0) {
              total += products.price * CartItem[itemId][size];
            }
          }
        }
      }
      setTotal(total);
      setGrand(total > 0 ? total + deliveryprice : 0);
    } catch (error) {
      console.error("Error calculating cart total:", error);
      setTotal(0);
      setGrand(0);
    }
  };

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(CartItem));
      cartTotal();
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [CartItem, product]);

  // Fetch products from API
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:4000/api/product/listProduct"
        );
        if (response?.data?.allProduct) {
          setProduct(response.data.allProduct);
        } else {
          throw new Error("Invalid product data received");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
        setProduct([]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    product,
    loading,
    currency,
    deliveryprice,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    CartItem,
    addtoCart,
    getcount,
    getUpdate,
    totalcart,
    grandTotal,
    token,
    setToken,
    Navigate,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopProvider;
