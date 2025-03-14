<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: any;
	}

	let { children, class: classNames = '', ...props }: Props = $props();
</script>

<tr {...props} class="table-header-row {classNames}">
	{@render children?.()}
</tr>
