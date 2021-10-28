import React from "react";

import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
    season: "summer",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake",
    season: "winter",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? seasonConfig.summer : seasonConfig.winter;
  } else {
    return lat > 0 ? seasonConfig.winter : seasonConfig.summer;
  }
};

const SeasonDisplay = ({ latitude }) => {
  const { text, iconName, season } = getSeason(latitude, new Date().getMonth());
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
