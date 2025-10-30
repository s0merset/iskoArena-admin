import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Radio, Edit, CheckCircle } from 'lucide-react';

const liveGames = [
  { id: 1, team1: 'SocSci Stallions', score1: 78, team2: 'Golden Scions', score2: 72, sport: 'Basketball', quarter: 'Q4', timeLeft: '5:32' },
  { id: 2, team1: 'ArtsComm Phoenix', score1: 2, team2: 'Tycoons', score2: 2, sport: 'Volleyball', set: 'Set 3', timeLeft: 'Live' },
];

const recentGames = [
  { id: 3, team1: 'Tycoons', score1: 78, team2: 'Golden Scions', score2: 72, sport: 'E-sports (DOTA 2)', status: 'final' },
  { id: 4, team1: 'ArtsComm Phoenix', score1: 3, team2: 'Tycoons', score2: 1, sport: 'Soccer Mixed', status: 'final' },
  { id: 5, team1: 'SocSci Stallions', score1: 21, team2: 'Tycoons', score2: 14, sport: 'Football', status: 'final' },
  { id: 6, team1: 'Golden Scions', score1: 89, team2: 'ArtsComm Phoenix', score2: 95, sport: 'Frisbee Mixed', status: 'final' },
  { id: 7, team1: 'SocSci Stallions', score1: 17, team2: 'ArtsComm Phoenix', score2: 20, sport: 'Football', status: 'final' },
];

const upcomingGames = [
  { id: 8, team1: 'SocSci Stallions', team2: 'Tycoons', sport: 'Basketball', time: 'Today, 6:00 PM' },
  { id: 9, team1: 'Golden Scions', team2: 'ArtsComm Phoenix', sport: 'Volleyball', time: 'Tomorrow, 2:00 PM' },
  { id: 10, team1: 'Golden Scions', team2: 'SocSci Stallions', sport: 'Football', time: 'Tomorrow, 4:00 PM' },
];

export function ScoresPage() {
  const [selectedTab, setSelectedTab] = useState('live');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-white text-5xl mb-2 ">Scores & Results</h1>
        <p className="text-slate-400 text-2xl">Live updates and game results</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="bg-slate-900 border border-slate-800">
          <TabsTrigger value="live" className="flex items-center text-xl gap-2 data-[state=active]:bg-white data-[state=active]:text-slate-900 transition cursor-pointer">
            <Radio className="w-4 h-4" />
            Live
            <Badge className="bg-red-600 hover:bg-red-700 ml-1 w-7">{liveGames.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="recent" className="flex items-center text-xl gap-2 data-[state=active]:bg-white data-[state=active]:text-slate-900 transition cursor-pointer">Recent</TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center text-xl gap-2 data-[state=active]:bg-white data-[state=active]:text-slate-900 transition cursor-pointer">Upcoming</TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-4 mt-6">
          {liveGames.map((game) => (
            <Card key={game.id} className="bg-slate-900/50 border-slate-800 backdrop-blur border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-red-600 cursor-pointer text-lg hover:bg-red-700 flex items-center gap-1 w-15 h-7">
                    <Radio className="w-5 h-5" />
                    LIVE
                  </Badge>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-slate-300 text-xl border-slate-600">
                      {game.sport}
                    </Badge>
                    <span className="text-slate-400 text-xl">{game.quarter || game.set}</span>
                    <span className="text-purple-400 text-xl">{game.timeLeft}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-slate-400 text-4xl">Home</p>
                    <p className="text-white text-3xl">{game.team1}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-4xl">Away</p>
                    <p className="text-white text-3xl">{game.team2}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-4">
                  <div className="text-4xl text-purple-400">{game.score1}</div>
                  <div className="text-4xl text-slate-400">{game.score2}</div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="border-slate-700 cursor-pointer text-slate-500 hover:text-slate-300 text-lg">
                    <Edit className="w-5 h-5 mr-2" />
                    Update Score
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-700 cursor-pointer text-slate-500 hover:text-slate-300 text-lg">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4 mt-6">
          {recentGames.map((game) => (
            <Card key={game.id} className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-green-500 text-2xl border-green-500 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    FINAL
                  </Badge>
                  <Badge variant="outline" className="text-slate-300 text-xl border-slate-600">
                    {game.sport}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-white text-2xl flex-1" >{game.team1}</span>
                      <span className={`text-3xl ${game.score1 > game.score2 ? 'text-purple-400' : 'text-slate-500'}`}>
                        {game.score1}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white text-2xl flex-1">{game.team2}</span>
                      <span className={`text-3xl ${game.score2 > game.score1 ? 'text-purple-400' : 'text-slate-500'}`}>
                        {game.score2}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4 mt-6">
          {upcomingGames.map((game) => (
            <Card key={game.id} className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white text-2xl">{game.team1}</span>
                      <span className="text-slate-500 text-2xl">vs</span>
                      <span className="text-white text-2xl">{game.team2}</span>
                    </div>
                    <p className="text-slate-400 text-xl">{game.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-slate-300 text-xl border-slate-600">
                      {game.sport}
                    </Badge>
                    <Button variant="outline" size="sm" className="border-slate-700 text-xl text-slate-300 hover:text-white">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
