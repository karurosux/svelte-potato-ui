<script lang="ts">
	type Props = Partial<HTMLInputElement> & {
		placeholder?: string;
		class?: string;
		value?: string;
		required?: boolean;
		inputEl?: HTMLInputElement | null;
		[key: string]: any;
	};

	let {
		placeholder = '',
		class: classNames = '',
		value = $bindable(''),
		inputEl = $bindable(null),
		required = false,
		...props
	}: Props = $props();
</script>

<input
	{...props as any}
	bind:this={inputEl}
	placeholder={required && placeholder ? placeholder + '*' : placeholder}
	{required}
	class="input {classNames}"
	bind:value
/>
