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

<div
	{...props}
	bind:this={divWrapper}
	class="card border-3 flex flex-col overflow-hidden rounded-xl border-gray-200 {classNames}"
	role="region"
	aria-labelledby="card-header"
>
	{#if header || headerTrailing}
		<div id="card-header" class="card-header flex items-center bg-gray-200 p-4 {headerClass}">
			{@render header?.()}
			<span class="flex-1"></span>
			{@render headerTrailing?.()}
		</div>
	{/if}

	<div
		class="card-body relative flex-1 border-2 border-gray-200 p-4 text-gray-200 {bodyClass}"
		class:!p-0={noPadding}
		class:rounded-xl={!header}
		class:rounded-b-xl={!!header}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
