<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '../../stores/user';
	import { isLoggedIn } from '../../stores/app';

	let loginState: string;

	$: loginState = $isLoggedIn ? `${$user.firstName} ${$user.lastName}` : 'Login';

	function onClickLogoutButton() {
		user.set({ ...$user, isLoggedIn: false });
		isLoggedIn.set(false);
		goto('/login');
	}
</script>

<main class="flex w-full">
	<button on:click={onClickLogoutButton} class="btn btn-ghost btn-sm ml-auto my-auto"
		>{loginState}</button
	>
</main>
