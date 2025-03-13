<script lang="ts">
	import Card from '$lib/card/Card.svelte';
	import Input from '$lib/form/Input.svelte';
	import LoadingSpinner from '$lib/loading-spinner/LoadingSpinner.svelte';
	import lo from 'lodash';
	import type { ComponentProps, Snippet } from 'svelte';

	type T = $$Generic;

	type Props = ComponentProps<typeof Input> & {
		selected: T[];
		inputClass?: string;
		filter?: string;
		dataSource: (filter: string) => Promise<T[]>;
		template?: Snippet<[T]>;
		onselectedchange?: (selected: T[]) => void;
	};

	let {
		inputClass = '',
		class: classList = '',
		selected = $bindable([]),
		filter = $bindable(''),
		template,
		dataSource,
		onselectedchange,
		...inputProps
	}: Props = $props();

	let records = $state<T[]>([]);
	let loading = $state(false);
	let inputEl = $state<HTMLInputElement | null>(null);

	let hasSelection = $derived(selected?.length > 0);

	const handleOnFocus = () => {
		if (hasSelection) {
			return;
		}
		fetchRecords(filter || '');
	};

	const handleInputChange = lo.debounce(() => {
		fetchRecords();
	}, 300);

	const fetchRecords = async (f = filter) => {
		loading = true;
		records = await dataSource(f);
		loading = false;
	};

	const setSelected = (i: T[]) => {
		selected = i;
		onselectedchange?.(i);
	};

	const handleClickOutside = (e: MouseEvent) => {
		filter = '';
		records = [];
	};

	const handleOptionClicked = (i: T) => (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setSelected([i]);
	};

	const handleOptionKeydown = (i: T) => (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
			setSelected([i]);
			return;
		}

		handleKeyDown(e);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		const items = document.querySelectorAll('.autocomplete-popover-item');
		const currentIndex = Array.from(items).findIndex((item) => item === document.activeElement);

		if (e.key === 'Escape') {
			e.preventDefault();
			e.stopPropagation();
			filter = '';
			fetchRecords();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			e.stopPropagation();
			if (items.length > 0) {
				const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
				(items[nextIndex] as HTMLElement).focus();
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			e.stopPropagation();
			if (items.length > 0) {
				const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
				(items[prevIndex] as HTMLElement).focus();
			}
		}
	};

	const handleClickUnselect = () => {
		setSelected([]);
		inputEl?.focus();
	};
</script>

<div class="autocomplete-wrapper relative h-auto {classList}">
	{#if records.length}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="fixed left-0 top-0 z-20 h-full w-full" onclick={handleClickOutside}></div>
	{/if}
	<Input
		{...inputProps}
		class="z-50 w-full {inputClass}"
		bind:inputEl
		bind:value={filter}
		placeholder={hasSelection ? '' : inputProps.placeholder}
		readonly={hasSelection}
		onfocus={handleOnFocus}
		oninput={handleInputChange}
		onkeydown={handleKeyDown}
	/>

	{#if hasSelection}
		<div class="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center gap-2 px-4">
			<span class="flex-1 p-2 text-xl text-white">
				{#if template}
					{@render template(selected[0])}
				{:else}
					{selected[0]}
				{/if}
			</span>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button onclick={handleClickUnselect}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
					></line></svg
				>
			</button>
		</div>
	{/if}

	{#if records.length && !hasSelection}
		<Card
			class="autocomplete-popover absolute top-20 z-50 min-h-20 w-full min-w-[250px] bg-black"
			bodyClass="overflow-y-auto"
		>
			{#if loading}
				<LoadingSpinner absolute />
			{:else}
				{#each records as record}
					<button
						class="autocomplete-popover-item flex w-full select-none items-center gap-2 border-b-2 border-gray-200 p-4 text-left uppercase last:border-none hover:font-bold"
						onclick={handleOptionClicked(record)}
						onkeydown={handleOptionKeydown(record)}
					>
						{#if template}
							{@render template(record)}
						{:else}
							{record}
						{/if}
					</button>
				{/each}
			{/if}
		</Card>
	{/if}
</div>
