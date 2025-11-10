import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Radio, Edit, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';

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
  const [isUpdateScoreOpen, setIsUpdateScoreOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [score1, setScore1] = useState('');
  const [score2, setScore2] = useState('');

  const handleUpdateScore = (game) => {
    setSelectedGame(game);
    setScore1(game.score1.toString());
    setScore2(game.score2.toString());
    setIsUpdateScoreOpen(true);
  };

  const handleSaveScore = () => {
    if (selectedGame) {
      // Here you would typically make an API call to update the score
      const updatedGames = liveGames.map(game => {
        if (game.id === selectedGame.id) {
          return {
            ...game,
            score1: parseInt(score1),
            score2: parseInt(score2)
          };
        }
        return game;
      });
      // Update the state (in a real app, this would be handled by your state management solution)
      liveGames.splice(0, liveGames.length, ...updatedGames);
    }
    setIsUpdateScoreOpen(false);
  };

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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-slate-700 cursor-pointer text-slate-500 hover:text-slate-300 text-lg"
                    onClick={() => handleUpdateScore(game)}
                  >
                    <Edit className="w-5 h-5 mr-2" />
                    Update Score
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

      </Tabs>

      <Dialog open={isUpdateScoreOpen} onOpenChange={setIsUpdateScoreOpen}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white">
          <DialogHeader>
            <DialogTitle>Update Score</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-slate-400">{selectedGame?.team1}</span>
              <Input
                id="score1"
                value={score1}
                onChange={(e) => setScore1(e.target.value)}
                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="text-slate-400">{selectedGame?.team2}</span>
              <Input
                id="score2"
                value={score2}
                onChange={(e) => setScore2(e.target.value)}
                className="col-span-3 bg-slate-800 border-slate-700 text-white"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsUpdateScoreOpen(false)}
              className="border-slate-700 text-slate-300"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveScore}
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              Save changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
