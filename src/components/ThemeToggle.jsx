import React, { useContext, useState } from "react";
import { AppContext } from "./Context";


const ThemeToggle = () => {
  const { cohortName, theme } = useContext(AppContext);
  const [toggleTheme,setToggleTheme]=useState(theme);

  const hamdleToggleTheme=()=>{
   setToggleTheme( toggleTheme === "Dark" ? "Light" : "Dark" )
  }

  return (
    <>
      <h3>cohortName : {cohortName}</h3>
      <h3>theme : {toggleTheme}</h3>
     <button onClick={hamdleToggleTheme}>Change Toggle Theme</button>
    </>
  );
}; 

export default ThemeToggle;
