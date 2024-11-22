<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: any;
	}

	let { children, class: classNames = '', ...props }: Props = $props();
</script>

<tr {...props} class="border-b-2 border-gray-200 {classNames}">
	{@render children?.()}
</tr>
