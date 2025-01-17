<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Input from '$lib/components/ui/Input.svelte';
	import { register } from '$lib/stores/auth';

	let email = $state('');
	let password = $state('');
	let confirmPassword = $state('');

	const handleRegister = async (event: Event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			register(email, password);
			email = '';
			password = '';
			confirmPassword = '';
		} catch (error) {
			console.error(error);
		}
	};
</script>

<form
	onsubmit={handleRegister}
	class="backdrop-filter-md flex flex-col items-center justify-center gap-8 rounded-xl bg-white p-20 shadow-md"
>
	<div class="flex w-full flex-col gap-8">
		<div class="flex flex-col gap-3 text-center">
			<h1 class="text-4xl font-extrabold">Create an account</h1>
			<p>
				Already have an account? <a class="text-indigo-500 hover:underline" href="/login">Login</a>
			</p>
		</div>
		<Input bind:value={email} type="text" placeholder="Email" />
		<Input bind:value={password} type="password" placeholder="Password" />
		<Input bind:value={confirmPassword} type="password" placeholder="Confirm password" />
		<Button type="submit">Register</Button>
	</div>
</form>
