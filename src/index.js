import React from "react";
import reactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const latitude = this.state.lat;
    const errorMessage = this.state.errorMessage;

    return (
      <div>
        {latitude ? (
          <SeasonDisplay latitude={latitude} />
        ) : errorMessage ? (
          `Error: ${errorMessage}`
        ) : (
          "LOADING..."
        )}
      </div>
    );
  }
}

reactDom.render(<App />, document.querySelector("#root"));
