<script lang="ts">
	import Card from '$lib/card/Card.svelte';
	import type { Snippet } from 'svelte';

	const TOP_DD_MARGIN = 10;

	let wrapper = $state<HTMLSpanElement | null>(null);
	let dropdownOpen = $state(false);

	interface Props {
		dropdownClass?: string;
		trigger: Snippet<[typeof toggle]>;
		items: Snippet<[typeof toggle]>;
	}
	const { trigger, items, dropdownClass = '' }: Props = $props();

	let hasClientHeight = $derived(!!wrapper?.clientHeight);
	let dropdownPosition = $derived((wrapper?.clientHeight || 0) + TOP_DD_MARGIN + 'px');

	const toggle = () => {
		dropdownOpen = !dropdownOpen;
	};
</script>

<span class="relative" bind:this={wrapper}>
	{@render trigger?.(toggle)}
	{#if hasClientHeight && dropdownOpen}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="fixed bottom-0 left-0 right-0 top-0" onclick={toggle}></div>
		<Card
			class="absolute z-20 min-w-[250px] bg-black {dropdownClass}"
			bodyClass="overflow-y-auto"
			style="top: {dropdownPosition}"
		>
			{@render items?.(toggle)}
		</Card>
	{/if}
</span>
