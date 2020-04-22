import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColourContext from "../context/ColourContext";

class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>Select a language</div>
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.onLanguageChange("dutch")}
        ></i>
        <LanguageContext.Provider value={this.state.language}>
          <ColourContext.Provider value="primary">
            <UserCreate />
          </ColourContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}
export default App;
