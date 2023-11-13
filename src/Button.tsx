// Button.jsx

import React, { FC } from "react";

type Props = {
    handleClick?: any;    
    children?: any;    
}



const Button : FC<Props> = ({handleClick  , children}) => {
  console.log("Button Component Renders - ", { children });
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;