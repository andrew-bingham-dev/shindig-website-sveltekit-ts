<script lang="ts">
	import { goto } from '$app/navigation';
	import { userAccount } from '$lib/stores';
	import { auth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';

	async function onClickLogout() {
		if (auth?.currentUser) {
			try {
				await signOut(auth);
			} catch (error) {
				alert(`Error logging out: ${error}`);
			}
		}
		goto('/login');
	}

	function onClickLogin() {
		goto('/login');
	}
</script>

<main class="flex w-full">
	{#if $userAccount?.firstName}
		<button on:click={onClickLogout} class="btn btn-ghost btn-sm ml-auto my-auto"
			>{$userAccount.firstName}</button
		>
	{:else}
		<button on:click={onClickLogin} class="btn btn-ghost btn-sm ml-auto my-auto">Login</button>
	{/if}
</main>
