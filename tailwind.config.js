const defaultTheme = require('tailwindcss/defaultTheme')

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
                    'light': '#8a3459',
                    'lighter': '#E95670',
                    'silk': '#FFD9CE'
                }
            },
            fontFamily: {
                'sans': ['Reem Kufi Fun', ...defaultTheme.fontFamily.sans],
                'sans-2': ['Oxygen', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
}