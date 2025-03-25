import User from "../Models/User.js";

const createCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    // Find the user by ID
    const userdata = await User.findOne({ _id: userId });

    if (!userdata) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = userdata.cartData || {};

    // Update cart data
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

    // Update user with new cart data
    await User.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Product added to cart" });
  } catch (error) {
    console.error("Cart creation error:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
const getCart = async (res, req) => {
  try {
    const { userId } = req.body;
    const getproduct = await User.findOne({_id:userId});
    const cartData = getproduct.cartData;
    res.json({ status: "true", cartData: cartData });
  } catch (error) {
    console.log(error);
    res.json({ status: "false", message: "something went wrong" });
  }
};
//update the cart quantity
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userdata = await User.findOne({_id:userId});
    let cartData = await userdata.cartData;
    cartData[itemId][size] = quantity;
    await User.findByIdAndUpdate(userId, { cartData });
    res.json({ success: "true", message: "updatequantity" });
  } catch (error) {
    res.json({ success: "false", message: "something went wrong" });
    console.log(error);
  }
};
export { createCart, getCart, updateCart };
