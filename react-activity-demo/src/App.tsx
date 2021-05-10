import * as React from "react";
import "./App.css";
import Demo from "./components/Demo";

const App: React.VoidFunctionComponent = () => {
  return (
    <div className="app-container">
      <div className="header">
        <div className="header-title">
          <h1>React Activity Indicators</h1>
        </div>
        <div className="header-links">
          <a href="https://github.com/lukevella/react-activity">
            View on Github
          </a>
        </div>
      </div>
      <Demo />
      <div className="credit">
        <div className="credit-text">
          Designed & Developed <br />
          by <a href="http://lukevella.com">Luke Vella</a>
        </div>
      </div>
    </div>
  );
};

export default App;
