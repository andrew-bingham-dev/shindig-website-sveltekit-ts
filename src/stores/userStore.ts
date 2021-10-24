import type { User } from '../types';
import { writable } from 'svelte/store';

// const emptyUser: User = {
// 	firstName: '',
// 	lastName: '',
// 	email: '',
// 	password: '',
// 	isLoggedIn: false
// };

const testUser: User = {
	firstName: 'jim',
	lastName: 'bob',
	email: 'jim@bob.com',
	password: 'qqqqqq',
	isLoggedIn: false
};

export const user = writable(testUser);
