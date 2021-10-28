import React from "react";

const Spinner = ({ message }) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "LOADING...",
};

export default Spinner;
