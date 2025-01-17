<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { auth } from '../firebase';
	import { currentUser } from '$lib/stores/auth';
	import { onAuthStateChanged } from 'firebase/auth';

	$effect(() => {
		onAuthStateChanged(auth, (user) => {
			currentUser.set(user);
		});
	});
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main
		class="flex min-h-screen flex-1 items-center justify-center bg-gradient-to-r from-indigo-400 to-indigo-500 p-4"
	>
		{@render children()}
	</main>
	<Footer />
</div>
