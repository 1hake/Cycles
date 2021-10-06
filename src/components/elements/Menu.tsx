import React, { useContext, useEffect } from "react";
import { MyContext } from "../../stores/Context";
import { menus } from "../../data/content";
import { AnimatedMenuItem } from "../containers/AnimatedMenuItem";
import { scrollToRef } from "../utils/tools";
import { IParallax } from "@react-spring/parallax";
import { Style } from "../../types/common";

interface MenuItemType {
  index: number;
  name?: string | null;
}

const classes: Style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  menuItem: {
    padding: "15px",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "black",

    transition: '0.5s ease-in-out'
  },
  selected: {
    padding: "15px",
    color: "white",
    fontSize: "1.5em",
    fontWeight: "bold",
    backgroundColor: 'black',
    transition: '0.5s ease-in-out'
  },
};

const MenuItem = ({ name, index }: MenuItemType) => {
  const {
    state: { refs, currentPage },
    dispatch,
  } = useContext(MyContext);

  if (!name) {
    return;
  }

  return (
    <div
      onClick={() => {
        dispatch({ type: "SET_CURRENT_PAGE", data: name });
        scrollToRef(refs[name]);
      }}
      style={currentPage === name ? classes.selected : classes.menuItem}
    >
      {name}
    </div>
  );
};

export const Menu = () => {
  const {
    state: { refs, currentPage },
  } = useContext(MyContext);

  return (
    <div style={classes.container}>
      {menus.map((item, index) => {
        return index !== 0 && <MenuItem name={item.name} index={index} />;
      })}
    </div>
  );
};
