<script lang="typescript">
	import { forceLogin } from '../utils';
	import { user } from '../stores/user';

	forceLogin();
</script>

<main>
	<h3>First name: {$user.firstName}</h3>
	<h3>Last name: {$user.lastName}</h3>
	<h3>Email: {$user.email}</h3>
	<h3>Password: {$user.password}</h3>
</main>
