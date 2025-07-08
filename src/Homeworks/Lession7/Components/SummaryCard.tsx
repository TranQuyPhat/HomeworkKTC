import React from 'react'
import { FaGalacticRepublic, FaRepublican } from 'react-icons/fa'
type StatCardProps = {
  icon: React.ReactNode
  value: string
  label: string
  iconBg: string
}
export default function SummaryCard({icon, value, label, iconBg }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          <p className="text-xl text-gray-500">{label}</p>
        </div>
      </div>
      <div className="text-gray-400 text-lg">⋯</div>
    </div>
  )
}