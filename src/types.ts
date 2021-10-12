export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	isLoggedIn: boolean;
}

export type Users = Array<User>;

export interface UserLogin {
	email: string;
	password: string;
}
