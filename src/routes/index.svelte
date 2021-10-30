<script lang="ts">
	import EventCard from '$lib/EventCard.svelte';
	import { forceLogin } from '../lib/utils';

	forceLogin();
</script>

<main>
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
	<EventCard />
</main>
