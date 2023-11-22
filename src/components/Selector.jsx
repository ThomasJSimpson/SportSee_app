// import React, { useState } from "react";

export default function Selector({ data }) {
  const { text, option1, option2, setState, state } = data;

  return (
    <div className="test8">
      <label className="test9" htmlFor="mySelect">
        {text}
      </label>
      <select className="test7" id="mySelect" value={state[Object.keys(state)[0]]} onChange={setState}>
        <option value={option1[Object.keys(option1)[0]]}>{Object.keys(option1)[0]}</option>
        <option value={option2[Object.keys(option2)[0]]}>{Object.keys(option2)[0]}</option>
      </select>
      {
        <p>
          {Object.keys(state)[0]}: {state[Object.keys(state)[0]].toString()}
        </p>
      }
    </div>
  );
}
