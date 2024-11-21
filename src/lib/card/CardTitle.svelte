<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon?: Snippet;
		children?: Snippet;
		[key: string]: any;
	}

	let { icon, children, ...props }: Props = $props();
</script>

<h1
	class="card-title inline-flex bg-transparent text-lg font-bold uppercase text-black {props.class}"
>
	{#if icon}
		<span class="mr-2">{@render icon?.()}</span>
	{/if}
	{@render children?.()}
</h1>
