/**
 * @constant {Array<Object>} Items - An array of objects defining the navigation menu items.
 * Each object represents a single menu item with the following properties:
 * - label: {string} - The text displayed for the menu item.
 * - path: {string} - The URL path associated with the menu item.
 */
const Items = [
    { label: 'Treningi na świeżym powietrzu', path: '/treningi-na-swiezym-powietrzu' },
    { label: 'Pyszne jedzenie', path: '/pyszne-jedzenie' },
    { label: 'Świetna atmosfera', path: '/swietna-atmosfera' },
    { label: 'Regeneracja psychiczna', path: '/regeneracja-psychiczna' },
    { label: 'Wakacyjny klimat', path: '/wakacyjny-klimat' },
    { label: 'Niezapomniane wrażenia', path: '/niezapomniane-wrazenia' },
];

/**
 * @module TabsArray
 * @description Exports the `Items` array which contains the configuration for the navigation menu.
 * This array is intended to be used by components that render the application's main navigation.
 */
export default Items;