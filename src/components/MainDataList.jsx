import { React, useEffect } from "react";
import { userService } from "../_services/userService.js";
import { useState } from "react";
import MainDataItem from "./MainDataItem.jsx";

export default function MainDataList({ id, isMocked }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    userService.getMainData(setData, id, isMocked);
  }, [setData, id, isMocked]);
  return (
    data && (
      <>
        <MainDataItem data={data.keyData} type={"cal"} />
        <MainDataItem data={data.keyData} type={"prot"} />
        <MainDataItem data={data.keyData} type={"carb"} />
        <MainDataItem data={data.keyData} type={"fat"} />
      </>
    )
  );
}
