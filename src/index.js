import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    const latitude = this.state.lat;
    const errorMessage = this.state.errorMessage;

    return (
      <div>
        {latitude ? (
          <SeasonDisplay latitude={latitude} />
        ) : errorMessage ? (
          `Error: ${errorMessage}`
        ) : (
          <Spinner message={"PLEASE ACCEPT LOCATION REQUEST"} />
        )}
      </div>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
