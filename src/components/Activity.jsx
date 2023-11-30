import { React, useEffect, useState } from "react";
import { userService } from "../_services/userService.js";
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";

export default function Activity({ id, isMocked }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getActivity(setData, id, isMocked);
  }, [setData, id, isMocked]);

  const renderTooltip = ({ payload }) => {
    return (
      <ul className="tooltip">
        {payload.map((entry, index) => (
          <li key={index}>{entry.value + entry.unit}</li>
        ))}
      </ul>
    );
  };

  const renderLegend = ({ payload }) => {
    return (
      <div className="legend">
        <h3>Activité quotidienne</h3>
        <ul className="legend-list">
          {payload.map((entry, index) => (
            <li key={index} className="legend-item">
              {entry.value}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {data && (
        <div className="barchart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.sessions} barSize={7} barGap={8}>
              <CartesianGrid vertical={false} strokeDasharray="1 1" />

              <XAxis dataKey="day" tickLine={false} stroke="#9b9eac" dy={14} tick={{ fontSize: 14 }} padding={{ left: -46, right: -46 }} />

              <YAxis dataKey="kilogram" yAxisId="kilogram" axisLine={false} tickLine={false} orientation="right" allowDecimals={false} stroke="#9b9eac" dx={40} domain={[(dataMin) => Math.floor(dataMin - 1), (dataMax) => Math.floor(dataMax + 1)]} tickCount={4} tick={{ fontSize: 14 }} />

              <YAxis dataKey="calories" yAxisId="calories" domain={[0, "dataMax+50"]} hide />

              <Tooltip content={renderTooltip} cursor={{ opacity: 0.5, backgroundColor: "#C4C4C4" }} offset={66} />

              <Legend verticalAlign="top" content={renderLegend} />

              <Bar dataKey="kilogram" yAxisId="kilogram" unit="kg" name="Poids (kg)" fill="#282D30" radius={[3, 3, 0, 0]} />
              <Bar dataKey="calories" yAxisId="calories" unit="kCal" name="Calories brûlées (kCal)" fill="#E60000" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
}
