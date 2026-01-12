/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#F2EFE9", // Warm Alabaster (Paper)
                foreground: "#3E3A36", // Charcoal (Ink)
                sand: "#E6E2D8",
                clay: "#C5B498",
                stone: "#8C8881",
                leather: "#6B5B4E",
                charcoal: "#2A2826",
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            letterSpacing: {
                'tightest': '-0.05em',
                'widest-xl': '0.25em',
            },
            backgroundImage: {
                'grain': "url('/grain.png')",
            }
        },
    },
    plugins: [],
};
