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
	import DropdownMenu from '$lib/dropdown-menu/DropdownMenu.svelte';
	import DropdownMenuItem from '$lib/dropdown-menu/DropdownMenuItem.svelte';
	import Autocomplete from '$lib/autocomplete/Autocomplete.svelte';

	let confirmationDialog: ConfirmationDialog | undefined = $state();

	const handleToggleTheme = () => {
		document.documentElement.classList.toggle('dark');
	};
</script>

<svelte:head>
	<title>✨ Svelte Potato UI | Sleek and Simplistic Svelte UI Components</title>
</svelte:head>

<Container class="prose !text-inherit lg:prose-xl [&_*]:!text-inherit">
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
		<li>Integration with Tailwind CSS.</li>
		<li>Generated Components based on Tailwind CSS.</li>
		<li>
			Themeable, try toggling dark mode by clicking <a
				onclick={handleToggleTheme}
				class="cursor-pointer">here</a
			>.
		</li>
	</ul>

	<h2>Repository</h2>
	<a href="https://github.com/karurosux/svelte-potato-ui">
		https://github.com/karurosux/svelte-potato-ui
	</a>

	<h2>Package</h2>
	<a href="https://www.npmjs.com/package/svelte-potato-ui">
		https://www.npmjs.com/package/svelte-potato-ui
	</a>

	<h2>Installation</h2>
	<code>npm i --save svelte-potato-ui</code>

	<p>For now, check the source code of +page.svelte file for examples, docs coming soon.</p>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Button</Title>
	<Container
		centeredVertically
		centeredHorizontally
		class="!flex-col flex-nowrap items-center justify-center gap-4 md:!flex-row"
	>
		<Button onclick={() => alert('Hello Champ!')}>Default</Button>
		<Button class="btn-primary">Loading</Button>
		<Button variant="gray" loading>Loading</Button>
		<Button variant="sky" disabled>Disabled</Button>
		<Button variant="secondary">
			{#snippet icon()}
				<span class="block h-4 w-4 rounded-full bg-blue-400"></span>
			{/snippet}
			Icon
		</Button>
		<Button class="btn-red">Danger</Button>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Card</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap">
		<Card class="mb-4 w-full">Hello, this is a card.</Card>
		<Card class="mb-4 w-full">
			{#snippet header()}
				<CardTitle>This is the title...</CardTitle>
			{/snippet}
			Hello, this is a card.
		</Card>
		<Card class="card-sky mb-4 w-full">
			{#snippet header()}
				<CardTitle>
					{#snippet icon()}
						<span class="block h-6 w-6 rounded-full bg-blue-400"></span>
					{/snippet}
					Hello Title!
				</CardTitle>
			{/snippet}
			{#snippet headerTrailing()}
				<Button sm>Action</Button>
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
		<div class="mt-4 flex w-full items-center justify-center gap-4">
			<LoadingSpinner class="loading-spinner-red h-6 w-6" />
			<LoadingSpinner class="loading-spinner-sky" />
			<LoadingSpinner class="loading-spinner-orange h-8 w-8" />
			<LoadingSpinner class="loading-spinner-green" />
			<LoadingSpinner class="loading-spinner-blue h-10 w-10 border-8" />
		</div>
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
			btnClass="btn-yellow"
			totalRecords={101}
			recordsPerPage={10}
			onchange={(page) => toastMessage.set({ message: `You are on page ${page}`, duration: 500 })}
		/>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Tabs</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap gap-4">
		<Card class="h-[250px] w-full" bodyClass="overflow-auto" noPadding>
			<Tabs tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }]}>
				{#snippet content(selectedIndex)}
					<p class="p-4">Hello, this is tab {selectedIndex + 1}!</p>
				{/snippet}
			</Tabs>
		</Card>
		<Card class="card-red h-[250px] w-full" bodyClass="overflow-auto" noPadding>
			<Tabs class="tabs-red" tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }]}>
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
		<Input placeholder="First Name" class="col-span-1" required />
		<Input placeholder="Last Name" class="col-span-1" required />
		<TextArea placeholder="Description" class="col-span-2" required />
		<Select
			class="col-span-2"
			placeholder="Gender"
			required
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
				message: 'Hello there! This is a toast message :)',
				toastClass: ['', 'toast-red', 'toast-sky', 'toast-orange', 'toast-green', 'toast-blue'][
					Math.floor(Math.random() * 6)
				]
			})}
	>
		Show Toast
	</Button>
	<Toast position="bottom-left" />
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Dropdown Menu</Title>
	<Container col centeredVertically class="flex-nowrap">
		<DropdownMenu>
			{#snippet trigger(toggle)}
				<Button onclick={toggle}>This is the trigger</Button>
			{/snippet}
			{#snippet items(toggle)}
				<DropdownMenuItem onclick={toggle}>
					{#snippet icon()}
						<span class="block h-4 w-4 rounded-full bg-blue-400"></span>
					{/snippet}
					Option 1
				</DropdownMenuItem>
				<DropdownMenuItem onclick={toggle}>
					{#snippet icon()}
						<span class="block h-4 w-4 rounded-full bg-red-400"></span>
					{/snippet}
					Option 2
				</DropdownMenuItem>
				<DropdownMenuItem onclick={toggle}>
					{#snippet icon()}
						<span class="block h-4 w-4 rounded-full bg-green-400"></span>
					{/snippet}
					Option 3
				</DropdownMenuItem>
				<DropdownMenuItem onclick={toggle}>
					{#snippet icon()}
						<span class="block h-4 w-4 rounded-full bg-red-400"></span>
					{/snippet}
					Option 4
				</DropdownMenuItem>
			{/snippet}
		</DropdownMenu>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Autocomplete</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap gap-4">
		<Autocomplete
			class="w-full"
			placeholder="Search for a fruit"
			dataSource={(filter) =>
				Promise.resolve(
					['Apple', 'Banana', 'Orange'].filter((f) =>
						f.toLowerCase().includes(filter.toLowerCase())
					)
				)}
		/>
	</Container>
</Container>

<Container col topSpacing class="max-w-[800px]">
	<Title>Confirmation Dialog</Title>
	<Button onclick={() => confirmationDialog?.showModal()}>Show Confirmation Dialog</Button>
</Container>

<ConfirmationDialog
	bind:this={confirmationDialog}
	onok={() => {
		confirmationDialog?.closeModal();
	}}
>
	Hello, I am a confirmation dialog!
</ConfirmationDialog>

<Container col topSpacing class="max-w-[800px]">
	<Title>Alert</Title>
	<Container col centeredVertically centeredHorizontally class="flex-nowrap gap-4">
		<Alert>This is a default alert.</Alert>
		<Alert class="alert-stone">This is a stone alert.</Alert>
		<Alert class="alert-red">This is an alert of other color.</Alert>
		<Alert class="alert-green">Hello, I am green!</Alert>
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
