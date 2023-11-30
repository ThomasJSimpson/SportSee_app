export default function Selector({ data }) {
  const { text, option1, option2, setState, state } = data;

  return (
    <div className="selector">
      <label className="selector_label" htmlFor="mySelect">
        {text}
      </label>
      <select id="mySelect" value={state[Object.keys(state)[0]]} onChange={setState}>
        <option value={option1[Object.keys(option1)[0]]}>{Object.keys(option1)[0]}</option>
        <option value={option2[Object.keys(option2)[0]]}>{Object.keys(option2)[0]}</option>
      </select>
      <p>
        {Object.keys(state)[0]}: {state[Object.keys(state)[0]].toString()}
      </p>
    </div>
  );
}
