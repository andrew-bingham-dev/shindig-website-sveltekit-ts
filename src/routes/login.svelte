<script lang="typescript">
	import { isLoggedIn } from '../stores/app';
	import { user } from '../stores/user';
	import { goto } from '$app/navigation';
	import { minPasswordLength } from '../config';
	import type { UserLogin } from 'src/types';

	let userLogin: UserLogin = {
		email: '',
		password: ''
	};

	function isValidUser(): boolean {
		if (userLogin.email !== $user.email) return false;
		if (userLogin.password !== $user.password) return false;
		return true;
	}

	function onClickLoginButton() {
		if (isValidUser) {
			user.set({ ...$user, isLoggedIn: true });
			isLoggedIn.set(true);
			goto('/');
		}
	}
</script>

<section class="flex flex-col">
	<form on:submit|preventDefault={onClickLoginButton}>
		<div class="form-control mb-8">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				id="email"
				type="email"
				placeholder="Enter your email"
				class="input input-primary input-bordered"
				bind:value={userLogin.email}
				required
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
				bind:value={userLogin.password}
				required
				minlength={minPasswordLength}
			/>
		</div>

		<div class="flex mb-8">
			<button type="submit" class="btn btn-outline btn-primary mx-auto">Login</button>
		</div>

		<div class="flex mb-8">
			<a href="/register" role="button" class="btn btn-ghost mx-auto">Register</a>
		</div>
	</form>
</section>
