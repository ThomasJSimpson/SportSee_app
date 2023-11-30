import { Link } from "react-router-dom";
import Selector from "../components/Selector.jsx";

export default function SettingPage(props) {
  const { handleId, handleData, id, isMocked } = props;

  const optionId = {
    text: "Veuillez choisir un profil pour vous identifier:",
    option1: { "Karl (défaut)": 12 },
    option2: { Cécilia: 18 },
    state: { ID: id },
    setState: handleId,
  };
  const optionData = {
    text: "Utiliser l'application avec des données:",
    option1: { "mockées (défaut)": true },
    option2: { "via l'API": false },
    state: { isMocked: isMocked },
    setState: handleData,
  };

  return (
    <section className="setting-page">
      <p className="setting-page_name">Bonjour</p>
      <Selector data={optionId} />
      <Selector data={optionData} />
      <Link className="connection-link" to={`/user/${id}`}>
        <p>Se Connecter</p>
      </Link>
    </section>
  );
}
