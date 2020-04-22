import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColourContext from "../context/ColourContext";
import LanguageSelector from "./LanguageSelector";
class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
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
