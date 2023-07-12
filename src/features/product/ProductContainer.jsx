import React, { useEffect, useState } from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import ListProduct from "./components/ListProduct";
import HeaderProductList from "./components/HeaderProductList";

export default function ProductContainer() {
  const [ActiveOutletObj, setActiveOutletObj] = useState(null);
  const callbackActiveOutlet = (v) => setActiveOutletObj(() => v);

  return (
    <LayoutApp disbleSelectOutlet>
      <div className="product">
        <CustomFilterHeader
          title="Product "
          noFilter
          href={`/product/create/${ActiveOutletObj?.market_id}/${ActiveOutletObj?.id}`}
          hrefTitle="+ Add New Product"
        />
        <HeaderProductList callbackActiveOutlet={callbackActiveOutlet} />
        <ListProduct ActiveOutletObj={ActiveOutletObj} />
      </div>
    </LayoutApp>
  );
}
