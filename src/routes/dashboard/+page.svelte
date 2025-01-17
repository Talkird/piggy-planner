<script lang="ts">
	import { currentUser } from '$lib/stores/auth';
	import Overview from '$lib/components/Overview.svelte';
	import Transactions from '$lib/components/Transactions.svelte';
</script>

<div class="flex flex-col items-center rounded-lg bg-white p-20 shadow-md backdrop-blur-md">
	{#if $currentUser}
		<div class="flex flex-col gap-12">
			<Overview />
			<Transactions />
		</div>
	{:else}
		<h1>You are not logged in</h1>
	{/if}
</div>
