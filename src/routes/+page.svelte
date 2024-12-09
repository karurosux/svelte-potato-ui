<script lang="ts">
	import Alert from '$lib/alert/Alert.svelte';
	import Button from '$lib/button/Button.svelte';
	import Card from '$lib/card/Card.svelte';
	import CardTitle from '$lib/card/CardTitle.svelte';
	import Container from '$lib/container/Container.svelte';
	import Switch from '$lib/form/Switch.svelte';
	import Input from '$lib/form/Input.svelte';
	import Select from '$lib/form/Select.svelte';
	import TextArea from '$lib/form/TextArea.svelte';
	import Title from '$lib/general/Title.svelte';
	import LoadingSpinner from '$lib/loading-spinner/LoadingSpinner.svelte';
	import Table from '$lib/table/Table.svelte';
	import TableHeader from '$lib/table/TableHeader.svelte';
	import TableHeaderCell from '$lib/table/TableHeaderCell.svelte';
	import TableRow from '$lib/table/TableRow.svelte';
	import TableRowCell from '$lib/table/TableRowCell.svelte';
	import { toastMessage } from '$lib/toastr/toast.js';
	import Toast from '$lib/toastr/Toast.svelte';
	import tater from '../assets/tater.png';
	import ConfirmationDialog from '$lib/confirmation-dialog/ConfirmationDialog.svelte';
	import Pager from '$lib/pager/Pager.svelte';
	import Tabs from '$lib/tabs/Tabs.svelte';

	let confirmationDialog: ConfirmationDialog | undefined = $state();
</script>

<svelte:head>
	<title>✨ Svelte Potato UI | Sleek and Simplistic Svelte UI Components</title>
</svelte:head>

<Container class="prose prose-sky prose-invert lg:prose-xl">
	<h1>✨ Svelte <span class="shine-effect">Potato UI</span></h1>
	<img src={tater} alt="tater" class="m-auto h-56" />
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

	<h2>Repository</h2>
	<a href="https://github.com/karurosux/svelte-potato-ui">
		https://github.com/karurosux/svelte-potato-ui
	</a>

	<h2>Installation</h2>
	<code>npm i --save svelte-potato-ui</code>

	<p>For now, check the source code of +page.svelte file for examples, docs coming soon.</p>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Button</Title>
	<Container centeredVertically centeredHorizontally class="!flex-col flex-nowrap md:!flex-row">
		<Button class="mb-4 mr-4 md:mb-0" onclick={() => alert('Hello Champ!')}>Default</Button>
		<Button class="mb-4 mr-4 md:mb-0" loading>Loading</Button>
		<Button class="mb-4 mr-4 md:mb-0" disabled>Disabled</Button>
		<Button class="mb-4 mr-4 md:mb-0" disabled>
			{#snippet icon()}
				<span class="block h-4 w-4 rounded-full bg-blue-400"></span>
			{/snippet}
			Icon
		</Button>
		<Button
			class="
    mb-4
    !text-sky-800
    before:!border-sky-800
    before:!bg-sky-400
    after:!border-sky-800
    after:!shadow-sky-800
    md:mb-0
    "
		>
			Blue
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
			{#snippet headerTrailing()}
				<Button sm class="invert">Action</Button>
			{/snippet}
			This is the body
		</Card>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Loading Spinner</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Card class="h-[200px] w-full">
			{#snippet header()}
				<CardTitle>This is a panel that is loading.</CardTitle>
			{/snippet}
			<LoadingSpinner absolute />
		</Card>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Table</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Card class="h-[250px] w-full" bodyClass="overflow-auto" noPadding>
			{#snippet header()}
				<CardTitle>This is a table</CardTitle>
			{/snippet}
			<Table>
				{#snippet header()}
					<TableHeader>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Description</TableHeaderCell>
					</TableHeader>
				{/snippet}
				<TableRow>
					<TableRowCell>Jhon</TableRowCell>
					<TableRowCell>Jhon is not Doe...</TableRowCell>
				</TableRow>
				<TableRow>
					<TableRowCell>Jhony</TableRowCell>
					<TableRowCell>Nope, he is neither...</TableRowCell>
				</TableRow>
			</Table>
		</Card>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Pager</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Pager
			onchange={(page) => toastMessage.set({ message: `You are on page ${page}`, duration: 500 })}
		/>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Tabs</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Card class="h-[250px] w-full" bodyClass="overflow-auto" noPadding>
			<Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }]}>
				{#snippet content(selectedIndex)}
					<p class="p-4">Hello, this is tab {selectedIndex + 1}!</p>
				{/snippet}
			</Tabs>
		</Card>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Form</Title>
	<div class="grid grid-cols-2 gap-8">
		<Input placeholder="First Name" class="col-span-1" />
		<Input placeholder="Last Name" class="col-span-1" />
		<TextArea placeholder="Description" class="col-span-2" />
		<Select
			class="col-span-2"
			placeholder="Gender"
			options={[
				{
					label: 'Male',
					value: 'm'
				},
				{
					label: 'Female',
					value: 'f'
				}
			]}
		/>
		<Switch label="Is Admin" />
	</div>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Toast</Title>
	<Button
		onclick={() =>
			toastMessage.set({
				message: 'Hello there! This is a toast message :)'
			})}
	>
		Show Toast
	</Button>
	<Toast />
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Confirmation Dialog</Title>
	<Button onclick={() => confirmationDialog?.showModal()}>Show Confirmation Dialog</Button>
	<Toast />
</Container>

<ConfirmationDialog
	bind:this={confirmationDialog}
	onok={() => {
		console.log('Ok...');
		confirmationDialog?.closeModal();
	}}
>
	Hello, I am a confirmation dialog!
</ConfirmationDialog>

<Container col topSpacing class="max-w-[800px]">
	<Title>Alert</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Alert class="mb-4 w-full">This is a neutral alert.</Alert>
		<Alert class="mb-4 w-full !border-red-500 !bg-red-950 bg-opacity-25"
			>This is an alert of other color.</Alert
		>
		<Alert class="mb-4 w-full !border-green-500 !bg-green-950 bg-opacity-25"
			>Hello, I am green!</Alert
		>
	</Container>
</Container>

<style>
	.shine-effect {
		display: inline-block;
		background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);
		background-size: 200% auto;
		color: #fff;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 2s linear infinite;
	}

	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}
</style>
