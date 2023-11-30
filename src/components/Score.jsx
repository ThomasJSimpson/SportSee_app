import { React, useState, useEffect } from "react";
import { ResponsiveContainer, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { userService } from "../_services/userService.js";

export default function Score({ id, isMocked }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getScore(setData, id, isMocked);
  }, [setData, id, isMocked]);

  return (
    data && (
      <div className="score">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="86.1" barSize={10} startAngle={200} endAngle={-160} data={data}>
            <text className="title" x="30" y="35">
              Score
            </text>
            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            <RadialBar dataKey="score" cornerRadius="5" fill="#ff0000" />
            <circle cx="50%" cy="50%" r="80" fill="#fff"></circle>
            <text className="content">
              <tspan className="percent" x={108} y={129}>{`${data[0].score * 100}%`}</tspan>
              <tspan x={102} y={155}>
                de votre
              </tspan>
              <tspan x={104} y={178}>
                objectif
              </tspan>
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}
