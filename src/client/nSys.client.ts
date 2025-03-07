import { Workspace, Players, Teams } from "@rbxts/services";

const player : Player = Players.LocalPlayer;
const hum : Instance = player.WaitForChild("Character").WaitForChild("Humanoid");

const team : Instance | undefined = Teams.FindFirstChild("Neutral");
const tem : Instance | undefined = Teams.FindFirstChild("SWAT");
const nSpawn : Instance | undefined = Workspace.FindFirstChild("nSpawn");

if(tem && tem.IsA("Team")){
    player.Team = tem;
}

if(hum && hum.IsA("Humanoid")){
    hum.Died.Connect(() => {
        player.SetAttribute("KIA", true);
    });
}

player.AttributeChanged.Connect((attr) => {
    if(attr.match("KIA")){
        const KIA : AttributeValue | undefined = player.GetAttribute("KIA");
        if (KIA && team && team.IsA('Team') && nSpawn && nSpawn.IsA('SpawnLocation')){
            player.Team = team;
            player.RespawnLocation = nSpawn;
            player.Destroy();
        }
    }
});