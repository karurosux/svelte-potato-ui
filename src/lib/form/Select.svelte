<script lang="ts">
	import type { SelectOption } from './select.js';

	type Props = {
		value?: string;
		placeholder?: string;
		options: SelectOption[];
		class?: string;
		selectClass?: string;
		required?: boolean;
		[key: string]: any;
	};

	let {
		value = $bindable(''),
		placeholder = '',
		options = [],
		required = false,
		class: classNames = '',
		selectClass = '',
		...props
	}: Props = $props();
</script>

<div class="mb-select relative inline-block {classNames}">
	<label for="select-input" class="sr-only">
		{required && placeholder ? placeholder + '*' : placeholder}
	</label>
	<select
		{...props}
		bind:value
		id="select-input"
		class="w-full appearance-none rounded-lg border-2 border-white
    bg-black p-4 px-8 text-lg font-bold
    text-white outline-none
    focus:border-sky-300
    focus:outline-none
    focus:ring-1
    focus:ring-sky-300
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    {selectClass}
    "
		aria-label={placeholder}
	>
		{#if placeholder}
			<option value="" disabled selected hidden class="!text-sky-500">
				{required && placeholder ? placeholder + '*' : placeholder}
			</option>
		{/if}

		{#each options as o (o.value)}
			<option value={o.value}>{o.label}</option>
		{/each}
	</select>
	<span class="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 transform text-white">
		▼
	</span>
</div>

<style>
	.mb-select option:disabled {
		color: gray !important; /* Change this to your desired color */
	}
</style>
