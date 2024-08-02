import React from "react";
import { Slider } from "antd";
import "./style.css"

const Slide: React.FC = () => (
  <Slider
    className="custom-slider"
    range={{ draggableTrack: true }}
    defaultValue={[20, 50]}
  />
);

export default Slide;
