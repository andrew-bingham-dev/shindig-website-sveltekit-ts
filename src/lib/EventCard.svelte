<script lang="ts">
	export const context = 'Card context';
	export const title = 'Card title that is a longer';
	export const type = 'Card type';
	export const date = 'Card date';
</script>

<main class="bg-base-300 m-1 flex">
	<div class="indicator" />
	<div class="event-card">
		<span class="context text-gray-400">{context}</span>
		<span class="date text-gray-400">{date}</span>
		<span class="type text-gray-400">{type}</span>
		<span class="title">{title}</span>
	</div>
</main>

<style>
	.indicator {
		width: 10px;
		background-color: red;
	}
	.title {
		grid-area: title;
		font-weight: 500;
		letter-spacing: 0.075rem;
		font-size: small;
		padding-left: 0.5rem;
	}

	.date {
		grid-area: date;
		font-size: small;
	}

	.context {
		grid-area: context;
		font-size: small;
		padding: 0.25rem 0 0.5rem 0.5rem;
	}

	.type {
		grid-area: type;
		font-size: small;
		padding-left: 0.5rem;
	}

	.event-card {
		display: grid;
		grid-template-areas:
			'context context date'
			'type title title';
		width: 100%;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 20% 50% 30%;
	}
</style>
