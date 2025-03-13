<script lang="ts">
	import Card from '$lib/card/Card.svelte';
	import type { Snippet } from 'svelte';

	const TOP_DD_MARGIN = 10;

	let wrapper = $state<HTMLSpanElement | null>(null);
	let dropdownOpen = $state(false);

	interface Props {
		class?: string;
		dropdownClass?: string;
		trigger: Snippet<[typeof toggle]>;
		items: Snippet<[typeof toggle]>;
	}
	const { trigger, items, dropdownClass = '', class: classNames = '' }: Props = $props();

	let dropdownPosition = $derived((wrapper?.clientHeight || 0) + TOP_DD_MARGIN + 'px');

	const toggle = () => {
		dropdownOpen = !dropdownOpen;
	};
</script>

<span class="dropdown-menu-wrapper {classNames}" bind:this={wrapper}>
	{@render trigger?.(toggle)}
	{#if dropdownOpen}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="dropdown-backdrop" onclick={toggle}></div>
		<Card class="dropdown-menu {dropdownClass}" style="top: {dropdownPosition}">
			{@render items?.(toggle)}
		</Card>
	{/if}
</span>
