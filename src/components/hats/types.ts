import { ClothingProps } from "../clothing/types";

export interface IHatProps {
	scale?: number;
	isFront?: boolean;
}

export type HatProps = ClothingProps & IHatProps;

export type HatsKind = "Beanie" | "Turban";
