import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const data = [
  { name: 'Oct 2019', Inpatients: 1500, Outpatients: 400 },
  { name: 'Nov 2019', Inpatients: 2000, Outpatients: 800 },
  { name: 'Dec 2019', Inpatients: 3000, Outpatients: 1000 },
  { name: 'Jan 2020', Inpatients: 2500, Outpatients: 700 },
  { name: 'Feb 2020', Inpatients: 2200, Outpatients: 600 },
  { name: 'Mar 2020', Inpatients: 2700, Outpatients: 900 },
  { name: 'Apr 2020', Inpatients: 2400, Outpatients: 750 },
  { name: 'May 2020', Inpatients: 2900, Outpatients: 1100 },
  { name: 'Jun 2020', Inpatients: 2600, Outpatients: 850 },
  { name: 'Jul 2020', Inpatients: 3100, Outpatients: 1200 },
]

export default function TrendChart() {
  return (
    <div className="bg-white p-8 rounded shadow h-[350px] lg:col-span-3">
        <h2 className="text-2xl font-semibold mb-4">Patient Trends</h2>
      <ResponsiveContainer width="100%" height="100%" className="pb-8">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Inpatients" fill="#7c3aed" />
          <Bar dataKey="Outpatients" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
