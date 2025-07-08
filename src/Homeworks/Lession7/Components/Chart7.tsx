import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Dot
} from "recharts"

const data = [
  { day: 14, value: 180 },
  { day: 15, value: 220 },
  { day: 16, value: 200 },
  { day: 17, value: 240 },
  { day: 18, value: 232 },
  { day: 19, value: 210 },
]

export default function Chart7() {
  return (
    <div className="bg-purple-600 text-white rounded-xl p-4 h-[300px] flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">3,240</h2>
        <p className="text-sm opacity-80">Patients this month</p>
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#ffffff99" fontSize={12} />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", color: "#000" }}
            labelStyle={{ color: "#000" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={2}
            dot={{ r: 4, fill: "#fff" }}
            activeDot={{ r: 6, fill: "#fff", stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
