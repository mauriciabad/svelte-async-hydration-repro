# Hydration mismatch after an `await` isn't recovered

Svelte 5.57.3, `experimental.async`, no SvelteKit.

```sh
nvm use     # Node 26 (.nvmrc)
npm install
npm start   # builds, server-renders App.svelte into dist/index.html, serves it
```

Open the printed URL and click the button.

- `index.html` has a small inline script that runs before hydration. It adds an element right after the
  `<input>`, as password managers (Proton Pass, LastPass…) do.
- **With the `await`** in `src/App.svelte`: `hydration_mismatch` warning, then `Uncaught (in promise) {}`.
  The button never becomes interactive: it stays at "Clicked 0".
- **Without it** (`{#if await Promise.resolve(true)}` → `{#if true}`): the same `hydration_mismatch`
  warning, then Svelte renders the app again and the button works.
