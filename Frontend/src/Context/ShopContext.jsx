import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
  export const ShopContext=createContext();


  const ShopProvider=(props)=>{
    const currency="₹";
    const deliveryprice="10";
    const  [search, setsearch] = useState('');
    const [showSearch, setshowSearch] = useState(false);
    const [CartItem,setCartItems]=useState({});

    const addtoCart=async(itemId,size)=>{
        if(!size){
            toast.error("select the size");
            return;
        }    
const cartData=structuredClone(CartItem);

if (cartData[itemId]) {
    if (cartData[itemId][size]) {
        cartData[itemId][size]+=1;
    }
    else{
        cartData[itemId][size]=1;
    }
    
}
else{
    cartData[itemId]={};
    cartData[itemId][size]=1;
    
}

setCartItems(cartData);
localStorage.setItem("cart", JSON.stringify(cartData));
    }
const getcount=()=>{
    let cartitems=0;
    for(const items in CartItem){
for(const item in CartItem[items]){

    try {
        if(CartItem[items][item]>0){
            cartitems+=CartItem[items][item];
            
                }  
    } catch (error) {
        
    }
  
}
    }
    return cartitems;
}

    useEffect(() => {
      console.log(CartItem);
      
    }, [CartItem])
    const getUpdate=async(itemId,size,quantity)=>{
        const cartData=structuredClone(CartItem);
        cartData[itemId][size]=quantity;
        setCartItems(cartData);
    }
    
    
    const value={
products,currency,deliveryprice,search,setsearch,showSearch,setshowSearch,CartItem,addtoCart,getcount,getUpdate
    }
    return (
<ShopContext.Provider value={value}>
{props.children}
</ShopContext.Provider>
    )
}
export default ShopProvider;

