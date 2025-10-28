import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Calendar, TrendingUp, Users } from 'lucide-react';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const kpiData = [
  { title: 'Total Games', value: '156', change: '+12%', icon: Trophy, color: 'text-purple-500' },
  { title: 'Active Teams', value: '24', change: '+3', icon: Users, color: 'text-blue-500' },
  { title: 'This Week', value: '18', change: '6 pending', icon: Calendar, color: 'text-green-500' },
  { title: 'Avg Attendance', value: '89%', change: '+5%', icon: TrendingUp, color: 'text-orange-500' },
];

const upcomingGames = [
  { id: 1, team1: 'Warriors', team2: 'Lakers', time: 'Today, 3:00 PM', sport: 'Basketball', status: 'live' },
  { id: 2, team1: 'Thunder', team2: 'Blazers', time: 'Today, 5:00 PM', sport: 'Basketball', status: 'upcoming' },
  { id: 3, team1: 'Phoenix', team2: 'Dragons', time: 'Tomorrow, 2:00 PM', sport: 'Volleyball', status: 'upcoming' },
  { id: 4, team1: 'Titans', team2: 'Knights', time: 'Tomorrow, 4:00 PM', sport: 'Football', status: 'upcoming' },
];

const recentResults = [
  { id: 1, team1: 'Eagles', score1: 78, team2: 'Hawks', score2: 72, sport: 'Basketball' },
  { id: 2, team1: 'Sharks', score1: 3, team2: 'Dolphins', score2: 1, sport: 'Volleyball' },
  { id: 3, team1: 'Lions', score1: 21, team2: 'Tigers', score2: 14, sport: 'Football' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-3xl mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's what's happening today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title} className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">{kpi.title}</p>
                    <p className="text-white text-3xl mt-2">{kpi.value}</p>
                    <p className="text-green-500 text-sm mt-2">{kpi.change}</p>
                  </div>
                  <div className={`p-3 bg-slate-800 rounded-lg ${kpi.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Games */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Upcoming Games</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingGames.map((game) => (
              <div key={game.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white">{game.team1}</span>
                    <span className="text-slate-500">vs</span>
                    <span className="text-white">{game.team2}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{game.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-slate-300 border-slate-600">
                    {game.sport}
                  </Badge>
                  {game.status === 'live' && (
                    <Badge className="bg-red-600 hover:bg-red-700">
                      Live
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Results */}
        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Recent Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentResults.map((result) => (
              <div key={result.id} className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-white">{result.team1}</span>
                    <span className="text-purple-400">{result.score1}</span>
                  </div>
                  <Badge variant="outline" className="text-slate-300 border-slate-600">
                    {result.sport}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white">{result.team2}</span>
                  <span className="text-slate-400">{result.score2}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* League Progress */}
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-white">Season Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">Basketball League</span>
              <span className="text-slate-400">78% Complete</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">Volleyball League</span>
              <span className="text-slate-400">65% Complete</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300">Football League</span>
              <span className="text-slate-400">52% Complete</span>
            </div>
            <Progress value={52} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
