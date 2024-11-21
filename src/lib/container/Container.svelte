<script lang="ts">
	let divRef: HTMLDivElement | undefined = $state();

	interface Props {
		class?: string;
		centeredHorizontally?: boolean;
		centeredVertically?: boolean;
		absolute?: boolean;
		topSpacing?: boolean;
		flex?: boolean;
		col?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		class: className = '',
		centeredHorizontally = false,
		centeredVertically = false,
		absolute = false,
		topSpacing = false,
		flex = false,
		col = false,
		children
	}: Props = $props();

	export function getDivWrapper() {
		return divRef;
	}
</script>

<div
	bind:this={divRef}
	class="container m-auto {className}"
	class:absolute
	class:top-0={absolute}
	class:bottom-0={absolute}
	class:right-0={absolute}
	class:left-0={absolute}
	class:flex={flex || centeredHorizontally || centeredVertically}
	class:justify-center={col ? centeredVertically : centeredHorizontally}
	class:items-center={col ? centeredHorizontally : centeredVertically}
	class:mt-16={topSpacing}
	class:flex-col={col}
>
	{@render children?.()}
</div>
