import { ReactNode } from "react";

export interface UserType {
	username: {
		firstname: string;
		lastname: string;
	};
	email: string;
	role: string;
}

export interface SingleType {
	_id: string;
	name: string;
}

export interface FitnessType {
	_id: string;
	name: string;
	description?: string;
	image?: string[];
	price?: {
		oneTime?: number;
		oneMonth: number;
		threeMonth?: number;
		sixMonth?: number;
		year?: number;
	};
	contact: {
		number?: number;
		email?: string;
		social?: string[];
	};
	address?: {
		district: "Sukhbaatar" | "Bayangol";
		description: string;
		coord: number[];
	};
	timetable?: {
		monday: string;
		tuesday: string;
		wednesday: string;
		thursday: string;
		friday: string;
		saturday: string;
		sunday: string;
	};
	discount: { name: string; discount: number }[] | null;
	spec: {
		wifi: boolean;
		shower: boolean;
		parking: boolean;
	};
}

export interface PageType {
	name: string;
	url: string;
	icon?: ReactNode;
}
