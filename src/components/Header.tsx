import React from "react";

const Header: React.FC = () => {
  const url =
    "https://images.squarespace-cdn.com/content/v1/5eb1edd795cde451fabc22c8/1590113908834-LHPUZYVBZJ0U1R1LSR1Y/VIVE_r3_05072020_white+%282%29.png?format=500w";
  return (
    <header>
      <img src={url} alt="Vive Blog" /> <span>Downtown Sunnyvale Blog</span>
    </header>
  );
};

export default Header;
