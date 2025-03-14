<script lang="ts">
	import Button from '$lib/button/Button.svelte';
	import Card from '$lib/card/Card.svelte';
	import Title from '$lib/general/Title.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		okText?: string;
		cancelText?: string;
		loading?: boolean;
		class?: string;
		okClass?: string;
		cancelClass?: string;
		children?: Snippet;
		okIcon?: Snippet;
		cancelIcon?: Snippet;
		onok?: () => void;
		oncancel?: () => void;
	}

	let {
		title = '',
		okText = 'Ok',
		cancelText = 'cancel',
		loading = false,
		okClass = '',
		cancelClass = '',
		class: className = '',
		okIcon,
		cancelIcon,
		children,
		onok,
		oncancel
	}: Props = $props();

	let dialog: HTMLDialogElement | undefined = $state();

	export function showModal() {
		dialog?.showModal();
	}

	export function closeModal() {
		dialog?.close();
	}

	const handleCancelClick = () => {
		oncancel?.();
		dialog?.close();
	};

	const handleOkClick = () => {
		onok?.();
	};
</script>

<dialog class="confirmation-dialog" bind:this={dialog}>
	<Card class="confirmation-dialog-content {className}">
		<Title>
			{title}
		</Title>
		<div class="confirmation-dialog-body">
			{@render children?.()}
		</div>
		<div class="confirmation-dialog-actions">
			<Button type="button" class="btn-red col-span-1 {cancelClass}" onclick={handleCancelClick}>
				{#if cancelIcon}
					{#snippet icon()}
						{@render cancelIcon()}
					{/snippet}
				{/if}
				{cancelText}
			</Button>
			<Button
				type="button"
				{loading}
				class="btn-green col-span-1 {okClass}"
				onclick={handleOkClick}
			>
				{#if okIcon}
					{#snippet icon()}
						{@render okIcon()}
					{/snippet}
				{/if}
				{okText}
			</Button>
		</div>
	</Card>
</dialog>
