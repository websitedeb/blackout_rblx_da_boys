import { Teams, Workspace, ReplicatedStorage } from "@rbxts/services";

const swapTeamEvent = new Instance("RemoteEvent");
swapTeamEvent.Name = "SwapTeamEvent";
swapTeamEvent.Parent = ReplicatedStorage;

swapTeamEvent.OnServerEvent.Connect((player: Player) => {
    const neutralTeam = Teams.FindFirstChild("Neutral") as Team | undefined;
    const neutralSpawn = Workspace.FindFirstChild("nSpawn") as SpawnLocation | undefined;

    if (neutralTeam && neutralSpawn) {
        player.Team = neutralTeam;
        task.wait(2);
        player.LoadCharacter();
    }
});
