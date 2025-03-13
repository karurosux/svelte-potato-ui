<script lang="ts">
	import Container from '$lib/container/Container.svelte';

	interface Props {
		class?: string;
		absolute?: boolean;
	}

	let { class: className = '', absolute = false }: Props = $props();
</script>

{#if absolute}
	<Container absolute centeredVertically centeredHorizontally>
		<span class="loading-spinner {className}" role="status" aria-live="polite" aria-label="Loading"
		></span>
	</Container>
{:else}
	<span class="loading-spinner {className}" role="status" aria-live="polite" aria-label="Loading"
	></span>
{/if}
