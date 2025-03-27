import React from "react";
import CartBanner from "../Components/Cart/CartBanner";
import CartContent from "../Components/Cart/CartContent";
import Breadcrumb from "../Components/CustomComponent/Breadcrumb";

const Cart = () => {
  return (
    <main>
      <Breadcrumb
        title="Cart"
        firstLink="/"
        firstTitle="Home"
        secondTitle="Cart"
        secondLink="cart"
      />
      <CartContent />
    </main>
  );
};

export default Cart;
