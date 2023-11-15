import { React, useState, useEffect } from "react";
import { userService } from "../_services/userService.js";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

export default function Performance({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getPerformance(setData, id);
  }, [setData, id]);

  return (
    <div className="performance">
      {data && (
        <div style={{ width: 258, height: 263 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data.data}>
              {/* pass the props data(array of objects) to RadarChart */}
              <PolarGrid gridType="polygon" radialLines={false} />
              <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
              <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
