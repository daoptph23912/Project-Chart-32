import React from "react";
import { ChamThan } from "../../../assets/icons/indexIcons";
import "./index.css";
export const TextCham = ({ text }) => {
  return (
    <div className="text-main-left-total">
      <p className="text-total-visit">{text}</p>
      <ChamThan />
    </div>
  );
};
