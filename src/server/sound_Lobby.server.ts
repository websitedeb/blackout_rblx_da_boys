import { Workspace, ServerStorage } from "@rbxts/services";

const soundPart : Instance | undefined = Workspace.FindFirstChild("Model")?.FindFirstChild("Sound");
const sound : Instance | undefined = ServerStorage.FindFirstChild("Amber Glow");

if ((soundPart && soundPart.IsA("Part")) && (sound && sound.IsA("Sound"))){
    sound.Parent = soundPart;
    sound.Looped = true;
    sound.Volume = 2;
    sound.Play();
}