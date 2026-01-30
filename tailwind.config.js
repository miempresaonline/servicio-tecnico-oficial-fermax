/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fermax: {
                    DEFAULT: '#F02C7C', // Updated Brand Color
                    light: '#F85A9B',   // Lighter shade
                    dark: '#BE0050',    // Darker shade
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            screens: {
                'xs': '400px',
            }
        },
    },
    plugins: [],
}
