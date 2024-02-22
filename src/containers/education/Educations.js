import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

const thisTheme = {
  body: "#FFFFEB",
  text: "#003F2F",
  highlight: "#dddf00",
  dark: "#00072D",
  secondaryText: "#4CA58F",
  imageHighlight: "#55a630",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#007f5f",
  headerColor: "#55a63077",
};

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Education
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={thisTheme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
