import { goto } from '$app/navigation';
import { isLoggedIn } from './stores/app';

export function forceLogin() {
	if (!!isLoggedIn === false) goto('/login', { replaceState: true });
}
