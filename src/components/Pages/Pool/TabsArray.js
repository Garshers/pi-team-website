/**
 * @constant {Array<Object>} Items - An array of objects defining the navigation menu items.
 * Each object represents a single menu item with the following properties:
 * - label: {string} - The text displayed for the menu item.
 * - path: {string} - The URL path associated with the menu item.
 */
const Items = [
    { label: 'treningi-dla-doroslych', path: '/treningi-dla-doroslych' },
    { label: 'treningi-dla-dzieci', path: '/treningi-dla-dzieci' },
    { label: 'nauka-plywania-od-podstaw', path: '/nauka-plywania-od-podstaw' },
    { label: 'doskonalenie-technik-plywackich', path: '/doskonalenie-technik-plywackich' },
    { label: 'zajecia-indywidualne-i-grupowe', path: '/zajecia-indywidualne-i-grupowe' },
    { label: 'videoanaliza-techniki-plywania', path: '/videoanaliza-techniki-plywania' },
    { label: 'profesjonalne-zindywidualizowany-treningi-plywackie-dla-triathlonistow', path: '/profesjonalne-zindywidualizowany-treningi-plywackie-dla-triathlonistow' },
    { label: 'przygotowanie-do-testow', path: '/przygotowanie-do-testow' },
];

/**
 * @module TabsArray
 * @description Exports the `Items` array which contains the configuration for the navigation menu.
 * This array is intended to be used by components that render the application's main navigation.
 */
export default Items;