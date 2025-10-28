import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Trophy, Medal, Award, TrendingUp, TrendingDown } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

const basketballStandings = [
  { rank: 1, team: 'Warriors', wins: 12, losses: 2, points: 1248, avgPoints: 89.1, streak: 'W5', change: 0 },
  { rank: 2, team: 'Lakers', wins: 11, losses: 3, points: 1205, avgPoints: 86.1, streak: 'W3', change: 1 },
  { rank: 3, team: 'Thunder', wins: 10, losses: 4, points: 1189, avgPoints: 84.9, streak: 'L1', change: -1 },
  { rank: 4, team: 'Eagles', wins: 9, losses: 5, points: 1156, avgPoints: 82.6, streak: 'W2', change: 0 },
  { rank: 5, team: 'Hawks', wins: 8, losses: 6, points: 1123, avgPoints: 80.2, streak: 'L2', change: 0 },
  { rank: 6, team: 'Blazers', wins: 6, losses: 8, points: 1089, avgPoints: 77.8, streak: 'W1', change: 1 },
];

const volleyballStandings = [
  { rank: 1, team: 'Phoenix', wins: 14, losses: 1, sets: 42, avgSets: 2.8, streak: 'W8', change: 0 },
  { rank: 2, team: 'Dragons', wins: 12, losses: 3, sets: 38, avgSets: 2.5, streak: 'W4', change: 0 },
  { rank: 3, team: 'Sharks', wins: 10, losses: 5, sets: 34, avgSets: 2.3, streak: 'L1', change: 0 },
  { rank: 4, team: 'Dolphins', wins: 7, losses: 8, sets: 28, avgSets: 1.9, streak: 'W2', change: 1 },
];

const topScorers = [
  { rank: 1, name: 'James Miller', team: 'Warriors', points: 342, avgPoints: 24.4, games: 14 },
  { rank: 2, name: 'Chris Johnson', team: 'Lakers', points: 318, avgPoints: 22.7, games: 14 },
  { rank: 3, name: 'Mike Davis', team: 'Thunder', points: 294, avgPoints: 21.0, games: 14 },
  { rank: 4, name: 'Tom Wilson', team: 'Eagles', points: 276, avgPoints: 19.7, games: 14 },
  { rank: 5, name: 'Alex Brown', team: 'Hawks', points: 268, avgPoints: 19.1, games: 14 },
];

export function StandingsPage() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-slate-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-700" />;
      default:
        return null;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-3xl mb-2">Standings & Leaderboards</h1>
        <p className="text-slate-400">Team rankings and player statistics</p>
      </div>

      <Tabs defaultValue="basketball">
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="basketball">Basketball</TabsTrigger>
          <TabsTrigger value="volleyball">Volleyball</TabsTrigger>
          <TabsTrigger value="scorers">Top Scorers</TabsTrigger>
        </TabsList>

        <TabsContent value="basketball" className="mt-6">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Basketball League Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-800 hover:bg-transparent">
                    <TableHead className="text-slate-400">Rank</TableHead>
                    <TableHead className="text-slate-400">Team</TableHead>
                    <TableHead className="text-slate-400 text-center">W</TableHead>
                    <TableHead className="text-slate-400 text-center">L</TableHead>
                    <TableHead className="text-slate-400 text-center">Win %</TableHead>
                    <TableHead className="text-slate-400 text-center">Avg Pts</TableHead>
                    <TableHead className="text-slate-400 text-center">Streak</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {basketballStandings.map((team) => (
                    <TableRow key={team.rank} className="border-slate-800 hover:bg-slate-800/50">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getRankIcon(team.rank) || <span className="text-slate-400 w-5">{team.rank}</span>}
                          {team.change !== 0 && (
                            team.change > 0 ? (
                              <TrendingUp className="w-4 h-4 text-green-500" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-500" />
                            )
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-white">{team.team}</TableCell>
                      <TableCell className="text-center text-green-500">{team.wins}</TableCell>
                      <TableCell className="text-center text-red-500">{team.losses}</TableCell>
                      <TableCell className="text-center text-slate-300">
                        {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}%
                      </TableCell>
                      <TableCell className="text-center text-slate-300">{team.avgPoints}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={team.streak.startsWith('W') ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'}>
                          {team.streak}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="volleyball" className="mt-6">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Volleyball League Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-800 hover:bg-transparent">
                    <TableHead className="text-slate-400">Rank</TableHead>
                    <TableHead className="text-slate-400">Team</TableHead>
                    <TableHead className="text-slate-400 text-center">W</TableHead>
                    <TableHead className="text-slate-400 text-center">L</TableHead>
                    <TableHead className="text-slate-400 text-center">Win %</TableHead>
                    <TableHead className="text-slate-400 text-center">Sets Won</TableHead>
                    <TableHead className="text-slate-400 text-center">Streak</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {volleyballStandings.map((team) => (
                    <TableRow key={team.rank} className="border-slate-800 hover:bg-slate-800/50">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getRankIcon(team.rank) || <span className="text-slate-400 w-5">{team.rank}</span>}
                        </div>
                      </TableCell>
                      <TableCell className="text-white">{team.team}</TableCell>
                      <TableCell className="text-center text-green-500">{team.wins}</TableCell>
                      <TableCell className="text-center text-red-500">{team.losses}</TableCell>
                      <TableCell className="text-center text-slate-300">
                        {((team.wins / (team.wins + team.losses)) * 100).toFixed(1)}%
                      </TableCell>
                      <TableCell className="text-center text-slate-300">{team.sets}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={team.streak.startsWith('W') ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'}>
                          {team.streak}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scorers" className="mt-6">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Top Scorers - Basketball</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topScorers.map((player) => (
                <div key={player.rank} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 text-center">
                      {getRankIcon(player.rank) || <span className="text-slate-400">{player.rank}</span>}
                    </div>
                    <Avatar className="bg-purple-600">
                      <AvatarFallback className="bg-purple-600 text-white">
                        {getInitials(player.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-white">{player.name}</p>
                      <p className="text-slate-400 text-sm">{player.team}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-slate-400 text-sm">Total Pts</p>
                      <p className="text-white text-xl">{player.points}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Avg Pts</p>
                      <p className="text-purple-400 text-xl">{player.avgPoints}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Games</p>
                      <p className="text-slate-300 text-xl">{player.games}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
