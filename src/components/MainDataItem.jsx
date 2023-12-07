import { React } from "react";

export default function MainDataItem({ data }) {
  const { src, alt, dataName, dataNum } = data;

  return (
    <div className="main_data-item">
      <img src={src} alt={alt} />
      <div>
        <p className="main_data-item--num">{dataNum}</p>
        <p className="main_data-item--name">{dataName}</p>
      </div>
    </div>
  );
}
