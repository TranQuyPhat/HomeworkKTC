import React from "react";
import ForeCastCard from "./ForeCastCard";
type ForecastItem = {
  time: string;
  temp_c: number;
  condition: {
    icon: string;
    text: string;
  };
};
type Props = {
  forecast: ForecastItem[];
};
export default function ForeCastPanel({ forecast }: Props) {
  if (!forecast || forecast.length === 0) return null;
  console.log(forecast);

  return (
    <div className=" bg-gray-50 rounded-4xl p-4 mx-2">
      <div className="text-3xl mx-4">Now</div>
      <div className="flex justify-around px-2 w-full ">
        {forecast.map((hour, i) => {
          const date = new Date(hour.time);
          const timeLabel =
            i === 0
              ? "Now"
              : date.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                });

          return (
            <ForeCastCard
              key={i}
              temp={hour.temp_c}
              time={timeLabel}
              icon={
                <img
                  src={hour.condition.icon}
                  alt="icon"
                  className="w-24 h-24"
                />
              }
            />
          );
        })}
        {/* <ForestCard />
        <ForestCard />
        <ForestCard />
        <ForestCard /> */}
      </div>
    </div>
  );
}
