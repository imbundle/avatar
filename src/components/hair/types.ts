import { colors } from "../../theme";

export interface HairProps {
	hasHat?: boolean;
	hairColor: keyof typeof colors.hair;
	isFront?: boolean;
}

export type HairKind =
	| "Afro"
	| "Balding"
	| "Bobcut"
	| "Bun"
	| "Buzz"
	| "Long"
	| "Pixie"
	| "Short"
	| "Blad";
