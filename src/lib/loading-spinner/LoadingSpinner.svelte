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
		<span
			class="loader block h-4 w-4 animate-spin rounded-full border-4 border-white border-t-sky-500 ease-linear {className}"
			role="status"
			aria-live="polite"
			aria-label="Loading"
		></span>
	</Container>
{:else}
	<span
		class="loader block h-4 w-4 animate-spin rounded-full border-4 border-white border-t-sky-500 ease-linear {className}"
		role="status"
		aria-live="polite"
		aria-label="Loading"
	></span>
{/if}
