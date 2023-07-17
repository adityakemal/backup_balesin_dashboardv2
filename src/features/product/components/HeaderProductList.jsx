import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct, getMarket, getOutletProduct } from "../product.api";
import { handleActiveMarket, handleActiveOutlet } from "../product.reducer";

export default function HeaderProductList() {
  const dispatch = useDispatch();
  const { listMarket, listOutletProduct, activeMarket, activeOutlet } =
    useSelector((state) => state.product);

  // const [ActiveMarket, setActiveMarket] = useState(null);
  // const [ActiveOutlet, setActiveOutlet] = useState(null);

  const handleGetListProduct = () => {
    const params = {
      store_id: localStorage.getItem("store_id"),
      outlet: activeOutlet?.id,
      // mode: 1,
    };
    dispatch(getListProduct(params));
  };

  useEffect(() => {
    handleGetListProduct();
    // callbackActiveOutlet(activeOutlet);
  }, [activeOutlet]);

  useEffect(() => {
    const params = {
      bot_id: localStorage.getItem("bot_id"),
    };
    dispatch(getMarket(params));
  }, []);

  useEffect(() => {
    const params = {
      bot_id: localStorage.getItem("bot_id"),
      market_id: activeMarket?.id,
    };
    dispatch(getOutletProduct(params));
  }, [activeMarket]);

  const handleChangeMarket = (value, obj) => {
    dispatch(handleActiveMarket(obj));
    // setActiveMarket(() => obj);
  };
  const handleChangeOutlet = (value, obj) => {
    dispatch(handleActiveOutlet(obj));
    // setActiveOutlet(() => obj);
  };

  useEffect(() => {
    if (activeMarket === null) {
      // console.log(ActiveMarket, "ActiveMarket");
      listMarket.length !== 0 && dispatch(handleActiveMarket(listMarket[0]));
    }
  }, [listMarket]);

  useEffect(() => {
    if (listOutletProduct.length !== 0) {
      dispatch(handleActiveOutlet(listOutletProduct[0]));
      // setActiveOutlet(() => listOutletProduct[0]);
    }
  }, [listOutletProduct]);

  return (
    <div className="gbox bg-white mb-4">
      {/* <pre>
        <small>{JSON.stringify(ActiveOutlet, 0, 2)}</small>
      </pre> */}
      <div className="row cols-2">
        <div className="col-md-6">
          <div className="label">Select Market</div>
          <Select
            value={activeMarket?.id}
            className="w-100"
            onChange={handleChangeMarket}
            options={listMarket?.map((res) => ({
              ...res,
              value: res?.id,
              label: res?.name,
            }))}
          />
        </div>
        <div className="col-md-6">
          <div className="label">Select Outlet</div>
          <Select
            className="w-100"
            value={activeOutlet?.id}
            onChange={handleChangeOutlet}
            options={listOutletProduct?.map((res) => ({
              ...res,
              value: res.id,
              label: res.name,
            }))}
          />
        </div>
        <div className="col-md-12">
          <small>
            <p
              className="p-3 mb-0 bg-light mt-3 text-dark rounded"
              style={{ fontSize: 12 }}>
              {activeOutlet?.address}
            </p>
          </small>
        </div>
      </div>
    </div>
  );
}
