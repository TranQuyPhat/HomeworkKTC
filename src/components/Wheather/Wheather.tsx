import React from "react";
type Props = {
  data: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  } | null;
};
export default function Wheather({data}:Props) {
  return (
    <div className="flex justify-between items-center py-16 px-6 mt-8 text-white rounded-2xl mb-7">
      <div className="flex flex-col justify-center items-center">
        <div className="text-8xl  leading-none font-bold">{data?.temp_c}</div>
        <div className="text-2xl font-normal mt-1">{data?.condition.text}</div>
      </div>

        <img src={data?.condition.icon} alt="" className="w-32 h-32"/>
    </div>
  );
}
