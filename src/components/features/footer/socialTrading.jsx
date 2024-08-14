import React from "react";
import {
  LogoGG,
  LogoGG2,
  LogoGG3,
  LogoGG4,
} from "../../../assets/icons/indexIcons";
import "./socialTrading.scss";

const SocialTradingList = () => {
  const items = [
    { logo: <LogoGG />, name: "Google" },
    { logo: <LogoGG2 />, name: "Foursquare" },
    { logo: <LogoGG3 />, name: "Kickstarter" },
    { logo: <LogoGG4 />, name: "KakaoTalk" },
  ];

  return (
    <div className="social-trading-list">
      {items.map((item, index) => (
        <div key={index} className="social-trading-item">
          <div className="item-logo">{item.logo}</div>
          <div className="item-content">
            <span className="item-category">Stock trading</span>
            <span className="item-name">{item.name}</span>
            <hr className="way-frame-xx" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialTradingList;
