import fetchData from "./fetchData.js";
import WelcomeData from "../models/welcomeData.js";
import MainData from "../models/mainData.js";

export const userService = {
  getWelcome,
  // getScore,
  getMainData,
  // getPerformance,
  // getAverage,
  // getActivity,
};

async function getWelcome(setData, id) {
  const baseUrl = `http://localhost:3000/user/${id}`;
  const jsonData = await fetchData(baseUrl);
  setData(new WelcomeData(jsonData));
}

async function getMainData(setData, id) {
  const baseUrl = `http://localhost:3000/user/${id}`;
  const jsonData = await fetchData(baseUrl);
  setData(new MainData(jsonData));
}
