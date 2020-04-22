import React from "react";
import LanguageContext from "../context/LanguageContext";
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const fieldText = this.context.language === "english" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{fieldText}</label>
        <input />
      </div>
    );
  }
}
export default Field;
