import { colors } from "../../theme";

export interface MouthsProps {
	lipColor?: keyof typeof colors.lipColors;
}

export type MouthsKind =
	| "Grin"
	| "Lips"
	| "OpenMouth"
	| "Sad"
	| "SmileOpen"
	| "Tongue"
	| "Serious";
