import { writable } from 'svelte/store';
import type { User } from './types';

export const userAccount = writable<User | null>();
