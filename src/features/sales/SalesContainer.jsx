import React from "react";
import CustomFilterHeader from "../shared/components/CustomFilterHeader";
import LayoutApp from "../shared/components/LayoutApp";
import TableSales from "./components/TableSales";
import CanceledAnalytic from "./components/CanceledAnalytic";
import DelivAndPaymentMethod from "./components/DelivAndPaymentMethod";
import SalesAnalytic from "./components/SalesAnalytic";
import SalesFunneling from "./components/SalesFunneling";

export default function SalesContainer() {
  return (
    <LayoutApp>
      <div className="sales">
        <CustomFilterHeader title="Sales " />
        {/* <CustomFilterHeader title="Sales Analytic" noFilter /> */}
        <SalesAnalytic />
        <CustomFilterHeader title="Cancelled Order Analytic" noFilter />
        <CanceledAnalytic />
        <CustomFilterHeader title="Sales Funneling Report" noFilter />
        <SalesFunneling />
        <DelivAndPaymentMethod />
        <TableSales title="Transaction Activity" />
      </div>
    </LayoutApp>
  );
}
