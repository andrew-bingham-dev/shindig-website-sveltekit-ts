<script>
    import {firstName, lastName} from '../stores/user'

    function updateName() {
        lastName.set('Bingers')
    }
</script>

<p>profile page</p>

<h2>Name: {$firstName} {$lastName}</h2>

<button on:click={updateName} class="btn">Set last name to Bingers</button>
