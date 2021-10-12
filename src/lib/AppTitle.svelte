<script lang="typescript">
	import { goto } from '$app/navigation';
	import { user } from '../stores/user';
	import { isLoggedIn } from '../stores/app';

	let loginState: string;

	$: loginState = $isLoggedIn ? 'Logged in' : 'Logged out';

	function onClickLogoutButton() {
		user.set({ ...$user, isLoggedIn: false });
		isLoggedIn.set(false);
		goto('/login');
	}
</script>

<span class="flex justify-between">
	<h1 class="text-4xl font-bold tracking-wide pb-2">Shindig</h1>
	<button on:click={onClickLogoutButton} class="btn btn-ghost">{loginState}</button></span
>
