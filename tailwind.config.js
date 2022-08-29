/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'theme': {
                    'primary': '#432F70',
                    'secondary': '#713770',
                    'light': '#B34270',
                    'lighter': '#E95670',
                }
            }
        },
    },
    plugins: [],
}