import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Users,
  Volleyball,
  ChevronLeft,
  UserPlus,
  Plus,
  Trash2,
  Dribbble,
  Globe,
  Crown,
  Box,
  Table,
  Disc,
  Grid3x3,
  Zap,
} from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// ✅ Type definitions
type Team = {
  id: string;
  name: string;
  players: string[];
};

type Sport = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  teams: Team[];
};

// ✅ Initial sports data
const initialSportsData: Sport[] = [
  {
    id: "basketball_men",
    name: "Basketball Men",
    icon: Dribbble,
    teams: [
      {
        id: "team1",
        name: "Lakers",
        players: ["LeBron James", "Anthony Davis", "Russell Westbrook"],
      },
      {
        id: "team2",
        name: "Warriors",
        players: ["Stephen Curry", "Klay Thompson", "Draymond Green"],
      },
    ],
  },
  {
    id: "soccer_mixed",
    name: "Soccer Mixed",
    icon: Globe,
    teams: [
      {
        id: "team1",
        name: "Patriots",
        players: ["Tom Brady", "Julian Edelman", "Rob Gronkowski"],
      },
      {
        id: "team2",
        name: "Packers",
        players: ["Aaron Rodgers", "Davante Adams", "Aaron Jones"],
      },
    ],
  },
  {
    id: "volleyball_men",
    name: "Volleyball Men",
    icon: Volleyball,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "volleyball_women",
    name: "Volleyball Women",
    icon: Volleyball,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "basketball_women",
    name: "Basketball Women",
    icon: Dribbble,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "rubiks",
    name: "Rubik's Cube",
    icon: Box,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "chess",
    name: "Chess",
    icon: Crown,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "table_tennis",
    name: "Table Tennis",
    icon: Table,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "frisbee_mixed",
    name: "Frisbee Mixed",
    icon: Disc,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "scrabble",
    name: "Scrabble",
    icon: Grid3x3,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
  {
    id: "esports",
    name: "E-Sports",
    icon: Zap,
    teams: [
      {
        id: "team1",
        name: "Beach Volleyballers",
        players: ["Player 1", "Player 2", "Player 3"],
      },
      {
        id: "team2",
        name: "Indoor Warriors",
        players: ["Player A", "Player B", "Player C"],
      },
    ],
  },
];

export function TeamsAndPlayers() {
  const [sportsData, setSportsData] = useState<Sport[]>(initialSportsData);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isAddTeamOpen, setIsAddTeamOpen] = useState(false);
  const [isAddPlayerOpen, setIsAddPlayerOpen] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleSportSelect = (sportId: string) => {
    setSelectedSport(sportId);
    setSelectedTeam(null);
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleBack = () => {
    if (selectedTeam) {
      setSelectedTeam(null);
    } else if (selectedSport) {
      setSelectedSport(null);
    }
  };

  const handleAddTeam = () => {
    if (newTeamName.trim() && selectedSport) {
      setSportsData((prevData) =>
        prevData.map((sport) =>
          sport.id === selectedSport
            ? {
                ...sport,
                teams: [
                  ...sport.teams,
                  {
                    id: `team${sport.teams.length + 1}`,
                    name: newTeamName,
                    players: [],
                  },
                ],
              }
            : sport
        )
      );
      setNewTeamName("");
      setIsAddTeamOpen(false);
    }
  };

  const handleAddPlayer = () => {
    if (newPlayerName.trim() && selectedTeam && selectedSport) {
      setSportsData((prevData) =>
        prevData.map((sport) =>
          sport.id === selectedSport
            ? {
                ...sport,
                teams: sport.teams.map((team) =>
                  team.id === selectedTeam.id
                    ? {
                        ...team,
                        players: [...team.players, newPlayerName],
                      }
                    : team
                ),
              }
            : sport
        )
      );

      setSelectedTeam((prev) =>
        prev
          ? { ...prev, players: [...prev.players, newPlayerName] }
          : prev
      );

      setNewPlayerName("");
      setIsAddPlayerOpen(false);
    }
  };

  const handleDeleteTeam = (teamId: string) => {
    if (window.confirm("Are you sure you want to delete this team?")) {
      setSportsData((prevData) =>
        prevData.map((sport) =>
          sport.id === selectedSport
            ? {
                ...sport,
                teams: sport.teams.filter((team) => team.id !== teamId),
              }
            : sport
        )
      );
    }
  };

  const handleDeletePlayer = (playerName: string) => {
    if (window.confirm("Are you sure you want to remove this player?")) {
      setSportsData((prevData) =>
        prevData.map((sport) =>
          sport.id === selectedSport
            ? {
                ...sport,
                teams: sport.teams.map((team) =>
                  team.id === selectedTeam?.id
                    ? {
                        ...team,
                        players: team.players.filter((p) => p !== playerName),
                      }
                    : team
                ),
              }
            : sport
        )
      );

      setSelectedTeam((prev) =>
        prev
          ? { ...prev, players: prev.players.filter((p) => p !== playerName) }
          : prev
      );
    }
  };

  const selectedSportData = sportsData.find(
    (sport) => sport.id === selectedSport
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {(selectedSport || selectedTeam) && (
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </Button>
          )}
          <div>
            <h1 className="text-white text-4xl lg:text-5xl mb-2">
              Teams & Players
            </h1>
            <p className="text-slate-400 text-lg lg:text-2xl">
              {selectedTeam
                ? `${selectedTeam.name} - ${selectedSportData?.name}`
                : selectedSport
                ? `${selectedSportData?.name} Teams`
                : "Select a sport to view teams and players"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {selectedSport && !selectedTeam && (
          <Dialog open={isAddTeamOpen} onOpenChange={setIsAddTeamOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Team
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 text-white border-slate-800">
              <DialogHeader>
                <DialogTitle>
                  Add New Team to {selectedSportData?.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    id="teamName"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Enter team name"
                    onKeyDown={(e) => e.key === "Enter" && handleAddTeam()}
                  />
                </div>
                <Button
                  onClick={handleAddTeam}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Add Team
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {selectedTeam && (
          <Dialog open={isAddPlayerOpen} onOpenChange={setIsAddPlayerOpen}>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Player
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 text-white border-slate-800">
              <DialogHeader>
                <DialogTitle>
                  Add Player to {selectedTeam?.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="playerName">Player Name</Label>
                  <Input
                    id="playerName"
                    value={newPlayerName}
                    onChange={(e) => setNewPlayerName(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Enter player name"
                    onKeyDown={(e) => e.key === "Enter" && handleAddPlayer()}
                  />
                </div>
                <Button
                  onClick={handleAddPlayer}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Add Player
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Step 1: Select Sport */}
      {!selectedSport && (
        <div>
          <h2 className="text-white text-2xl mb-4 font-semibold">
            Select a Sport
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sportsData.map((sport) => {
              const totalPlayers = sport.teams.reduce(
                (sum, team) => sum + team.players.length,
                0
              );
              return (
                <Card
                  key={sport.id}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur cursor-pointer hover:border-purple-600 transition-all"
                  onClick={() => handleSportSelect(sport.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <sport.icon className="text-purple-500 w-12 h-12" />
                      <Badge
                        variant="outline"
                        className="text-slate-300 border-slate-600"
                      >
                        {sport.teams.length} teams
                      </Badge>
                    </div>
                    <p className="text-white text-2xl font-semibold mb-1">
                      {sport.name}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {totalPlayers} total players
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 2: List Teams for selected Sport */}
      {selectedSport && !selectedTeam && selectedSportData && (
        <div>
          <h2 className="text-white text-2xl mb-4 font-semibold">
            {selectedSportData.name} Teams (
            {selectedSportData.teams.length})
          </h2>
          {selectedSportData.teams.length === 0 ? (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-12 text-center">
                <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 text-lg mb-2">No teams yet</p>
                <p className="text-slate-500">
                  Click "Add Team" to create your first team
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {selectedSportData.teams.map((team) => (
                <Card
                  key={team.id}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur hover:border-purple-600 transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="flex items-center gap-3 flex-1 cursor-pointer"
                        onClick={() => handleTeamSelect(team)}
                      >
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Users className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-white text-xl font-semibold">
                            {team.name}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {team.players.length} players
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleDeleteTeam(team.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-slate-300 text-sm border-slate-600"
                    >
                      {selectedSportData.name}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Step 3: List Players for the selected Team */}
      {selectedTeam && (
        <div>
          <h2 className="text-white text-2xl mb-4 font-semibold">
            {selectedTeam.name} Roster ({selectedTeam.players.length})
          </h2>
          {selectedTeam.players.length === 0 ? (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-12 text-center">
                <UserPlus className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 text-lg mb-2">No players yet</p>
                <p className="text-slate-500">
                  Click "Add Player" to add your first player
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedTeam.players.map((player, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur group hover:border-purple-600 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-white text-lg font-medium">
                            {player}
                          </p>
                          <Badge
                            variant="outline"
                            className="text-xs text-slate-400 border-slate-600 mt-1"
                          >
                            {selectedSportData?.name}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleDeletePlayer(player)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

