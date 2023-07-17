import React, { useEffect, useState } from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import ListProduct from "./components/ListProduct";
import HeaderProductList from "./components/HeaderProductList";
import { useSelector } from "react-redux";

export default function ProductContainer() {
  const { activeOutlet } = useSelector((state) => state.product);

  return (
    <LayoutApp disbleSelectOutlet>
      <div className="product">
        <CustomFilterHeader
          title="Product "
          noFilter
          href={`/product/create/${activeOutlet?.market_id}/${activeOutlet?.id}`}
          hrefTitle="+ Add New Product"
        />
        <HeaderProductList />
        <ListProduct />
      </div>
    </LayoutApp>
  );
}
