<script lang="ts">
	import '../app.css';
	import { auth, db } from '../lib/firebase';
	import { onAuthStateChanged } from 'firebase/auth';
	import Navbar from '$lib/app-header/Navbar.svelte';
	import AppHeader from '$lib/app-header/AppHeader.svelte';
	import { onMount } from 'svelte';
	import { userAccount } from '$lib/stores';
	import { doc, getDoc } from '@firebase/firestore';
	import { goto } from '$app/navigation';
	import type { User } from '$lib/types';

	async function getUserDetailsfromServer(userId: string) {
		return await getDoc(doc(db, 'users', userId));
	}

	onMount(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// read in user data from Firestore
				const userDoc = await getUserDetailsfromServer(user.uid);
				const userData = await userDoc.data();
				const userDetails: User = {
					firstName: userData.firstName,
					lastName: userData.lastName,
					dob: userData.dob,
					email: userData.email,
					id: user.uid,
					isAdmin: false
				};
				userAccount.set(userDetails);
			} else {
				userAccount.set(null);
				await goto('/login');
			}
		});
	});
</script>

<main>
	<header class="sticky top-0 z-10 p-1 bg-base-200">
		<AppHeader />

		{#if $userAccount?.email}
			<Navbar />
		{/if}
	</header>

	<section class="overscroll-y-auto">
		<slot />
	</section>
</main>
