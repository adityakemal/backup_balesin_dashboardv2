import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import FormEditProduct from "./components/FormEditProduct";

export default function ProductEditContainer() {
  return (
    <LayoutApp disbleSelectOutlet>
      <div className="create-product">
        <CustomFilterHeader title="Edit Product " noFilter isBack />
        <FormEditProduct />
      </div>
    </LayoutApp>
  );
}
