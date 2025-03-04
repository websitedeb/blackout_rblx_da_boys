import { Workspace, ReplicatedStorage } from "@rbxts/services";

const Spawns : Instance | undefined = Workspace.FindFirstChild("Spawns");
const Required : Instance | undefined = ReplicatedStorage.FindFirstChild("RoundSys");

const duration : number = 3 // in mins

if (Spawns && Required){
    const progress : Instance | undefined = Required.FindFirstChild("Progress");
    const status : Instance | undefined = Required.FindFirstChild("Status");
    const part1 : Instance | undefined = Spawns.FindFirstChild("1");
    const part2 : Instance | undefined = Spawns.FindFirstChild("2");

    if (progress && status && part1 && part2){
        if(progress.IsA("BoolValue") && status.IsA("StringValue")){
            
        }
    }
}