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
                    primary: 'var(--brand-primary)', // Dynamic Blue
                    secondary: '#06B6D4', // Cyan 500
                    tertiary: '#6366F1', // Indigo 500
                    glow: '#60A5FA', // Blue 400
                },
                surface: {
                    base: 'var(--bg-primary)', // Dynamic Background
                    card: 'var(--card-bg)', // Dynamic Card
                    overlay: 'rgba(5, 6, 8, 0.8)', // Glassmorphism base
                },
                content: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    tertiary: 'rgba(255, 255, 255, 0.7)',
                }
            },
        },
    },
    plugins: [],
}
