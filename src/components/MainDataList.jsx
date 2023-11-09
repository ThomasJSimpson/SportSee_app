import { React, useEffect } from "react";
import { userService } from "../_services/userService.js";
import { useState } from "react";
import MainDataItem from "./MainDataItem.jsx";

export default function MainDataList({ id }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    userService.getMainData(setData, id);
  }, [setData, id]);
  return (
    data && (
      <div className="main_data">
        <MainDataItem data={data.keyData} type={"cal"} />
        <MainDataItem data={data.keyData} type={"prot"} />
        <MainDataItem data={data.keyData} type={"carb"} />
        <MainDataItem data={data.keyData} type={"fat"} />
      </div>
    )
  );
}
