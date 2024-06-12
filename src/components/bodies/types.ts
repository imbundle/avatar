import { colors } from "../../theme";

export interface BodyProps {
	clothingColor: keyof typeof colors.clothing;
	braStraps: boolean;
	isFront: boolean;
}

export type BodyKind = "Breasts" | "Chest";
