<script lang="ts">
	type Props = {
		placeholder?: string;
		class?: string;
		value?: string;
		[key: string]: any;
	};

	let {
		placeholder = '',
		class: classNames = '',
		value = $bindable(''),
		...props
	}: Props = $props();
</script>

<input
	{...props}
	{placeholder}
	class="rounded-lg border-2 border-white bg-black p-4
  px-8 text-lg font-bold text-white outline-none
  focus:border-sky-300
  focus:outline-none
  focus:ring-1
  focus:ring-sky-300
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
  {classNames}"
	bind:value
/>
