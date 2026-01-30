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
                    DEFAULT: '#002E5F', // Fermax Brand Blue
                    light: '#004080',
                    dark: '#001a36',
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
