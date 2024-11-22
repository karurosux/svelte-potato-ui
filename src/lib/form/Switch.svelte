<script lang="ts">
	type Props = {
		label?: string;
		value?: boolean;
		[key: string]: any;
	};
	let { label = '', value = false, ...props }: Props = $props();
</script>

<div class="relative inline-flex gap-2">
	<div class="h-5 w-11">
		<input
			{...props}
			bind:checked={value}
			id="switch-component-ripple-on"
			type="checkbox"
			class="peer h-10 w-11 cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-black transition-colors duration-300 checked:bg-gray-200"
			role="switch"
			aria-checked={value}
			aria-label={label}
		/>
		<label
			for="switch-component-ripple-on"
			class="absolute left-0 top-0 h-10 w-5 cursor-pointer rounded-xl border-2 border-gray-200 bg-black shadow-sm transition-all duration-300 before:absolute before:left-2/4 before:top-2/4 before:block before:h-10 before:w-10 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-gray-200 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-6"
		>
			<div
				class="left-2/4 top-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
				data-ripple-dark="true"
			></div>
		</label>
	</div>

	<label for="switch-component-ripple-on" class="cursor-pointer p-1 text-xl text-gray-200">
		{label}
	</label>
</div>
