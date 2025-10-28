import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Trophy, Activity } from 'lucide-react';

const gamesPerWeek = [
  { week: 'Week 1', games: 12 },
  { week: 'Week 2', games: 15 },
  { week: 'Week 3', games: 18 },
  { week: 'Week 4', games: 14 },
  { week: 'Week 5', games: 16 },
  { week: 'Week 6', games: 20 },
];

const attendanceData = [
  { week: 'Week 1', attendance: 75 },
  { week: 'Week 2', attendance: 82 },
  { week: 'Week 3', attendance: 78 },
  { week: 'Week 4', attendance: 88 },
  { week: 'Week 5', attendance: 85 },
  { week: 'Week 6', attendance: 92 },
];

const sportDistribution = [
  { name: 'Basketball', value: 45, color: '#8b5cf6' },
  { name: 'Volleyball', value: 30, color: '#3b82f6' },
  { name: 'Football', value: 25, color: '#10b981' },
];

const teamPerformance = [
  { team: 'Warriors', wins: 12, losses: 2 },
  { team: 'Lakers', wins: 11, losses: 3 },
  { team: 'Thunder', wins: 10, losses: 4 },
  { team: 'Eagles', wins: 9, losses: 5 },
  { team: 'Hawks', wins: 8, losses: 6 },
];

const insightCards = [
  { title: 'Most Active Day', value: 'Friday', subtitle: '28 games scheduled', icon: Activity, color: 'text-purple-500' },
  { title: 'Avg Game Duration', value: '1.5 hrs', subtitle: '12% faster than last season', icon: TrendingUp, color: 'text-blue-500' },
  { title: 'Peak Attendance', value: '245', subtitle: 'Warriors vs Lakers', icon: Users, color: 'text-green-500' },
  { title: 'Championships', value: '3', subtitle: 'Active tournaments', icon: Trophy, color: 'text-orange-500' },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-3xl mb-2">Analytics & Insights</h1>
        <p className="text-slate-400">Track performance and trends across your league</p>
      </div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insightCards.map((insight) => {
          const Icon = insight.icon;
          return (
            <Card key={insight.title} className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">{insight.title}</p>
                    <p className="text-white text-3xl mt-2">{insight.value}</p>
                    <p className="text-slate-500 text-sm mt-2">{insight.subtitle}</p>
                  </div>
                  <div className={`p-3 bg-slate-800 rounded-lg ${insight.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Games Per Week */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Games Scheduled Per Week</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gamesPerWeek}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="games" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Attendance Trend */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Attendance Trend (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="week" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line type="monotone" dataKey="attendance" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sport Distribution */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Games by Sport</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sportDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sportDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      color: '#fff'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {sportDistribution.map((sport) => (
                <div key={sport.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sport.color }} />
                  <span className="text-slate-300 text-sm">{sport.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Performance */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Top Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis dataKey="team" type="category" stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Legend />
                <Bar dataKey="wins" fill="#10b981" radius={[0, 8, 8, 0]} />
                <Bar dataKey="losses" fill="#ef4444" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
