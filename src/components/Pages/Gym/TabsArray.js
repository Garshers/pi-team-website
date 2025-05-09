/**
 * @constant {Array<Object>} Items - An array of objects defining the navigation menu items.
 * Each object represents a single menu item with the following properties:
 * - label: {string} - The text displayed for the menu item.
 * - path: {string} - The URL path associated with the menu item.
 */
const Items = [
    { label: 'Treningi personalne', path: '/treningi-personalne' },
    { label: 'Rozpiski żywieniowe i treningowe', path: '/rozpiski-zywieniowe-i-treningowe' },
    { label: 'Prowadzenie online', path: '/prowadzenie-online' },
    { label: 'Kompleksowe podejście', path: '/kompleksowe-podejscie' },
    { label: 'Osiągnięcie wymarzonej sylwetki', path: '/osiagniecie-wymarzonej-sylwetki' },
    { label: 'Interpretacja wyników badań krwi', path: '/interpretacja-wynikow-badan-krwi' },
    { label: 'Stały monitoring efektów', path: '/staly-monitoring-efektow' },
    { label: 'Wykwalifikowana kadra', path: '/wykwalifikowana-kadra' },
];

/**
 * @module TabsArray
 * @description Exports the `Items` array which contains the configuration for the navigation menu.
 * This array is intended to be used by components that render the application's main navigation.
 */
export default Items;