<script lang="ts">
	import { browser } from '$app/environment';
	import { colorSchemes, MEDIA } from '$data/constants';
	import { disableAnimation, getSystemTheme, getTheme } from '$utils/theme';
	import themeStore, { setTheme } from '$data/theme';

	import ThemeScript from './theme-script.svelte';
	/** Forced theme name for the current page */
	export let forcedTheme: string | undefined = undefined;
	/** Disable all CSS transitions when switching themes */
	export let disableTransitionOnChange = false;
	/** Whether to switch between dark and light themes based on prefers-color-scheme */
	export let enableSystem = true;
	/** Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons */
	export let enableColorScheme = true;
	/** Key used to store theme setting in localStorage */
	export let storageKey = 'theme';
	/** List of all available theme names */
	export let themes: string[] = enableSystem ? ['light', 'dark', 'system'] : ['light', 'dark'];
	/** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
	export let defaultTheme: string = enableSystem ? 'system' : 'light';
	/** HTML attribute modified based on the active theme. Accepts `class` and `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.) */
	export let attribute: string | 'class' = 'data-theme';
	/** Mapping of theme name to HTML attribute value. Object where key is the theme name and value is the attribute value */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	export let value: {
		[themeName: string]: string;
	} = undefined;

	const initialTheme = getTheme(storageKey, defaultTheme);

	themeStore.set({
		theme: initialTheme,
		forcedTheme,
		resolvedTheme: initialTheme === 'system' ? getTheme(storageKey) : initialTheme,
		themes: enableSystem ? [...themes, 'system'] : themes,
		systemTheme: (enableSystem ? getTheme(storageKey) : undefined) as 'light' | 'dark' | undefined
	});

	$: theme = $themeStore.theme;
	$: resolvedTheme = $themeStore.resolvedTheme;

	const attrs = !value ? themes : Object.values(value);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const handleMediaQuery = (e?) => {
		const systemTheme = getSystemTheme(e);
		$themeStore.resolvedTheme = systemTheme;

		if (theme === 'system' && !forcedTheme) changeTheme(systemTheme, false);
	};
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const changeTheme = (theme, updateStorage = true, updateDOM = true) => {
		let name = value?.[theme] || theme;

		const enable = disableTransitionOnChange && updateDOM ? disableAnimation() : null;

		if (updateStorage) {
			try {
				localStorage.setItem(storageKey, theme);
			} catch (e) {
				// Unsupported
			}
		}

		if (theme === 'system' && enableSystem) {
			const resolved = getSystemTheme();
			name = value?.[resolved] || resolved;
		}

		if (updateDOM && browser) {
			const d = document.documentElement;

			if (attribute === 'class') {
				d.classList.remove(...(attrs as string[]));
				d.classList.add(name);
			} else {
				d.setAttribute(attribute, name);
			}
			enable?.();
		}
	};

	const mediaHandler = (...args: unknown[]) => handleMediaQuery(...args);

	const storageHandler = (e: StorageEvent) => {
		if (e.key !== storageKey) return;
		// If default theme set, use it if localstorage === null (happens on local storage manual deletion)
		setTheme(e.newValue || defaultTheme);
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const onWindow = (window) => {
		// Always listen to System preference
		const media = window.matchMedia(MEDIA);
		// Intentionally use deprecated listener methods to support iOS & old browsers
		media.addListener(mediaHandler);
		mediaHandler(media);
		// localStorage event handling
		window.addEventListener('storage', storageHandler);
		return {
			destroy() {
				window.removeEventListener('storage', storageHandler);
				media.removeListener(mediaHandler);
			}
		};
	};

	// color-scheme handling
	$: if (enableColorScheme && browser) {
		let colorScheme =
			// If theme is forced to light or dark, use that
			forcedTheme && colorSchemes.includes(forcedTheme)
				? forcedTheme
				: // If regular theme is light or dark
				theme && colorSchemes.includes(theme)
				? theme
				: // If theme is system, use the resolved version
				theme === 'system'
				? resolvedTheme || null
				: null;

		// color-scheme tells browser how to render built-in elements like forms, scrollbars, etc.
		// if color-scheme is null, this will remove the property
		document.documentElement.style.setProperty('color-scheme', colorScheme);
	}

	$: {
		if (forcedTheme) {
			changeTheme(theme, true, false);
		} else {
			changeTheme(theme);
		}
	}
</script>

<ThemeScript {forcedTheme} {storageKey} {attribute} {enableSystem} {defaultTheme} {value} {attrs} />

<svelte:window use:onWindow />
