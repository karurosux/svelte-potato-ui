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

<table {...props} class="table {className}">
	{#if header}
		<thead class="table-header">
			{@render header?.()}
		</thead>
	{/if}
	<tbody>
		{@render children?.()}
	</tbody>
</table>
