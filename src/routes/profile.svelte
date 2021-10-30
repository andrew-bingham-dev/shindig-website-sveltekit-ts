<script lang="ts">
	import { db } from '$lib/firebase';
	import { doc, setDoc } from 'firebase/firestore';
	import { userAccount } from '$lib/stores';

	let editMode = false;
	let fieldsModified = false;

	let firstName: string;
	let lastName: string;
	let dob: string;
	let email: string;

	updateUserDetailsOnPage();

	async function updateUserDetailsOnServer() {
		try {
			await setDoc(doc(db, 'users', $userAccount.id), {
				firstName,
				lastName,
				dob,
				email,
				isAdmin: false
			});

			updateUserDetailsOnStore();
			editMode = false;
		} catch (error) {
			alert(`Error updating user details: ${error}`);
		}
	}

	function updateUserDetailsOnStore() {
		userAccount.set({ ...$userAccount, firstName, lastName, email, dob });
	}

	function updateUserDetailsOnPage() {
		firstName = $userAccount?.firstName;
		lastName = $userAccount?.lastName;
		dob = $userAccount?.dob;
		console.log('dob: ', dob);
		console.log('$userDetails.dob: ', $userAccount.dob.toString());
		email = $userAccount?.email;
	}

	function toggleEditMode() {
		editMode = !editMode;
		fieldsModified = false;
		if (!editMode) updateUserDetailsOnPage();
	}

	function onChangeFields() {
		fieldsModified = true;
	}
</script>

<main>
	<form>
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
				class="input input-primary input-bordered"
				bind:value={firstName}
				disabled={!editMode}
				on:input={onChangeFields}
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
				class="input input-primary input-bordered"
				bind:value={lastName}
				disabled={!editMode}
				on:input={onChangeFields}
			/>
		</div>

		<div class="form-control mb-4">
			<label for="dob" class="label">
				<span class="label-text">Date of birth</span>
			</label>
			<input
				id="dob"
				type="text"
				placeholder="DD / MM / YYYY"
				required
				minlength={10}
				maxlength={10}
				class="input input-primary input-bordered"
				bind:value={dob}
				disabled={!editMode}
				on:input={onChangeFields}
			/>
		</div>

		<div class="form-control mb-8">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				id="email"
				type="email"
				placeholder="Enter your email"
				required
				class="input input-primary input-bordered"
				bind:value={email}
				disabled={!editMode}
				on:input={onChangeFields}
			/>
		</div>

		<div class="flex justify-between">
			<button type="button" on:click={toggleEditMode} class="btn btn-outline btn-primary mx-auto"
				>{editMode ? 'Cancel' : 'Edit profile'}</button
			>

			{#if fieldsModified}
				<button type="button" on:click={updateUserDetailsOnServer} class="btn btn-primary mx-auto"
					>Save changes</button
				>
			{/if}
		</div>
	</form>
</main>
