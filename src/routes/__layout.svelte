<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/app-header/Navbar.svelte';
	import { isLoggedIn } from '../stores/appStore';
	import AppHeader from '$lib/app-header/AppHeader.svelte';
</script>

<main>
	<header class="sticky top-0 z-10 p-1 bg-base-200">
		<AppHeader />

		{#if $isLoggedIn === true}
			<Navbar />
		{/if}
	</header>

	<section class="overscroll-y-auto">
		<slot />
	</section>
</main>
