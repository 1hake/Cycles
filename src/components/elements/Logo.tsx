import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";
import { scrollToRef } from "../utils/tools";
import LogoSVG from "../utils/logoSVG";
import { Style } from "../../types/common";



const classes: Style = {
  logo: {
    marginLeft: "30px",
    fontSize: '3em',
    fontWeight: 'bold',
    color: 'black'
  },
};

export const Logo = () => {
  const {
    dispatch,
    state: { refs, currentPage },
  } = useContext(MyContext);
  return currentPage !== 'Contact' ? (

    <div
      onClick={() => {
        console.log(refs);
        scrollToRef(refs[Object.keys(refs)[0]]);
        dispatch({ type: "SET_CURRENT_PAGE", data: Object.keys(refs)[0] });
      }}
      style={classes.logo}
    >Cycles</div>
  ) : <div style={classes.logo}></div>;
};
