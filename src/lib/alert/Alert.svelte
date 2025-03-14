<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: any;
	}

	let { children, class: classNames = '', ...props }: Props = $props();
</script>

<div {...props} role="alert" aria-live="assertive" class="alert {classNames}">
	{@render children?.()}
</div>
