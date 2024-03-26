/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/lib/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#48A3A3',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
