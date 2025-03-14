<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: classNames = '' }: Props = $props();
</script>

<h1 class="mb-8 text-2xl font-semibold text-inherit {classNames}">
	{@render children?.()}
</h1>
