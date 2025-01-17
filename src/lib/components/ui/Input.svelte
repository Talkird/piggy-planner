<script lang="ts">
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from 'svelte/elements';

	type InputProps = {
		type?: HTMLInputTypeAttribute;
		value: any;
	} & HTMLInputAttributes;

	let { type, value = $bindable(), ...rest }: InputProps = $props();
</script>

<input
	bind:value
	{type}
	{...rest}
	class="appearance-none rounded-md px-4 py-3 transition focus:border-indigo-500 focus:outline-none"
/>
