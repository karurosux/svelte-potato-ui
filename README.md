# Svelte Potato UI

Svelte Potato UI is a lightweight and customizable UI component library for Svelte applications.

## Demo

Visit the following link to see a live demo of Svelte Potato UI in action:

[https://svelte-potato-ui.vercel.app](https://svelte-potato-ui.vercel.app)

## Installation

To install Svelte Potato UI in your project, run the following command:

```bash
npm install --save svelte-potato-ui
```

## Usage

Import the components you need and start using them in your Svelte application:

```svelte
<script>
 import { Button, Card } from 'svelte-potato-ui';
</script>

<Button>Click Me</Button>
<Card>
 <p>This is a card component.</p>
</Card>
```

To include the styles, you can either add the package to your Tailwind CSS configuration or directly include the styles file in your project.

### Option 1: Tailwind CSS Configuration

Add the following to your `tailwind.config.js` file:

```javascript
module.exports = {
 content: [
  './src/**/*.{html,js,svelte,ts}',
  './node_modules/svelte-potato-ui/**/*.{html,js,svelte,ts}'
 ],
 theme: {
  extend: {}
 },
 plugins: []
};
```

### Option 2: Directly Include the Styles

Include the styles file in your main `App.svelte` or `main.js` file:

```javascript
import 'svelte-potato-ui/potato-ui.css';
```

## Documentation

Documentation is currently in progress.

## Contributing

Contribution guidelines in progress.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
