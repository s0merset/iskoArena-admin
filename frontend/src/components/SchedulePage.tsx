import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Plus, Filter, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const scheduleData = [
  { id: 1, date: '2025-10-29', time: '14:00', team1: 'Warriors', team2: 'Lakers', sport: 'Basketball', venue: 'Court A', status: 'scheduled' },
  { id: 2, date: '2025-10-29', time: '16:00', team1: 'Thunder', team2: 'Blazers', sport: 'Basketball', venue: 'Court B', status: 'scheduled' },
  { id: 3, date: '2025-10-30', time: '15:00', team1: 'Phoenix', team2: 'Dragons', sport: 'Volleyball', venue: 'Gym 1', status: 'scheduled' },
  { id: 4, date: '2025-10-30', time: '17:00', team1: 'Titans', team2: 'Knights', sport: 'Football', venue: 'Field 1', status: 'scheduled' },
  { id: 5, date: '2025-10-31', time: '13:00', team1: 'Eagles', team2: 'Hawks', sport: 'Basketball', venue: 'Court A', status: 'scheduled' },
  { id: 6, date: '2025-10-31', time: '15:00', team1: 'Sharks', team2: 'Dolphins', sport: 'Volleyball', venue: 'Gym 2', status: 'scheduled' },
];

export function SchedulePage() {
  const [selectedSport, setSelectedSport] = useState('all');

  const filteredSchedule = selectedSport === 'all' 
    ? scheduleData 
    : scheduleData.filter(game => game.sport === selectedSport);

  const groupByDate = (games: typeof scheduleData) => {
    return games.reduce((acc, game) => {
      if (!acc[game.date]) {
        acc[game.date] = [];
      }
      acc[game.date].push(game);
      return acc;
    }, {} as Record<string, typeof scheduleData>);
  };

  const groupedSchedule = groupByDate(filteredSchedule);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-white text-5xl mb-2 ">Schedule</h1>
          <p className="text-slate-400 text-2xl">Manage and view all scheduled games</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 cursor-pointer hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Game
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white">
            <DialogHeader>
              <DialogTitle>Schedule New Game</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Team 1</Label>
                  <Input className="bg-slate-800 border-slate-700" placeholder="Select team" />
                </div>
                <div className="space-y-2">
                  <Label>Team 2</Label>
                  <Input className="bg-slate-800 border-slate-700" placeholder="Select team" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Sport</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Input type="time" className="bg-slate-800 border-slate-700" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Venue</Label>
                <Input className="bg-slate-800 border-slate-700" placeholder="Enter venue" />
              </div>
              <Button className="w-full bg-purple-600 cursor-pointer hover:bg-purple-700">
                Schedule Game
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={selectedSport} onValueChange={setSelectedSport}>
	<TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-lg flex gap-2">
	    <TabsTrigger
	    value="all"
	    className="text-xl cursor-pointer px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition"
	    >
	    All Sports
	    </TabsTrigger>
	    <TabsTrigger
	    value="Basketball"
	    className="text-xl cursor-pointer px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition"
	    >
	    Basketball
	    </TabsTrigger>
	    <TabsTrigger
	    value="Volleyball"
	    className="text-xl cursor-pointer px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition"
	    >
	    Volleyball
	    </TabsTrigger>
	    <TabsTrigger
	    value="Football"
	    className="text-xl cursor-pointer px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-slate-900 transition"
	    >
	    Football
	    </TabsTrigger>
	 </TabsList>
        <TabsContent value={selectedSport} className="space-y-6 mt-6">
          {Object.entries(groupedSchedule).map(([date, games]) => (
            <Card key={date} className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <CardTitle className="text-white text-2xl">{formatDate(date)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {games.map((game) => (
                  <div key={game.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-800/50 rounded-lg gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-white text-xl">{game.team1}</span>
                        <span className="text-slate-500 text-xl">vs</span>
                        <span className="text-white text-xl">{game.team2}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-slate-400 text-xl">{game.time}</span>
                        <span className="text-slate-400 text-xl">•</span>
                        <span className="text-slate-400 text-xl">{game.venue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-slate-300 border-slate-600 text-xl">
                        {game.sport}
                      </Badge>

        <Dialog>
          <DialogTrigger asChild>
		    <Button variant="outline" size="sm" className="border-slate-700 cursor-pointer text-slate-300 text-xl hover:text-white">
                        Edit
                      </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-800 text-white">
            <DialogHeader>
              <DialogTitle>Edit Game Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Team 1</Label>
                  <Input className="bg-slate-800 border-slate-700" placeholder="Select team" />
                </div>
                <div className="space-y-2">
                  <Label>Team 2</Label>
                  <Input className="bg-slate-800 border-slate-700" placeholder="Select team" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Sport</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-700">
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" className="bg-slate-800 border-slate-700" />
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Input type="time" className="bg-slate-800 border-slate-700" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Venue</Label>
                <Input className="bg-slate-800 border-slate-700" placeholder="Enter venue" />
              </div>
              <Button className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700">
		Save Details
              </Button>
            </div>
          </DialogContent>
        </Dialog>

    <Dialog >
        {/* Trigger Dialog */}
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center w-8 h-8 cursor-pointer bg-red-600 hover:bg-red-700 text-white border border-slate-700"
          >
            <Trash2 className="text-lg" /> 
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-slate-900 border-slate-800 text-white p-8">
          <DialogHeader>
            <DialogTitle>Are you sure you want to delete this game?</DialogTitle>
          </DialogHeader>

          <div className="flex space-x-4 mt-4">
            {/* Yes Button */}
            <Button
              className="flex-1 cursor-pointer bg-red-600 hover:bg-red-700"
            >
              Yes, Delete
            </Button>

            {/* No Button */}
            <Button
              variant="outline"
              className="flex-1 cursor-pointer bg-slate-700 hover:bg-slate-800 text-white"
            >
              No, Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>



	    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
