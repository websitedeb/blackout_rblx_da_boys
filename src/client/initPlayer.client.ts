import { Players, Teams, Workspace } from "@rbxts/services";

const nSpawn = Workspace.WaitForChild("nSpawn") as SpawnLocation;

Players.LocalPlayer.SetAttribute("KIA", false);
Players.LocalPlayer.Team = Teams.WaitForChild("Neutral") as Team;
Players.LocalPlayer.RespawnLocation = nSpawn;
Players.LocalPlayer.Character?.MoveTo(nSpawn.Position);