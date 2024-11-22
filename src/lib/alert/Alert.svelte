<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
		class?: string;
		[key: string]: any;
	}

	let { children, class: classNames = '', ...props }: Props = $props();
</script>

<div
	{...props}
	role="alert"
	aria-live="assertive"
	class="rounded-xl border-4 border-gray-500 bg-gray-950 p-6 text-gray-200 {classNames}"
>
	{@render children?.()}
</div>
