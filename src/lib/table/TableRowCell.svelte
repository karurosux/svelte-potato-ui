<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		[key: string]: any;
	}

	let { children, class: classNames = '', ...props }: Props = $props();
</script>

<td {...props} class="p-4 py-8 text-lg {classNames}">
	{@render children?.()}
</td>
