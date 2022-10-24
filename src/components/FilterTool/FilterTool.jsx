import * as React from "react";
import RangeSlider from "./RangeSlider";
import DateRange from "./DateRange";
import "./FilterTool.css";
export default function FilterTool() {
  return (
    <div className="filterTool">
      <RangeSlider />
      <DateRange />
    </div>
  );
}
