import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColourContext from "../context/ColourContext";

class Button extends React.Component {
  render() {
    // const buttonText = t his.context === "english" ? "Submit" : "Voorleggen";
    return (
      <div>
        <ColourContext.Consumer>
          {color => (
            <button className={`ui button  ${color}`}>
              <LanguageContext.Consumer>
                {value => (value === "english" ? "Submit" : "Voorleggen")}
              </LanguageContext.Consumer>
            </button>
          )}
        </ColourContext.Consumer>
      </div>
    );
  }
}
export default Button;
