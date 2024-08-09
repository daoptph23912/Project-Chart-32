import React from "react";
import { Tooltip } from "antd";
import { ChamThan } from "../../../assets/icons/indexIcons";
import "./index.css";

export const TextCham = ({ text }) => {
  return (
    <div className="text-main-left-total">
      <p className="text-total-visit">{text}</p>
      <Tooltip title="Thông tin chi tiết">
        <ChamThan className="tooltip-icon" />
      </Tooltip>
    </div>
  );
};
