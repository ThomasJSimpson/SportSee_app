import { React, useEffect, useState } from "react";
import { userService } from "../_services/userService.js";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AverageSession({ id, isMocked }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    userService.getAverage(setData, id, isMocked);
  }, [setData, id, isMocked]);

  const renderTooltip = (props) => {
    const { active, payload } = props;

    if (active && payload.length > 0) {
      console.log(payload);

      if (payload[0].payload.day === "") {
        return null;
      }
      const sessionLength = payload[0].value;
      return (
        <div className="custom-tooltip">
          <p>{sessionLength}min</p>
        </div>
      );
    }
    return null;
  };

  const renderDot = ({ cx, cy, index }) => {
    if (index < 2 || index > 8) return null;
    return <circle cx={cx} cy={cy} r={5} fill="#fff" stroke="#fff" strokeWidth={10} strokeOpacity={0.2} />;
  };

  const CustomizedCursor = ({ points, width, height, payloadIndex }) => {
    if (payloadIndex < 2 || payloadIndex > 8) {
      return;
    }
    const { x, y } = points[0];
    return <rect x={x} y={y - 150} width={width} height={height + 200} fill="#000" opacity=".1" />;
  };

  return (
    data && (
      <div className="average">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.sessions}>
            <text className="content">
              <tspan x="13%" y="17%">
                Durée moyenne des
              </tspan>
              <tspan x="13%" y="26%">
                sessions
              </tspan>
            </text>
            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fa7a7a" />
                <stop offset="35%" stopColor="#fa7a7a" />
                <stop offset="80%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tickSize={5} tick={{ fill: "#FFFFFF", opacity: "0.5", fontSize: "1.2rem", lineHeight: "24px", fontWeight: "500" }} padding={{ right: -40, left: -40 }} />
            <YAxis dataKey="sessionLength" type="number" domain={["dataMin-40", "dataMax+80"]} hide={true} />
            <Tooltip content={renderTooltip} cursor={<CustomizedCursor />} />
            <Line dataKey="sessionLength" type="natural" strokeWidth={2} dot={false} activeDot={renderDot} stroke="url(#linear)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  );
}
