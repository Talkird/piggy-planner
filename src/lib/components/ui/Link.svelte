<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { buttonVariants } from './variants';

	type LinkProps = {
		children: Snippet;
		variant?: 'primary' | 'ghost';
	} & HTMLAnchorAttributes;

	let { children, variant = 'primary', ...rest }: LinkProps = $props();
</script>

<a {...rest} class={buttonVariants({ variant })}>
	{@render children()}
</a>
