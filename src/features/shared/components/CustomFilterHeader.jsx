import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, DatePicker } from "antd";
import { TbRefresh } from "react-icons/tb";
import { DownloadOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

export default function CustomFilterHeader({ title, noFilter }) {
  const dateFormat = "DD MMM YYYY";
  const [dateRangeFilter, setDateRangeFilter] = useState([]);

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
      console.log(
        "From: ",
        dayjs(dateStrings[0]).format("YYYY-MM-DD"),
        ", to: ",
        dayjs(dateStrings[1]).format("YYYY-MM-DD")
      );

      const dateSales = [
        dayjs(dateStrings[0]).format(dateFormat),
        dayjs(dateStrings[1]).format(dateFormat),
      ];

      console.log(dateSales, "sales");

      setDateRangeFilter(dates);
    } else {
      console.log("Clear");
      setDateRangeFilter([]);
    }
  };

  return (
    <div className="filter-header d-flex flex-wrap justify-content-between mb-4 align-items-center mt-4">
      <p
        className=" thead-dashboard mb-0"
        dangerouslySetInnerHTML={{ __html: title || "&nbsp;" }}></p>
      {!noFilter && (
        <div className="d-flex align-items-center flex-wrap">
          <RangePicker
            presets={rangePresets}
            onChange={onRangeChange}
            value={dateRangeFilter}
            size="large"
            style={{ width: 300 }}
            format={dateFormat}
            disabledDate={(current) =>
              current && current > dayjs().endOf("day")
            }
            showNow
          />
          <Button
            className="ms-4"
            style={{ background: "#F7DC13" }}
            size="large">
            <div className="d-flex align-items-center text-dark">
              <TbRefresh className="me-2" />
              Refresh
            </div>
          </Button>
          <Button
            className="ms-4"
            style={{ background: "#0090FF", color: "white" }}
            size="large">
            <div className="d-flex align-items-center text-white">
              <DownloadOutlined className="me-2" />
              Generate Report
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
