<script lang="ts">
	import { auth } from '$lib/firebase/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';

	let email = $state('');
	let password = $state('');

	const handleLogin = async (event: Event) => {
		event.preventDefault();

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			email = '';
			password = '';
		} catch (error) {
			console.error(error);
		}
	};
</script>

<form
	onsubmit={handleLogin}
	class="backdrop-filter-md flex flex-col items-center justify-center gap-8 rounded-xl bg-white p-20 shadow-md"
>
	<div class="flex w-full flex-col gap-8">
		<div class="flex flex-col gap-3 text-center">
			<h1 class="text-4xl font-extrabold">Login</h1>
			<p>
				Don't have an account? <a class="text-indigo-500 hover:underline" href="/login">Register</a>
			</p>
		</div>
		<Input bind:value={email} type="text" placeholder="Email" />
		<Input bind:value={password} type="password" placeholder="Password" />
		<Button type="submit">Login</Button>
	</div>
</form>
