<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		header?: Snippet;
		children?: Snippet;
		[key: string]: any;
	}

	let { class: className = '', header, children, ...props }: Props = $props();
</script>

<div {...props} class={className}>
	<table class="w-full overflow-hidden">
		{#if header}
			<thead class="rounded-t-2xl text-left font-bold uppercase">
				{@render header?.()}
			</thead>
		{/if}
		<tbody>
			{@render children?.()}
		</tbody>
	</table>
</div>
