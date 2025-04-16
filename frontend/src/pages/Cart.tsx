import React from "react";
import CartBanner from "../components/Cart/CartBanner";
import CartContent from "../components/Cart/CartContent";
import Breadcrumb from "../components/CustomComponent/Breadcrumb";
import Header from "../components/Header/subcomponents/Header";

const Cart = ({ userDisplay, userLogout }: any) => {
  return (
    <main>
      <Header userDisplay={userDisplay} userLogout={userLogout} />
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
