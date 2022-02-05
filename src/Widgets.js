import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  // JSX so we don't repeat the process
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {/* Calling function and giving values for heading and subtitle */}
      {newsArticle("Tesla hits new highs", "Cars & Auto - 2100 readers")}
      {newsArticle("Coronavirus: BiH updates", "Top news - 6969 readers")}
      {newsArticle("Bitcoin breaks $30k", "Crypto - 92 readers")}
      {newsArticle("React is going viral", "Hell yeah! - 9721 readers")}
    </div>
  );
}

export default Widgets;
