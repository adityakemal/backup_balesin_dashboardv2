import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import ListProduct from "./components/ListProduct";

export default function ProductContainer() {
  return (
    <LayoutApp>
      <div className="product">
        <CustomFilterHeader title="Product " noFilter />
        <ListProduct />
      </div>
    </LayoutApp>
  );
}
