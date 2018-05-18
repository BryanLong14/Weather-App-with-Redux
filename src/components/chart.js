import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default props => {
  return (
    <div>
      <Sparklines height={150} width={240} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};
