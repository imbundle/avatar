import { colors } from "../../theme";
import { GraphicKind } from "../clothinggraphic/types";

export interface ClothingProps {
	color: keyof typeof colors.clothing;
	graphic?: GraphicKind;
	isFront?: boolean;
}

export type ClothingKind =
	| "Dress"
	| "DressShirt"
	| "Shirt"
	| "TankTop"
	| "VNeck";
