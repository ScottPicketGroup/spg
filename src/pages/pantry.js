import React from "react";
import Seo from "../components/seo";
import { useTheme } from "styled-components";



const Pantry = (props) => {
  const theme = useTheme();

  return theme ? (
    <div theme={theme}>
      <Seo title="Scott Pickett Pantry" />
   
  SP Pantry1
    </div>
  ) : (
    <div></div>
  );
};

export default Pantry;
