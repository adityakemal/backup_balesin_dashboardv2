import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import FormCreateProduct from "./components/FormCreateProduct";

export default function ProductCreateContainer() {
  return (
    <LayoutApp disbleSelectOutlet>
      <div className="create-product">
        <CustomFilterHeader title="Create Product " noFilter isBack />
        <FormCreateProduct />
      </div>
    </LayoutApp>
  );
}
