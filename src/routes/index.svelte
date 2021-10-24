<script lang="ts">
	import EventCard from '$lib/EventCard.svelte';
	import { forceLogin } from '../utils';

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
