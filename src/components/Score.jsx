import { React, useState, useEffect } from "react";
import { ResponsiveContainer, PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { userService } from "../_services/userService.js";

export default function Score({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getScore(setData, id);
  }, [setData, id]);

  return (
    data && (
      <div className=" score">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" startAngle={212} endAngle={-212} barSize={10} data={[data]}>
            <text className="title" x="0" y="7%">
              Score
            </text>

            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            <RadialBar dataKey="score" cornerRadius="5" fill="#ff0000" />

            <circle cx="50%" cy="50%" r="38%" fill="#fff"></circle>

            <text className="content">
              <tspan className="percent" x="38.5%" y="49%">{`${data.score * 100}%`}</tspan>
              <tspan x="36%" y="62%">
                de votre
              </tspan>
              <tspan x="37%" y="74%">
                objectif
              </tspan>
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    )
  );
}
