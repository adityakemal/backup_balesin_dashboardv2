import React, { useEffect } from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import ListProduct from "./components/ListProduct";

export default function ProductContainer() {
  return (
    <LayoutApp disableAllOutlet>
      <div className="product">
        <CustomFilterHeader
          title="Product "
          noFilter
          href="/product/create"
          hrefTitle="+ Add New Product"
        />
        <ListProduct />
      </div>
    </LayoutApp>
  );
}
