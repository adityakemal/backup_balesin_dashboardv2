import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct, getMarket, getOutletProduct } from "../product.api";

export default function HeaderProductList({ callbackActiveOutlet }) {
  const dispatch = useDispatch();
  const { listMarket, listOutletProduct } = useSelector(
    (state) => state.product
  );

  const [ActiveMarket, setActiveMarket] = useState(null);
  const [ActiveOutlet, setActiveOutlet] = useState(null);

  const handleGetLostProduct = () => {
    const params = {
      store_id: localStorage.getItem("store_id"),
      outlet: ActiveOutlet?.id,
      // mode: 1,
    };
    dispatch(getListProduct(params));
  };

  useEffect(() => {
    handleGetLostProduct();
    callbackActiveOutlet(ActiveOutlet);
  }, [ActiveOutlet]);

  useEffect(() => {
    const params = {
      bot_id: localStorage.getItem("bot_id"),
    };
    dispatch(getMarket(params));
  }, []);

  useEffect(() => {
    const params = {
      bot_id: localStorage.getItem("bot_id"),
      market_id: ActiveMarket?.id,
    };
    dispatch(getOutletProduct(params));
  }, [ActiveMarket]);

  const handleChangeMarket = (value, obj) => {
    setActiveMarket(() => obj);
  };
  const handleChangeOutlet = (value, obj) => {
    setActiveOutlet(() => obj);
  };

  useEffect(() => {
    listMarket.length !== 0 && setActiveMarket(() => listMarket[0]);
  }, [listMarket]);

  useEffect(() => {
    if (listOutletProduct.length !== 0) {
      setActiveOutlet(() => listOutletProduct[0]);
    }
  }, [listOutletProduct]);

  return (
    <div className="gbox bg-white mb-4">
      {/* <pre>
        <small>{JSON.stringify(ActiveOutlet, 0, 2)}</small>
      </pre> */}
      <div className="row cols-2">
        <div className="col-md">
          <div className="label">Select Market</div>
          <Select
            value={ActiveMarket?.id}
            className="w-100"
            onChange={handleChangeMarket}
            options={listMarket?.map((res) => ({
              ...res,
              value: res?.id,
              label: res?.name,
            }))}
          />
        </div>
        <div className="col-md">
          <div className="label">Select Outlet</div>
          <Select
            className="w-100"
            value={ActiveOutlet?.id}
            onChange={handleChangeOutlet}
            options={listOutletProduct?.map((res) => ({
              ...res,
              value: res.id,
              label: res.name,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
