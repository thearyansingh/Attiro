import React from "react";
import Title from "./Title";

const TotalAmount = ({ subTotal, shippingFee, currency, Total }) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2  gap-2 p-6">
      <div className="flex justify-start">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center border-b-2">
          <p>Subtotal</p>
          <p>
            {currency}
            {subTotal}
          </p>
        </div>
        <div className="flex justify-between items-center border-b-2">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {shippingFee}
          </p>
        </div>
        <div className="flex justify-between items-center border-b-2">
          <p>Total</p>
          <p>
            {currency}
            {Total}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default TotalAmount;
