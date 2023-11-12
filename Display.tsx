// Display.jsx

import React, { FC }  from "react";

type Props = {
    text?: any;    
    displayvalue?: any;    
}


const Display : FC<Props> = ({ text, displayvalue }) => {
  console.log("Display Component Rendered ", { displayvalue });

  return (
    <p>
      This person's {text} is {displayvalue}
    </p>
  );
};

export default Display;
