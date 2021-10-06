import React, {
  useRef,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { MyContext } from "../../stores/Context";
import { menus } from "../../data/content";
import { Style } from "../../types/common";

interface PanelProps {
  name: string | null,
  color: string,
  children: React.ReactNode,
}

const classes: Style = {
  panel: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "40px",
  },
};

export const Panel = ({ name, color, children }: PanelProps) => {
  const { dispatch } = useContext(MyContext);
  const myRef = useRef(null);

  useEffect(() => {
    console.log("stored ref");
    dispatch({ type: "STORE_REF", ref: myRef, name: name });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      {children}
    </div>
  );
};
