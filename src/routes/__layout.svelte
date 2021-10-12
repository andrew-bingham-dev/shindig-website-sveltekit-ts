<script lang="typescript">
	import '../app.css';
	import AppTitle from '$lib/AppTitle.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import { isLoggedIn } from '../stores/app';
</script>

<main>
	<header class="sticky top-0 z-10 p-4 bg-base-200">
		<AppTitle />

		{#if $isLoggedIn === true}
			<Navbar />
		{/if}
	</header>

	<section class="overscroll-y-auto">
		<slot />
	</section>
</main>
