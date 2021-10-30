export interface User {
	firstName: string;
	lastName: string;
	dob: string;
	email: string;
	id: string;
	isAdmin: boolean;
}

export type Users = Array<User>;

export interface UserLogin {
	email: string;
	password: string;
}
