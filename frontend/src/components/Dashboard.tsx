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
  { id: 1, team1: 'ArtsComm Phoenix', team2: 'Tycoons', time: 'Today, 3:00 PM', sport: 'Basketball', status: 'live' },
  { id: 2, team1: 'SocSci Stallions', team2: 'Golden Scions', time: 'Today, 5:00 PM', sport: 'Basketball', status: 'upcoming' },
  { id: 3, team1: 'ArtsComm Pheonix', team2: 'Golden Scions', time: 'Tomorrow, 2:00 PM', sport: 'Volleyball', status: 'upcoming' },
  { id: 4, team1: 'Tycoons', team2: 'ArtsComm Phoenix', time: 'Tomorrow, 4:00 PM', sport: 'Football', status: 'upcoming' },
];

const recentResults = [
  { id: 1, team1: 'Golden Scions', score1: 78, team2: 'Tycoons', score2: 72, sport: 'Basketball' },

  { id: 2, team1: 'SocSci Stallions', score1: 103, team2: 'ArtsComm Phoenix', score2: 81, sport: 'Basketball' },

  { id: 3, team1: 'Tycoons', score1: 99, team2: 'Golden Scions', score2: 94, sport: 'Basketball' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-2xl mb-2 font-espn">Dashboard</h1>
        <p className="text-slate-400 text-2xl">Welcome back! Here's what's happening today.</p>
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
                    <p className="text-slate-400 text-2xl">{kpi.title}</p>
                    <p className="text-white text-xl mt-1">{kpi.value}</p>
                    <p className="text-green-500 text-xl mt-1">{kpi.change}</p>
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
            <CardTitle className="text-white text-2xl">Upcoming Games</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingGames.map((game) => (
              <div key={game.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-xl">{game.team1}</span>
                    <span className="text-slate-500 text-xl">vs</span>
                    <span className="text-white text-xl">{game.team2}</span>
                  </div>
                  <p className="text-slate-400 text-lg">{game.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-slate-300 text-lg border-slate-600">
                    {game.sport}
                  </Badge>
                  {game.status === 'live' && (
                    <Badge className="bg-red-600 text-lg hover:bg-red-700">
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
            <CardTitle className="text-white text-2xl">Recent Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentResults.map((result) => (
              <div key={result.id} className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-white text-xl">{result.team1}</span>
                    <span className="text-purple-400 text-xl">{result.score1}</span>
                  </div>
                  <Badge variant="outline" className="text-slate-300 text-lg border-slate-600">
                    {result.sport}
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-xl">{result.team2}</span>
                  <span className="text-slate-400 text-xl">{result.score2}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* League Progress */}
      <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Season Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between mb-2 text-2xl">
              <span className="text-slate-300 text-xl">Basketball League</span>
              <span className="text-slate-400 text-xl">78% Complete</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300 text-xl">Volleyball League</span>
              <span className="text-slate-400 text-xl">65% Complete</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-slate-300 text-xl">Football League</span>
              <span className="text-slate-400 text-xl">52% Complete</span>
            </div>
            <Progress value={52} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
