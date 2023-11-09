import { React, useState, useEffect } from "react";
import { userService } from "../_services/userService.js";
import MainDataList from "../components/MainDataList.jsx";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [id, setID] = useState(12);

  useEffect(() => {
    userService.getWelcome(setData, id);
  }, [setData, id]);

  return (
    <>
      {data && (
        <>
          <div className="welcome">
            <p className="welcome_name">
              Bonjour <span className="welcome_name--name">{data.userInfos.firstName}</span>
            </p>
            <p className="welcome_mess">Félicitation ! Vous avez explosé vos objectifs hier 🤙</p>
          </div>
          <div className="dashboard">
            <MainDataList id={id} />
          </div>
        </>
      )}
    </>
  );
}
