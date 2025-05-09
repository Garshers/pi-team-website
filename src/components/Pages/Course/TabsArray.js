/**
 * @constant {Array<Object>} Items - An array of objects defining the navigation menu items.
 * Each object represents a single menu item with the following properties:
 * - label: {string} - The text displayed for the menu item.
 * - path: {string} - The URL path associated with the menu item.
 */
const Items = [
    { label: 'zweryfikowana wiedza i nowoczesne podejscie', path: '/zweryfikowana-wiedza-i-nowoczesne-podejscie' },
    { label: 'detalicznie i merytorycznie przedstawiona praktyka', path: '/detalicznie-i-merytorycznie-przedstawiona-praktyka' },
    { label: 'wiedza oparta na doswiadczeniu trenerskim', path: '/wiedza-oparta-na-doswiadczeniu-trenerskim' },
    { label: 'wspolpraca z prawdziwymi sportowcami a nie samozwanczymi trenerami', path: '/wspolpraca-z-prawdziwymi-sportowcami-a-nie-samozwanczymi-trenerami' },
    { label: 'certyfikat ukonczenia kursu', path: '/certyfikat-ukonczenia-kursu' },
    { label: 'duma z bycia profesjonalista w swoim fachu i zwiazanej z tym samorealizacji', path: '/duma-z-bycia-profesjonalista-w-swoim-fachu-i-zwiazanej-z-tym-samorealizacji' },
];

/**
 * @module TabsArray
 * @description Exports the `Items` array which contains the configuration for the navigation menu.
 * This array is intended to be used by components that render the application's main navigation.
 */
export default Items;