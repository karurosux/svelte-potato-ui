<script lang="ts">
	import { fade } from 'svelte/transition';
	import { toastMessage, type ToastMessage } from '$lib/toastr/toast.js';
	import { v4 as uuidv4 } from 'uuid';
	import { writable } from 'svelte/store';

	type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

	type Props = { position?: ToastPosition };

	const positionClassMap: Record<ToastPosition, string> = {
		'top-right': 'toast-container-right-top',
		'top-left': 'toast-container-left-top',
		'bottom-right': 'toast-container-right-bottom',
		'bottom-left': 'toast-container-left-bottom'
	};

	const msgs = writable<{ id: string; item: ToastMessage }[]>([]);
	let { position: variant = 'top-right' }: Props = $props();
	let positionClass = $derived(positionClassMap[variant]);

	$effect(() => {
		if ($toastMessage) {
			let id = uuidv4();

			msgs.update((m) => [...m, { id, item: $toastMessage }]);

			setTimeout(() => {
				msgs.update((ms) => ms.filter((m) => m.id !== id));
			}, $toastMessage.duration || 3000);
		}
	});
</script>

<div class="toast-container {positionClass}">
	{#each $msgs as m (m.id)}
		<div transition:fade={{ duration: 300 }} class="toast-instance {m.item.toastClass}">
			<p class="flex-1 text-xl">{m.item.message}</p>
		</div>
	{/each}
</div>
