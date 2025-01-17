<script lang="ts">
	import { logout, currentUser } from '$lib/stores/auth';

	import Link from './ui/Link.svelte';
	import Button from './ui/Button.svelte';

	const handleLogout = async () => {
		logout();
	};
</script>

<nav
	class="flex w-full items-center justify-between bg-white p-4 font-medium text-black shadow-md backdrop-blur-md"
>
	<div class="flex items-center gap-3">
		<Link variant="ghost" href="/" class="text-xl">PiggyPlanner</Link>
		{#if $currentUser}
			<Link variant="ghost" href="/dashboard">Dashboard</Link>
		{/if}
	</div>

	<div class="flex items-center gap-3">
		{#if $currentUser}
			<Button onclick={handleLogout}>Logout</Button>
		{:else}
			<Link variant="ghost" href="/login" class="mr-4">Login</Link>
			<Link href="/register">Register</Link>
		{/if}
	</div>
</nav>
