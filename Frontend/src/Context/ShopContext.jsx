import { createContext } from "react";
import { products } from "../assets/assets";

  export const ShopContext=createContext();

  const ShopProvider=(props)=>{
    const currency="₹";
    const deliveryprice="10";
    const value={
products,currency,deliveryprice
    }
    return (
<ShopContext.Provider value={value}>
{props.children}
</ShopContext.Provider>
    )
}
export default ShopProvider;

