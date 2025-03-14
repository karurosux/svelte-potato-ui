<script lang="ts">
	type Props = {
		placeholder?: string;
		class?: string;
		value?: string;
		required?: boolean;
		ariaDescribedby?: string;
		[key: string]: any;
	};
	let {
		placeholder = '',
		class: classNames = '',
		value = $bindable(''),
		required = false,
		ariaDescribedby = '',
		...props
	}: Props = $props();
</script>

<textarea
	{...props}
	placeholder={required && placeholder ? placeholder + '*' : placeholder}
	bind:value
	class="input {classNames}"
	aria-label={placeholder}
	aria-describedby={ariaDescribedby}
>
</textarea>
