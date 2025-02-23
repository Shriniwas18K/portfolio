/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enables dark mode using the "class" strategy
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind scans your components
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    light: '#f8f9fa', // Light mode background
                    dark: '#121212', // Dark mode background
                },
                text: {
                    light: '#111', // Light mode text
                    dark: '#f8f9fa', // Dark mode text
                },
                primary: {
                    light: '#6200ea', // Example primary color for light mode
                    dark: '#bb86fc', // Example primary color for dark mode
                },
            },
        },
    },
    plugins: [],
};
