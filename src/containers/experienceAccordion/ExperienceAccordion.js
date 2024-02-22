import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { experience } from "../../portfolio";
import { Fade } from "react-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";

const thisTheme = {
  body: "#EDF9FE",
  text: "#001C55",
  highlight: "#A6E1FA",
  dark: "#00072D",
  secondaryText: "#7F8DAA",
  imageHighlight: "#0E6BA8",
  compImgHighlight: "#E6E6E6",
  jacketColor: "#0A2472",
  headerColor: "#0E6BA877",
};

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="40px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Experience
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {experience.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={thisTheme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Experience;
