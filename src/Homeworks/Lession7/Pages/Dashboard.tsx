import React from "react";
import SummaryCard from "../Components/SummaryCard";
import TrendChart from "../Components/TrendChart";
import GenderPieChart from "../Components/GenderPieChart";
import TimeAdmittedChart from "../Components/TimeAdmittedChart";
import Chart7 from "../Components/Chart7";
import Chart6 from "../Components/Chart6";
import { Bed, Users, Wallet, Ambulance } from "lucide-react";

type Props = {};

export const stats = [
  {
    label: "Total Patients",
    value: "3,256",
    icon: <Bed className="w-5 h-5 text-purple-700" />,
    iconBg: "bg-purple-100",
  },
  {
    label: "Available Staff",
    value: "394",
    icon: <Users className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    label: "Avg Treat. Costs",
    value: "$2,536",
    icon: <Wallet className="w-5 h-5 text-orange-500" />,
    iconBg: "bg-orange-100",
  },
  {
    label: "Available Cars",
    value: "38",
    icon: <Ambulance className="w-5 h-5 text-rose-600" />,
    iconBg: "bg-rose-100",
  },
];

export default function Dashboard({}: Props) {
  return (
    <div className="bg-gray-200">
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item) => (
            <SummaryCard
              key={item.label}
              label={item.label}
              value={item.value}
              icon={item.icon}
              iconBg={item.iconBg}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <TrendChart />
          <GenderPieChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TimeAdmittedChart />
          <Chart6 />
          <Chart7 />
        </div>
      </div>
    </div>
  );
}
