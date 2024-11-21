<script lang="ts">
	import { type Snippet } from 'svelte';

	type Props = {
		// Inputs
		buttonText?: string;
		loading?: boolean;
		sm?: boolean;
		disabled?: boolean;
		class?: string;

		// Snippets
		icon?: Snippet;
		children: Snippet;

		// Events
		onclick?: (e: MouseEvent) => void;
	};

	const {
		buttonText = 'Default',
		loading = false,
		sm = false,
		class: classNames = '',
		disabled = false,
		icon,
		children,
		onclick,
		...props
	}: Props = $props();
</script>

<button
	{...props}
	disabled={loading || disabled}
	class="
  btn relative isolate flex h-16 min-w-16
  items-center justify-center border-none px-8
  pb-2 font-bold uppercase text-white
  before:absolute
  before:bottom-0
  before:left-0
  before:right-0
  before:top-0
  before:-z-20
  before:content-normal
  before:rounded-xl
  before:border-2
  before:border-white
  before:bg-black
  after:absolute
  after:left-0
  after:right-0
  after:top-0
  after:-z-10
  after:content-normal
  after:rounded-xl
  hover:cursor-pointer
  active:pb-0
  active:pt-2
  disabled:cursor-no-drop
  disabled:opacity-50
  {classNames}
  "
	class:!pb-2={sm}
	class:!px-2={sm}
	class:!h-10={sm}
	class:!text-sm={sm}
	class:active:!pt-4={sm}
	aria-busy={loading}
	aria-disabled={loading || disabled}
	{onclick}
>
	{#if icon && !loading}
		<span class="mr-2" aria-hidden="true">
			{@render icon()}
		</span>
	{/if}
	{#if loading}
		<div class="mr-2" aria-hidden="true">
			<span
				class="
        loader
        block
        h-4
        w-4
        animate-spin
        rounded-full
        border-4
        ease-linear
        "
			>
			</span>
		</div>
	{/if}
	{#if children}
		{@render children()}
	{:else}
		{buttonText}
	{/if}
</button>

<style>
	.btn {
		--bottom-size: 10px;
	}

	.btn::after {
		bottom: var(--bottom-size);
		box-shadow: 0 var(--bottom-size) 0 0 var(--tw-shadow-color, white);
	}

	.btn:active::before {
		top: var(--bottom-size);
	}

	.btn:active::after {
		box-shadow: none;
	}
</style>
