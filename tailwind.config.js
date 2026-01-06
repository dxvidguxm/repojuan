/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                brand: {
                    primary: '#3B82F6', // Blue 500
                    secondary: '#06B6D4', // Cyan 500
                    tertiary: '#6366F1', // Indigo 500
                    glow: '#60A5FA', // Blue 400
                },
                surface: {
                    base: '#050608', // Deep black/blue
                    card: '#111218', // Slightly lighter
                    overlay: 'rgba(5, 6, 8, 0.8)', // Glassmorphism base
                },
                content: {
                    primary: '#FFFFFF',
                    secondary: 'rgba(255, 255, 255, 0.9)',
                    tertiary: 'rgba(255, 255, 255, 0.7)',
                }
            },
        },
    },
    plugins: [],
}
