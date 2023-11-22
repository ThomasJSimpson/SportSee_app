import { Link } from "react-router-dom";
import Selector from "../components/Selector.jsx";

export default function SettingPage(props) {
  const { handleId, handleData, id, isMocked } = props;

  const obj1 = {
    text: "Veuillez choisir un profil pour vous identifier:",
    option1: { "Karl (défaut)": 12 },
    option2: { Cécilia: 18 },
    state: { ID: id },
    setState: handleId,
  };
  const obj2 = {
    text: "Utiliser l'application avec des données:",
    option1: { "mockées (défaut)": true },
    option2: { "via l'API": false },
    state: { isMocked: isMocked },
    setState: handleData,
  };

  return (
    <div className="test1 test7">
      <p className="test2">Bonjour</p>
      <Selector data={obj1} />
      <Selector data={obj2} />
      {/* <div className="test8">
        <label className="test9" htmlFor="mySelect">
          Veuillez choisir un profil pour vous identifier:
        </label>
        <select className="test7" id="mySelect" value={id} onChange={handleId}>
          <option value={12}>Karl (défaut)</option>
          <option value={18}>Cécilia</option>
        </select>
        {<p>ID: {id}</p>}
      </div>
      <div className="test8">
        <label className="test9" htmlFor="mySelect">
          Utiliser l'application avec des données:
        </label>
        <select className="test7" id="mySelect" value={isMocked} onChange={handleData}>
          <option value={true}> mockées (défaut)</option>
          <option value={false}>via l'API</option>
        </select>
        {<p>isMocked: {isMocked.toString()}</p>}
      </div> */}

      <Link className="test6" to={`/user/${id}`}>
        <p>Se Connecter</p>
      </Link>
    </div>
  );
}
