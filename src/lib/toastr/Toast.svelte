<script lang="ts">
	import { fade } from 'svelte/transition';
	import { toastMessage, type ToastMessage } from '$lib/toastr/toast.js';
	import { v4 as uuidv4 } from 'uuid';
	import { writable } from 'svelte/store';

	const msgs = writable<{ id: string; item: ToastMessage }[]>([]);

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

<div class="fixed right-8 top-8 grid grid-cols-1 gap-8">
	{#each $msgs as m (m.id)}
		<div
			transition:fade={{ duration: 300 }}
			class="flex min-w-[200px] max-w-[500px] items-center justify-center rounded-lg border-2 bg-black p-8 text-white shadow-lg"
		>
			<p class="flex-1 text-xl">{m.item.message}</p>
		</div>
	{/each}
</div>
