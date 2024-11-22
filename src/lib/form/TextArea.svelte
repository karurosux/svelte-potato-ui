<script lang="ts">
	type Props = {
		placeholder?: string;
		class?: string;
		value?: string;
		ariaDescribedby?: string;
		[key: string]: any;
	};
	let {
		placeholder = '',
		class: classNames = '',
		value = '',
		ariaDescribedby = '',
		...props
	}: Props = $props();
</script>

<textarea
	{...props}
	{placeholder}
	bind:value
	class="rounded-lg border-2 border-white bg-black p-4
  px-8 text-lg font-bold text-white outline-none
  focus:border-sky-300
  focus:outline-none
  focus:ring-1
  focus:ring-sky-300
  focus:invalid:border-pink-500
  focus:invalid:ring-pink-500 {classNames}"
	aria-label={placeholder}
	aria-describedby={ariaDescribedby}
>
</textarea>
