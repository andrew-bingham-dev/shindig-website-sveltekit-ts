<script lang="ts">
	import { auth } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { minPasswordLength } from '../config';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import Error from '$lib/alerts/error.svelte';

	let alertError = null;

	let email: string;
	let password: string;

	function clearUserDetailsOnPage() {
		email = '';
		password = '';
	}

	function resetAlerts() {
		alertError = null;
	}

	async function onClickLogin() {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			clearUserDetailsOnPage();
			goto('/');
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				alertError = error.code;
			} else {
				alert(`Error: ${error.code}`);
			}
		}
	}
</script>

<main class="flex flex-col">
	<form on:submit|preventDefault={onClickLogin} autocomplete="off">
		{#if alertError}
			<Error message={alertError} on:clicked={resetAlerts} />
		{/if}

		<div class="form-control mb-8">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				id="email"
				type="email"
				placeholder="Enter your email"
				class="input input-primary input-bordered"
				bind:value={email}
				required
				on:input={resetAlerts}
			/>
		</div>
		<div class="form-control mb-8">
			<label for="password" class="label">
				<span class="label-text">Password</span>
			</label>
			<input
				id="password"
				type="password"
				placeholder="Enter your password"
				class="input input-primary input-bordered"
				bind:value={password}
				required
				minlength={minPasswordLength}
				on:input={resetAlerts}
			/>
		</div>

		<div class="flex mb-8">
			<button type="submit" class="btn btn-outline btn-primary mx-auto">Login</button>
		</div>

		<div class="flex mb-8">
			<a href="/register" role="button" class="btn btn-ghost mx-auto">Register</a>
		</div>
	</form>
</main>
