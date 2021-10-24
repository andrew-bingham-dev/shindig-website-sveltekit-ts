<script lang="ts">
	import { page } from '$app/stores';
	import AppTitle from '$lib/app-header/AppTitle.svelte';
	import LoginStatus from '$lib/app-header/LoginStatus.svelte';
</script>

<main class="flex justify-between">
	{#if $page.path === '/'}
		<AppTitle />
	{/if}

	<LoginStatus />
</main>
