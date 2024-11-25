<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { ...props }: Props = $props();
</script>

<th {...props} class="px-4 py-4 text-sm {props.class}">
	{@render props.children?.()}
</th>
