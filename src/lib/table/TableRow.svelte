<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		role?: string;
		[key: string]: any;
	}

	let { children, class: classNames = '', role = 'row', ...props }: Props = $props();
</script>

<tr {...props} class="table-row {classNames}" {role}>
	{@render children?.()}
</tr>
