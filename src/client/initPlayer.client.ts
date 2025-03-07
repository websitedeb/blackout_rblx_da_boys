import { Players } from "@rbxts/services";

Players.LocalPlayer.CharacterAdded.Connect((char) => {
    Players.LocalPlayer.SetAttribute("KIA", false);
});