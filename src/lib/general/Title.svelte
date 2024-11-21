<script lang="ts">
  import { type Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    class?: string;
  }

  let { children, class:classNames = "" }: Props = $props();
</script>

<h1 class="text-2xl text-white mb-8 font-semibold {classNames}">
  {@render children?.()}
</h1>
