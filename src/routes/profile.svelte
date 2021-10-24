<script lang="typescript">
	import { forceLogin } from '../utils';
	import { user } from '../stores/userStore';

	forceLogin();
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
				bind:value={$user.firstName}
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
				bind:value={$user.lastName}
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
				bind:value={$user.email}
			/>
		</div>

		<div class="flex justify-between">
			<button class="btn btn-outline btn-primary mx-auto">Edit profile</button>
			<!-- <button class="btn btn-outline btn-primary">Cancel</button> -->
		</div>
	</form>
</main>
