<script lang="ts">
	import { auth } from '../firebase/firebase';
	import { signOut } from 'firebase/auth';
	import Link from './ui/Link.svelte';
	import Button from './ui/Button.svelte';

	const handleLogout = async () => {
		await signOut(auth);
	};
</script>

<nav
	class="flex w-full items-center justify-between bg-white p-4 font-medium text-black shadow-md backdrop-blur-md"
>
	<Link variant="ghost" href="/" class="text-xl">PiggyPlanner</Link>
	<div class="flex items-center gap-3">
		{#if auth.currentUser}
			<Button onclick={handleLogout} variant="ghost">Logout</Button>
		{:else}
			<Link variant="ghost" href="/login" class="mr-4">Login</Link>
			<Link href="/register">Register</Link>
		{/if}
	</div>
</nav>
