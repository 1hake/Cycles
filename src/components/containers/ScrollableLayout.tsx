import React, { useContext, useRef } from "react";

import { MyContext } from "../../stores/Context";
import { Panel } from "./Panel";
import { HomePage } from "./HomePage";
import { menus } from "../../data/content";
import { Header } from "../elements/HeaderMenu";
import { SinglePage } from "./SinglePage";
import { Contact } from "./ContactPage";

interface LayoutProps {
  id: number
}

export const ScrollableLayout = ({ id }: LayoutProps) => {
  const { panelOpen } = useContext(MyContext);
  return (
    <>
      <div style={{ backgroundColor: "white", top: "0", left: "0" }}>
        <Header></Header>
        {/* <SinglePage></SinglePage> */}


        <Panel color={'yellow'} name={false}>
          Cycles
        </Panel>
        <Panel color={'red'} name={"Découvrir"}>
          Exemples
        </Panel>
        <Panel color={'blue'} name={"Écrire"}>

        </Panel>

      </div>
    </>
  );
};
