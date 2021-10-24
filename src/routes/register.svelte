<script lang="typescript">
	import { goto } from '$app/navigation';
	import { user } from '../stores/user';
	import type { User } from '../types';
	import { minPasswordLength } from '../config';

	let firstName: string;
	let lastName: string;
	let email: string;
	let password: string;

	function onClickCancelButton() {
		goto('/login');
	}

	function onCreateAccountButton() {
		const newUser: User = {
			firstName,
			lastName,
			email,
			password,
			isLoggedIn: true
		};

		user.set(newUser);
		goto('/login');
	}
</script>

<main>
	<form on:submit|preventDefault={onCreateAccountButton}>
		<div class="form-control mb-4">
			<label for="firstName" class="label">
				<span class="label-text">First name</span>
			</label>
			<input
				id="firstName"
				type="text"
				placeholder="Enter your first name"
				required
				minlength={2}
				bind:value={firstName}
				class="input input-primary input-bordered"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="lastName" class="label">
				<span class="label-text">Last name</span>
			</label>
			<input
				id="lastName"
				type="text"
				placeholder="Enter your last name"
				required
				minlength={2}
				bind:value={lastName}
				class="input input-primary input-bordered"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				id="email"
				type="email"
				placeholder="Enter your email"
				required
				bind:value={email}
				class="input input-primary input-bordered"
			/>
		</div>

		<div class="form-control mb-4">
			<label for="password" class="label">
				<span class="label-text">Password</span>
			</label>
			<input
				id="password"
				type="password"
				placeholder="Enter your password"
				required
				minlength={minPasswordLength}
				bind:value={password}
				class="input input-primary input-bordered"
			/>
		</div>

		<div class="flex justify-between">
			<button type="submit" class="btn btn-outline btn-primary">Create account</button>
			<button on:click={onClickCancelButton} class="btn btn-outline btn-primary">Cancel</button>
		</div>
	</form>
</main>
