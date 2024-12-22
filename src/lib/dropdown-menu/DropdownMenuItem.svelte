<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		icon?: Snippet;
		children: Snippet;
	}
	const { children, icon, ...rest }: Props = $props();
</script>

<button
	{...rest}
	class="dropdown-item flex w-full select-none items-center gap-2 border-b-2 border-gray-200 p-4 text-left uppercase last:border-none hover:font-bold"
>
	{#if icon}
		<span>
			{@render icon?.()}
		</span>
	{/if}
	{@render children?.()}
</button>
