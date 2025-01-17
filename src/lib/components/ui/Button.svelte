<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { buttonVariants } from './variants';

	type ButtonProps = {
		children: Snippet;
		variant?: 'primary' | 'ghost';
	} & HTMLButtonAttributes;

	let { children, variant = 'primary', ...rest }: ButtonProps = $props();
</script>

<button class={buttonVariants({ variant })} {...rest}>
	{@render children()}
</button>
