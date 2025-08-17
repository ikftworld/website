import React from 'react'
import { CartesianGrid, Legend, PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const marketData = [
  { name: 'BaaS Market 2023', value: 20 },
  { name: 'Projected 2030', value: 80 },
]

const aiAdoptionData = [
  { year: '2020', adoption: 20 },
  { year: '2022', adoption: 45 },
  { year: '2024', adoption: 65 },
  { year: '2026', adoption: 85 },
]

const COLORS = ['#0b6cf6', '#7e5aff']

const banksData = [
  { geography: 'US', banks: 4462 },
  { geography: 'Europe', banks: 4927 },
  { geography: 'Worldwide', banks: 25000 },
]

const AIBankingChart = () => {
  const data = [
    { year: 2025, US: 7.1, Europe: 4.5, Asia: 6.0 },
    { year: 2026, US: 10.5, Europe: 6.3, Asia: 8.7 },
    { year: 2027, US: 15.6, Europe: 8.9, Asia: 12.5 },
    { year: 2028, US: 22.8, Europe: 12.5, Asia: 18.2 },
    { year: 2029, US: 33.4, Europe: 17.4, Asia: 25.6 },
  ];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value}B`} />
        <Legend />
        <Bar dataKey="US" fill="#8884d8" name="US" />
        <Bar dataKey="Europe" fill="#82ca9d" name="Europe" />
        <Bar dataKey="Asia" fill="#ffc658" name="Asia" />
      </BarChart>
    </ResponsiveContainer>
  );
};


const ProjectedRevenueChart = () => {
  const data = [
    { year: 2025, revenue: 7.84 },
    { year: 2026, revenue: 11.87 },
    { year: 2027, revenue: 17.81 },
    { year: 2028, revenue: 26.71 },
    { year: 2029, revenue: 38.98 },
  ];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip formatter={(value) => `$${value}B`} />
        <Legend />
        <Bar dataKey="revenue" fill="#8884d8" name="Projected Revenue (USD Billions)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default function InvestorsPage() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Investor Overview</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8">
        IKFT is building the world’s first agentic Banking-as-a-Service platform, where AI-driven infrastructure can
        make any bank programmable and adaptive. The market is massive — global BaaS revenues are projected to grow
        4x+ this decade — and AI adoption in finance is accelerating.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-8">
        <div>
          <h2 className="font-semibold mb-4">BaaS Market Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={marketData} dataKey="value" nameKey="name" outerRadius={80} label>
                {marketData.map((entry, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-500 mt-2">
            The global BaaS market is projected to grow from ~$20B in 2023 to ~$80B by 2030.
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-4">AI Adoption in Finance</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={aiAdoptionData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="adoption" fill="#0b6cf6" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-500 mt-2">
            AI adoption among banks and fintechs is growing rapidly, with expectations of over 80% adoption by 2026.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-8">
        <div>
          <AIBankingChart />
          <p className="text-sm text-slate-500 mt-2">
            Spengings for AI adoption in banking
          </p>
        </div>

        <div>
          <ProjectedRevenueChart />
          <p className="text-sm text-slate-500 mt-2">
            Projected BaaS revenues for a startup providing agentic Banking-as-a-Service
          </p>
        </div>

      </div>
      <div className="mt-12">
        <h2 className="font-semibold mb-4">Competitive Landscape</h2>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          Current BaaS providers focus on compliance, payments, and basic APIs. None are natively designed for AI-driven,
          autonomous finance. IKFT is uniquely positioned at the intersection of fintech infrastructure and agentic AI.
        </p>
      </div>
    </section>
  )
}

