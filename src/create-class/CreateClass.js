import React from "react";
import './Style.css';
export const CreateClass = (props) => {
  return (
    <div className="create-class">
      <button onClick={props.createNew}>Create New class</button>
    </div>
  );
};
