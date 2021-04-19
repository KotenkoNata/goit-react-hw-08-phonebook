import React from "react";

import Section from "../Section";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => (
  <Section>
    <Loader
      type="ThreeDots"
      color="#303f9f"
      height={50}
      width={50}
      className="loader"
      margin="20 auto"
      text-align="center"
    />
  </Section>
);

export default Loading;
