<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		noPadding?: boolean;
		class?: string;
		bodyClass?: string;
		headerClass?: string;
		children?: Snippet;
		header?: Snippet;
		headerTrailing?: Snippet;
		[key: string]: any;
	};

	let {
		children,
		header,
		headerTrailing,
		noPadding = false,
		class: classNames = '',
		bodyClass = '',
		headerClass = '',
		...props
	}: Props = $props();
	let divWrapper: HTMLDivElement | undefined = $state();

	export function getDivWrapper(): HTMLDivElement {
		return divWrapper as HTMLDivElement;
	}
</script>

<div {...props} bind:this={divWrapper} class="card {classNames}" role="region">
	{#if header || headerTrailing}
		<div class="card-header {headerClass}">
			{@render header?.()}
			<span class="flex-1"></span>
			{@render headerTrailing?.()}
		</div>
	{/if}

	<div
		class="card-body {bodyClass}"
		class:!p-0={noPadding}
		class:rounded-xl={!header}
		class:rounded-b-xl={!!header}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
