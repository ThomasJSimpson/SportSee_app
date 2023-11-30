import { React, useState, useEffect } from "react";
import { userService } from "../_services/userService.js";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

export default function Performance({ id, isMocked }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getPerformance(setData, id, isMocked);
  }, [setData, id, isMocked]);
  if (data) {
    console.log(data);
  }
  return (
    data && (
      <div className="performance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="68.44%" data={data.data}>
            <PolarGrid gridType="polygon" radialLines={false} />
            <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}
