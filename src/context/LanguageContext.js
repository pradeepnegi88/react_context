import React from "react";
const Context = React.createContext("dutch");

export class LanguageStore extends React.Component {
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
