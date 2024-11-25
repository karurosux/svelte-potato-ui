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

<dialog class="bg-transparent text-white" bind:this={dialog}>
	<Card class="max-w-96 bg-black text-center {className}">
		<Title>
			{title}
		</Title>
		<div class="mb-8">
			{@render children?.()}
		</div>
		<div class="grid grid-cols-2 gap-4">
			<Button class="col-span-1 !text-red-500 {cancelClass}" onclick={handleCancelClick}>
				{#if cancelIcon}
					{#snippet icon()}
						{@render cancelIcon()}
					{/snippet}
				{/if}
				{cancelText}
			</Button>
			<Button {loading} class="col-span-1 !text-green-500 {okClass}" onclick={handleOkClick}>
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
