import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../_services/userService.js";
import Activity from "../components/Activity.jsx";
import MainDataList from "../components/MainDataList.jsx";
import AverageSession from "../components/AverageSession.jsx";
import Performance from "../components/Performance.jsx";
import Score from "../components/Score.jsx";

export default function Dashboard({ isMocked }) {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getWelcome(setData, id, isMocked);
  }, [setData, id, isMocked]);

  return (
    data && (
      <>
        <section className="welcome">
          <p className="welcome_name">
            Bonjour <span className="welcome_name--name">{data.userInfos.firstName}</span>
          </p>
          <p className="welcome_mess">Félicitation ! Vous avez explosé vos objectifs hier 🤙</p>
        </section>
        <section className="dashboard-charts">
          <div className="dashboard-charts_bigchart">
            <Activity id={id} isMocked={isMocked} />
            <div className="dashboard-charts_smallcharts">
              <AverageSession id={id} isMocked={isMocked} />
              <Performance id={id} isMocked={isMocked} />
              <Score id={id} isMocked={isMocked} />
            </div>
          </div>
          <div className="main_data">
            <MainDataList id={id} isMocked={isMocked} />
          </div>
        </section>
      </>
    )
  );
}
