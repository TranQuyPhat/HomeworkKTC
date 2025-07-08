import React from "react";

export default function PanelTemp({ data }) {
  if (!data) return null;
  return (
    <div className="flex justify-around items-center rounded-4xl mx-2 bg-gray-50  mb-8 p-8 ">
      <div className="flex flex-col justify-center items-center py-2 ">
        <p className="text-3xl text-gray-600 ">Humidity</p>
        <div className="text-3xl font-bold">{data.humidity}%</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl  text-gray-600  ">Wind</p>
        <div className="text-3xl font-bold">{data.wind_kph} km/h</div>
      </div>
    </div>
  );
}
