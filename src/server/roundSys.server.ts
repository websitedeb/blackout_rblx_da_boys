import { ReplicatedStorage, Teams } from "@rbxts/services";

const nTeam = Teams.WaitForChild("Neutral") as Team;
const sTeam = Teams.WaitForChild("SWAT") as Team;
const mTeam = Teams.WaitForChild('MAFIA') as Team;

const Required : Instance | undefined = ReplicatedStorage.FindFirstChild("RoundSys");

const duration : number = 3 // in mins

if (nTeam && sTeam && mTeam && Required){
    const progress : Instance | undefined = Required.FindFirstChild("Progress");
    const status : Instance | undefined = Required.FindFirstChild("Status");

    if (progress && status && progress.IsA("BoolValue") && status.IsA("StringValue")){}
}