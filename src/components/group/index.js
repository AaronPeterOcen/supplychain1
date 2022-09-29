import React from "react";
import "./group.css";
import Groupcards from "../groupcards";

function Group() {
  return (
    <div className="group">
      <Groupcards />
      <Groupcards />
    </div>
  );
}

export default Group;
