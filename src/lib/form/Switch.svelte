<script lang="ts">
	type Props = {
		label?: string;
		value?: boolean;
		[key: string]: any;
	};
	let { label = '', value = $bindable(false), ...props }: Props = $props();
</script>

<div class="switch relative inline-flex gap-2">
	<div class="h-5 w-11">
		<input
			{...props}
			bind:checked={value}
			id="switch-component-ripple-on"
			type="checkbox"
			class="peer switch-input h-10 w-11 cursor-pointer appearance-none rounded-xl border-2 transition-colors duration-300"
			role="switch"
			aria-checked={value}
			aria-label={label}
		/>
		<label
			for="switch-component-ripple-on"
			class="switch-label absolute left-0 top-0 h-10 w-5 cursor-pointer rounded-xl border-2 shadow-sm transition-all duration-300 before:absolute before:left-2/4 before:top-2/4 before:block before:h-10 before:w-10 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6"
		>
			<div
				class="switch-handle left-2/4 top-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
				data-ripple-dark="true"
			></div>
		</label>
	</div>

	<label for="switch-component-ripple-on" class="switch-label-text cursor-pointer p-1 text-xl">
		{label}
	</label>
</div>
