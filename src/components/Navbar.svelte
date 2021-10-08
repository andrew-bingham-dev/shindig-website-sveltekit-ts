<script>
	import { page } from '$app/stores';
</script>

<nav class="tabs tabs-boxed justify-around">
	<a href="/" class="tab" class:tab-active={$page.path == '/'}><ion-icon name="home" size="large" /></a>
	<a href="/profile" class="tab" class:tab-active={$page.path == '/profile'}><ion-icon name="person" size="large" /></a>
	<a href="/friends" class="tab" class:tab-active={$page.path == '/friends'} ><ion-icon name="people" size="large" /></a>
	<a href="/events" class="tab" class:tab-active={$page.path == '/events'}><ion-icon name="calendar-clear" size="large" /></a>
	<a href="/settings" class="tab" class:tab-active={$page.path == '/settings'}><ion-icon name="settings" size="large" /></a>
</nav>
