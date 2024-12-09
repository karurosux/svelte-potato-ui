<script lang="ts">
	import Button from '$lib/button/Button.svelte';

	interface Props {
		page?: number;
		totalPages?: number;
		onchange?: (page: number) => void;
	}

	let { page = 1, totalPages = 80, onchange }: Props = $props();

	function handlePrevious() {
		if (page > 1) {
			page -= 1;
			onchange?.(page);
		}
	}

	function handleNext() {
		if (page < totalPages) {
			page += 1;
			onchange?.(page);
		}
	}

	function handlePageSelect(selectedPage: number) {
		if (selectedPage >= 1 && selectedPage <= totalPages) {
			page = selectedPage;
			onchange?.(page);
		}
	}

	function getVisiblePages() {
		const start = Math.max(1, page - 2);
		const end = Math.min(totalPages, page + 2);
		const pages = [];
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}
		return pages;
	}
</script>

<div class="flex items-center justify-center gap-4">
	<Button sm onclick={handlePrevious} disabled={page === 1}>Previous</Button>
	{#each getVisiblePages() as p}
		<Button sm onclick={() => handlePageSelect(p)} disabled={p === page} class="!min-w-8">
			{p}
		</Button>
	{/each}
	<Button sm onclick={handleNext} disabled={page === totalPages}>Next</Button>
</div>
