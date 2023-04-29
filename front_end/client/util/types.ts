export interface UserType {
	username: {
		firstname: string;
		lastname: string;
	};
	phone?: number;
	email: string;
	password: string;
	address?: {
		coord: number[];
	};
	gender?: "male" | "female" | "other";
	fitness_id?: string;
	birth_date?: string;
}
export interface TimetableType {
	Monday: string;
	Tuesday: string;
	Wednesday: string;
	Thursday: string;
	Friday: string;
	Saturday: string;
	Sunday: string;
}

export interface PriceType {
	onetime?: number;
	oneMonth: number;
	threeMonth?: number;
	sixMonth?: number;
	year?: number;
}

export interface DiscountType {
	name: string;
	discount: number;
}

export interface ContactType {
	phoneNumber: number;
	social: string[];
}

// export interface SpecType {}
