import React, { useState } from "react";
import { Switch, Tag } from "antd";

export default function StatusAgent() {
  const [Status, setStatus] = useState(false);
  const onChange = (val) => {
    setStatus(val);
    console.log(`switch to ${val}`);
  };

  return (
    <div className="status mb-4">
      <div className="gbox bg-white d-flex justify-content-between align-items-center">
        <div className="title-box d-flex align-items-center text-dark">
          Live Agent Status
          {Status ? (
            <Tag className="ms-2" color="#1AD598">
              ACTIVE
            </Tag>
          ) : (
            <Tag className="ms-2" color="#BFBFBF">
              DISABLED
            </Tag>
          )}
        </div>
        <Switch color="green" checked={Status} onChange={onChange} />
      </div>
    </div>
  );
}
