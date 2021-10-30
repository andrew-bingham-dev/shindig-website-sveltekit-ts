<script lang="ts">
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import { auth, db } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { minPasswordLength } from '../config';

	let firstName: string;
	let lastName: string;
	let email: string;
	let dob;
	let password: string;

	function onClickCancel() {
		goto('/login');
	}

	async function onCreateAccount() {
		try {
			const responseFromRegister = await createUserWithEmailAndPassword(auth, email, password);

			const responseFromCreateUserDoc = await setDoc(
				doc(db, 'users', responseFromRegister.user.uid),
				{
					firstName,
					lastName,
					email,
					dob: new Date(dob),
					isAdmin: false
				}
			);
		} catch (error) {
			alert(`error: ${error}`);
		}

		goto('/login');
	}
</script>

<main>
	<form on:submit|preventDefault={onCreateAccount}>
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
			<label for="dob" class="label">
				<span class="label-text">Date of birth</span>
			</label>
			<input
				id="dob"
				type="text"
				placeholder="DD/MM/YYYY"
				required
				minlength={2}
				bind:value={dob}
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
			<button on:click={onClickCancel} class="btn btn-outline btn-primary">Cancel</button>
		</div>
	</form>
</main>
