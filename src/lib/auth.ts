import { writable } from 'svelte/store';
import { browser } from '$app/env';
import {
	getAuth,
	onAuthStateChanged,
	signOut as _signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { app } from './firebase';

export interface AuthState {
	user: User | null;
	known: boolean;
}

const createAuth = () => {
	const { subscribe, set } = writable<AuthState>({ user: null, known: false });

	async function listen() {
		const auth = getAuth(app);
		onAuthStateChanged(
			auth,
			(user) => set({ user, known: true }),
			(error) => console.error(error.message)
		);
	}

	if (browser) {
		// listen to auth changes on client
		listen();
	} else {
		// no auth on server in this example
		set({ user: null, known: true });
	}

	async function signIn(email: string, password: string) {
		const auth = getAuth(app);
		await signInWithEmailAndPassword(auth, email, password);
	}

	async function signOut() {
		const auth = getAuth(app);
		await _signOut(auth);
	}

	async function register(email: string, password: string) {
		const auth = getAuth(app);
		await createUserWithEmailAndPassword(auth, email, password);
	}

	return {
		subscribe,
		signIn,
		signOut,
		register
	};
};

export const auth = createAuth();
