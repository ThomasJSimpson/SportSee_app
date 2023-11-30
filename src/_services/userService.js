import fetchData from "./fetchData.js";
import WelcomeData from "../models/welcomeData.js";
import ScoreData from "../models/scoreData.js";
import MainData from "../models/mainData.js";
import PerformanceData from "../models/performanceData.js";
import AverageSessionsData from "../models/averageSessionsData.js";
import ActivityData from "../models/activityData.js";
import mockedMainData12 from "../mock/id12/main_data.json";
import mockedActivity12 from "../mock/id12/activity.json";
import mockedAverageSession12 from "../mock/id12/averageSession.json";
import mockedPerformance12 from "../mock/id12/performance.json";
import mockedMainData18 from "../mock/id18/main_data.json";
import mockedActivity18 from "../mock/id18/activity.json";
import mockedAverageSession18 from "../mock/id18/averageSession.json";
import mockedPerformance18 from "../mock/id18/performance.json";

export const userService = {
  getWelcome,
  getScore,
  getMainData,
  getPerformance,
  getAverage,
  getActivity,
};

const baseUrl = (id) => {
  return `http://localhost:3000/user/${id}`;
};

const checkJson = (jsonData) => {
  if (jsonData === undefined) {
    return;
  }
};

const alertMess = "Données non trouvées via l'API. Veuillez rafraîchir la page pour utiliser les données mockées (par défaut) ou retournez à la page de connexion.";

async function getWelcome(setData, id, isMocked) {
  const jsonData = isMocked === true ? (id === "12" ? mockedMainData12 : id === "18" ? mockedMainData18 : null) : await fetchData(baseUrl(id));

  if (jsonData === undefined) {
    alert(alertMess);
    return;
  }
  setData(new WelcomeData(jsonData));
}

async function getScore(setData, id, isMocked) {
  const jsonData = isMocked === true ? (id === "12" ? mockedMainData12 : id === "18" ? mockedMainData18 : null) : await fetchData(baseUrl(id));
  checkJson(jsonData);
  setData([new ScoreData(jsonData)]);
}

async function getMainData(setData, id, isMocked) {
  const jsonData = isMocked === true ? (id === "12" ? mockedMainData12 : id === "18" ? mockedMainData18 : null) : await fetchData(baseUrl(id));
  checkJson(jsonData);
  setData(new MainData(jsonData));
}

async function getPerformance(setData, id, isMocked) {
  const jsonData = isMocked === true ? (id === "12" ? mockedPerformance12 : id === "18" ? mockedPerformance18 : null) : await fetchData(`${baseUrl(id)}/performance`);
  checkJson(jsonData);
  setData(new PerformanceData(jsonData));
}

async function getAverage(setData, id, isMocked) {
  const jsonData = isMocked === true ? (id === "12" ? mockedAverageSession12 : id === "18" ? mockedAverageSession18 : null) : await fetchData(`${baseUrl(id)}/average-sessions`);
  checkJson(jsonData);
  setData(new AverageSessionsData(jsonData));
}

async function getActivity(setData, id, isMocked) {
  const jsonData = isMocked === true ? (id === "12" ? mockedActivity12 : id === "18" ? mockedActivity18 : null) : await fetchData(`${baseUrl(id)}/activity`);
  checkJson(jsonData);
  setData(new ActivityData(jsonData));
}
