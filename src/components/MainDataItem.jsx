import { React } from "react";
import protIcon from "../assets/protein-icon.svg";
import calIcon from "../assets/calories-icon.svg";
import carbIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";

export default function MainDataItem({ data, type }) {
  // data && console.log(data, type);
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data;
  const styles = {
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    userSelect: "none",
  };
  const styles2 = {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "rgba(116, 121, 140, 1)",
    userSelect: "none",
  };
  let src, alt, dataName, dataNum;
  switch (type) {
    case "cal":
      src = calIcon;
      alt = "icon calories";
      dataName = "Calories";
      dataNum = `${calorieCount.toLocaleString("en-US")}kCal `;
      break;
    case "prot":
      src = protIcon;
      alt = "icon protein";
      dataName = "Protéines";
      dataNum = `${proteinCount.toLocaleString("en-US")}g`;
      break;
    case "carb":
      src = carbIcon;
      alt = "icon carbs";
      dataName = "Glucides";
      dataNum = `${carbohydrateCount.toLocaleString("en-US")}g`;
      break;
    case "fat":
      src = fatIcon;
      alt = "icon fat";
      dataName = "Lipides";
      dataNum = `${lipidCount.toLocaleString("en-US")}g`;
      break;
    default:
      console.log("no type");
  }

  return (
    <div className="main_data-item">
      <img src={src} alt={alt} />
      <div>
        <p style={styles}>{dataNum}</p>
        <p style={styles2}>{dataName}</p>
      </div>
    </div>
  );
}
