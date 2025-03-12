import { Players, ReplicatedStorage } from "@rbxts/services";

const player = Players.LocalPlayer;
const swapTeamEvent = ReplicatedStorage.WaitForChild("SwapTeamEvent") as RemoteEvent;

player.CharacterAdded.Connect((char) => {
    const hum = char.FindFirstChild("Humanoid") as Humanoid | undefined;

    if (hum) {
        hum.Died.Connect(() => {
            player.SetAttribute("KIA", true);
        });
    }
});

player.AttributeChanged.Connect((attr) => {
    if (attr === "KIA" && player.GetAttribute("KIA") === true) {
        swapTeamEvent.FireServer();
    }
});
