<script>
	import Button from '$lib/button/Button.svelte';
	import Card from '$lib/card/Card.svelte';
	import CardTitle from '$lib/card/CardTitle.svelte';
	import Container from '$lib/container/Container.svelte';
	import Title from '$lib/general/Title.svelte';
</script>

<svelte:head>
	<title>✨ Svelte Potato UI | Sleek and Simplistic Svelte UI Components</title>
</svelte:head>

<Container class="prose prose-indigo prose-invert lg:prose-xl">
	<h1>✨ Svelte Potato UI</h1>
	<p>
		Potato UI is a passion project that emerged from a quest for unique and simplistic UI library,
		offering a fresh and distinctive approach.
	</p>
	<p>
		I created this mainly for use in my personal projects but decided to share it with the world.
		There may be others out there who appreciate this style as much as I do. Who knows?
	</p>
	<p>
		If you have an improvement, feel free to send a pull request. If you want to contribute, keep
		submitting improvements via pull requests. After 3 pull requests are merged, I can add you as a
		contributor upon request.
	</p>

	<h2>Philosophy and Commandments</h2>
	<ul>
		<li>Simplistic approach, components should not appear cluttered.</li>
		<li>Easy to maintain, nothing too fancy or complex.</li>
		<li>Effortless integration, components should seamlessly blend into your application.</li>
		<li>Use tailwind as much as possible to style components.</li>
		<li>Easily customizable from the outside.</li>
	</ul>

	<p>For now, check the source code of +page.svelte file for examples, docs coming soon.</p>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Button</Title>
	<Container centeredVertically centeredHorizontally class="flex-nowrap">
		<Button class="mr-4" onclick={() => alert('Hello Champ!')}>Default</Button>
		<Button class="mr-4" loading>Loading</Button>
		<Button class="mr-4" disabled>Disabled</Button>
		<Button class="mr-4" disabled>
			{#snippet icon()}
				<span class="block h-4 w-4 rounded-full bg-blue-400"></span>
			{/snippet}
			Icon
		</Button>
		<Button
			class="
    !text-sky-800
    before:!border-sky-800
    before:!bg-sky-400
    after:!border-sky-800
    after:!shadow-sky-800
    "
		>
			Blue Button
		</Button>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Card</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Card class="mb-4 w-full">Hello, this is a card.</Card>
		<Card class="mb-4 w-full">
			{#snippet header()}
				<CardTitle>
					{#snippet icon()}
						<span class="block h-6 w-6 rounded-full bg-blue-400"></span>
					{/snippet}
					Hello Title!
				</CardTitle>
			{/snippet}
			This is the body
		</Card>
	</Container>
</Container>
