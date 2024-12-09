<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { Tab } from '$lib/tabs/tab.js';

	type Props = {
		class?: string;
		tabs: Tab[];
		canChangeTab?: boolean;
		content: Snippet<[number]>;
		heading?: Snippet;
		onchange?: (selectedIndex: number) => void;
	};

	let { content, heading, onchange, tabs = [], canChangeTab = true, ...props }: Props = $props();
	let selectedIndex = $state(0);

	const handleClickTab = (index: number) => () => {
		selectedIndex = index;
		onchange?.(selectedIndex);
	};
</script>

<div {...props} class="flex h-full w-full flex-col {props.class}">
	<div class="tabs flex w-full overflow-hidden border-b-2 border-gray-200">
		{#if heading}
			{@render heading()}
		{/if}
		{#each tabs as { icon: Icon, ...t }, index}
			<button
				disabled={!canChangeTab}
				class="tab flex flex-1 cursor-pointer select-none items-center justify-center border-r-2 border-gray-200 p-4 text-center font-bold uppercase text-gray-200 last:border-0 hover:bg-gray-800 disabled:opacity-65 {t.className}"
				class:!bg-gray-200={selectedIndex === index}
				class:!text-black={selectedIndex === index}
				onclick={handleClickTab(index)}
			>
				{#if Icon}
					<span class="mr-2">
						<Icon />
					</span>
				{/if}
				{t.label}
			</button>
		{/each}
	</div>
	<div class="relative flex-1">
		{@render content?.(selectedIndex)}
	</div>
</div>
