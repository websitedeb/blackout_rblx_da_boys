// kill system, puts player to Neutral group
import { Players, Teams, RunService, Workspace } from "@rbxts/services";

const player : Player = Players.LocalPlayer;

const swat : Instance | undefined = Teams.FindFirstChild("SWAT");
const neutral : Instance | undefined = Teams.FindFirstChild("Neutral");

const nSpawn : Instance | undefined = Workspace.FindFirstChild("nSpawn");
const sSpawn : Instance | undefined = Workspace.FindFirstChild("sSpawn");

const test : Boolean = true; //activate when testing killing system

player.SetAttribute("KIA", false);

player.CharacterAdded.Connect((char) => {
    if(player.GetAttribute("KIA") === false && test){
        if(sSpawn && sSpawn.IsA("SpawnLocation")){
            player.RespawnLocation = sSpawn;
        }
        if(swat && swat.IsA('Team')){
            player.Team = swat;
            player.TeamColor = new BrickColor('Navy blue');
        }
    }
    const hum = char.WaitForChild("Humanoid");
    if (hum && hum.IsA("Humanoid")){
        hum.Died.Connect(() => {
            player.SetAttribute("KIA", true);
        });
    }
})

RunService.Heartbeat.Connect((_) => {
    if(player.GetAttribute("KIA") === true){
        if(nSpawn && nSpawn.IsA('SpawnLocation')){
            player.RespawnLocation = nSpawn;
        }
        if(neutral && neutral.IsA("Team")){
            player.Team = neutral
            player.TeamColor = new BrickColor("Institutional white");
        }
    }
});