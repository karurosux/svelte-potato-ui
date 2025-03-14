<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { ...props }: Props = $props();
</script>

<th {...props} class="table-header-cell {props.class}">
	{@render props.children?.()}
</th>
