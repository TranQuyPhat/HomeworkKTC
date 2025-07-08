import React from 'react'
import { Heart, Brain, Scissors } from "lucide-react"

export const divisions = [
  {
    name: "Cardiology",
    count: 247,
    icon: <Heart className="w-5 h-5" />,
  },
  {
    name: "Neurology",
    count: 164,
    icon: <Brain className="w-5 h-5" />,
  },
  {
    name: "Surgery",
    count: 86,
    icon: <Scissors className="w-5 h-5" />,
  },
]

type Props = {}

export default function Chart6({}: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 h-[300px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Patients By Division</h2>
        <span className="text-gray-400 text-xs">▼</span>
      </div>

      <div className="flex items-center text-gray-400 text-sm mb-2 px-1">
        <span className="w-6"></span>
        <span className="flex-1">DIVISION</span>
        <span className="text-right w-10">PT.</span>
      </div>

      <div className="space-y-2">
        {divisions.map((d) => (
          <div key={d.name} className="flex items-center text-gray-700 px-1 p-2">
            <span className="w-6 text-gray-400">{d.icon}</span>
            <span className="flex-1">{d.name}</span>
            <span className="font-semibold w-10 text-right">{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}