import { colors } from "../../theme";

export interface FacialHairProps {
	color: keyof typeof colors.hair;
}
export type FacialHairKind = "MediumBeard" | "Stubble" | "Shaved";
