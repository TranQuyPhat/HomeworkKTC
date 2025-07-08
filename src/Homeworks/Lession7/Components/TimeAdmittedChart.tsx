import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { time: '07 am', value: 60 },
  { time: '08 am', value: 113 },
  { time: '09 am', value: 80 },
  { time: '10 am', value: 130 },
  { time: '11 am', value: 120 },
  { time: '12 pm', value: 140 },
]

export default function TimeAdmittedChart() {
  return (
    <div className="bg-white p-4 rounded shadow h-[300px] lg:col-span-2">
        <h2 className="text-lg font-semibold mb-4">Time Admitted</h2>
      <ResponsiveContainer width="100%" height="100%" className="p-8">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
