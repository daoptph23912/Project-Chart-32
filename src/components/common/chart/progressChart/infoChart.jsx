import React from "react";
import "./index.scss"; // Import CSS nếu cần

const getRgbaColor = (opacity) => `rgba(116, 89, 217, ${opacity})`;

const DetailData = ({ data }) => {
  return (
    <div className="detailData">
      {data.map((item, index) => (
        <div key={index} className="dataItem">
          <div className="text-status">
            <div
              className="colorIndicator"
              style={{
                backgroundColor:
                  item.label === "Online"
                    ? getRgbaColor(20)
                    : getRgbaColor(0.2),
              }}
            />
            <span>{item.label} </span>
          </div>
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize:'14px'
            }}
          >
            {item.value} users
          </span>
        </div>
      ))}
    </div>
  );
};

export default DetailData;
