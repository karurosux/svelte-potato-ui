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

<div {...props} class="tabs-wrapper {props.class}">
	<div class="tabs">
		{#if heading}
			{@render heading()}
		{/if}
		{#each tabs as { icon: Icon, ...t }, index}
			<button
				disabled={!canChangeTab}
				class="tab {t.className}"
				class:selected={selectedIndex === index}
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
