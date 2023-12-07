import { React, useEffect } from "react";
import { userService } from "../_services/userService.js";
import { useState } from "react";
import protIcon from "../assets/protein-icon.svg";
import calIcon from "../assets/calories-icon.svg";
import carbIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";
import MainDataItem from "./MainDataItem.jsx";

export default function MainDataList({ id, isMocked }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    userService.getMainData(setData, id, isMocked);
  }, [setData, id, isMocked]);
  let calories, proteins, carbohydrates, fat;
  if (data) {
    calories = {
      src: calIcon,
      alt: "icon calories",
      dataName: "Calories",
      dataNum: `${data.keyData.calorieCount.toLocaleString("en-US")}kCal `,
    };
    proteins = {
      src: protIcon,
      alt: "icon protein",
      dataName: "Protéines",
      dataNum: `${data.keyData.proteinCount.toLocaleString("en-US")}kCal `,
    };
    carbohydrates = {
      src: carbIcon,
      alt: "icon carbs",
      dataName: "Glucides",
      dataNum: `${data.keyData.carbohydrateCount.toLocaleString("en-US")}kCal `,
    };
    fat = {
      src: fatIcon,
      alt: "icon fat",
      dataName: "Lipides",
      dataNum: `${data.keyData.lipidCount.toLocaleString("en-US")}kCal `,
    };
  }

  return (
    data && (
      <>
        <MainDataItem data={calories} />
        <MainDataItem data={proteins} />
        <MainDataItem data={carbohydrates} />
        <MainDataItem data={fat} />
      </>
    )
  );
}
