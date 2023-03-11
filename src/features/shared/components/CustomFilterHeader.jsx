import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, DatePicker } from "antd";
import { TbRefresh } from "react-icons/tb";
import { DownloadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleDateRange, handleRefresh } from "../shared.reducer";
const { RangePicker } = DatePicker;

export default function CustomFilterHeader({ title, noFilter }) {
  const dispatch = useDispatch();
  const dateFormat = "DD MMM YYYY";
  const { dateRangeFilter } = useSelector((state) => state.shared);

  const rangePresets = [
    {
      label: "Last 7 Days",
      value: [dayjs().add(-7, "d"), dayjs()],
    },
    {
      label: "Last 14 Days",
      value: [dayjs().add(-14, "d"), dayjs()],
    },
    {
      label: "Last 30 Days",
      value: [dayjs().add(-30, "d"), dayjs()],
    },
    {
      label: "Last 90 Days",
      value: [dayjs().add(-90, "d"), dayjs()],
    },
  ];
  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      // console.log(
      //   "From: ",
      //   dayjs(dateStrings[0]).format("YYYY-MM-DD"),
      //   ", to: ",
      //   dayjs(dateStrings[1]).format("YYYY-MM-DD")
      // );

      // const dateSales = [
      //   dayjs(dateStrings[0]).format(dateFormat),
      //   dayjs(dateStrings[1]).format(dateFormat),
      // ];

      // console.log(dateSales, "sales");

      // setDateRangeFilter(dates);
      dispatch(handleDateRange(dates));
    } else {
      console.log("Clear");
      // setDateRangeFilter([]);
      dispatch(handleDateRange([]));
    }
  };

  const handleDataRefresh = () => {
    dispatch(handleRefresh());
  };

  return (
    <div className="filter-header mb-4">
      <div className="row">
        <div className="col-xl-8 order-2 order-xl-0">
          <div className="d-flex justify-content-between align-items-center">
            <p
              className=" thead-dashboard mb-0"
              dangerouslySetInnerHTML={{ __html: title || "&nbsp;" }}></p>
            {!noFilter && (
              <RangePicker
                className=" daterange"
                presets={rangePresets}
                onChange={onRangeChange}
                // allowClear={false}
                value={dateRangeFilter}
                size="large"
                format={dateFormat}
                disabledDate={(current) =>
                  current && current > dayjs().endOf("day")
                }
                showNow
              />
            )}
          </div>
        </div>
        {/* <div className="col-xl-4 mb-3 mb-xl-0"> */}
        {!noFilter && (
          <div className="col-xl-4 col-6 offset-6 offset-xl-0 mb-3 mb-xl-0">
            <div className="row">
              <div className="col-6">
                <Button
                  className="w-100"
                  style={{ background: "#F7DC13" }}
                  onClick={handleDataRefresh}
                  size="large">
                  <div className="d-flex align-items-center text-dark">
                    <TbRefresh className="me-2" />
                    Refresh
                  </div>
                </Button>
              </div>
              <div className="col-6">
                <Button
                  className="w-100 text-center"
                  style={{ background: "#0090FF", color: "white" }}
                  size="large">
                  <div className="d-flex align-items-center text-white">
                    <DownloadOutlined className="me-2" />
                    Download
                  </div>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
