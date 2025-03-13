<script lang="ts">
	import LoadingSpinner from '$lib/loading-spinner/LoadingSpinner.svelte';
	import { type Snippet } from 'svelte';

	type ButtonVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | string;

	type Props = {
		// Inputs
		buttonText?: string;
		loading?: boolean;
		sm?: boolean;
		disabled?: boolean;
		class?: string;
		type?: HTMLButtonElement['type'];
		// Color variant
		variant?: ButtonVariant;
		// Snippets
		icon?: Snippet;
		children: Snippet;
		// Events
		onclick?: (e: MouseEvent) => void;
	};

	const {
		type,
		buttonText = 'Default',
		loading = false,
		sm = false,
		class: classNames = '',
		disabled = false,
		variant = 'default',
		icon,
		children,
		onclick,
		...props
	}: Props = $props();

	// Construct classes based on props
	const variantClass = variant !== 'default' ? `btn-${variant}` : '';
	const sizeClass = sm ? 'btn-sm' : '';
</script>

<button
	{...props}
	{type}
	disabled={loading || disabled}
	class="btn {variantClass} {sizeClass} {classNames}"
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
			<LoadingSpinner />
		</div>
	{/if}
	{#if children}
		{@render children()}
	{:else}
		{buttonText}
	{/if}
</button>
