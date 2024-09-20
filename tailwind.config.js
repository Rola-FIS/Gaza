/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#fff',
                'liight-gray': '#ccc',
                mdgray: '#A9A9A9',
                black: '#000',
                'Light-Purple': '#FAF6FF',
                'field-storke': '#DDDDDD',
                primary: '#4a2984',
                whitesmoke: '#f0f0f0',
                secondary: '#f47720',
                navy: '#25215d',
                'gradient-start': '#3b82f6',
                'gradient-end': '#14b8a6',
            },
            backgroundImage: {
                'primary-gradient':
                    'linear-gradient(265.45deg, #644A90 24.54%, #8C6FBC 85.04%)',
            },
            spacing: {},
            fontFamily: {
                almarai: 'Almarai',
            },
            borderRadius: {
                '8xs': '5px',
                smi: '13px',
            },
        },
        fontSize: {
            base: '16px',
            xl: '20px',
            inherit: 'inherit',
        },
        screens: {
            sm: '640px', // Small screens
            md: '768px', // Medium screens
            lg: '1024px', // Large screens
            xl: '1280px', // Extra large screens
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                /* Scrollbar styles */
                '::-webkit-scrollbar': {
                    width: '10px',
                    height: '10px',
                },
                '::-webkit-scrollbar-track': {
                    background: '#e5e0ec',
                    borderRadius: '30px',
                },
                '::-webkit-scrollbar-thumb': {
                    background: 'rgba(222,144,63,0.64)', // Adjust to your preferred color
                    borderRadius: '30px',
                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: '#948f9e', // Darken on hover
                },
                '::-webkit-scrollbar-button': {
                    display: 'none',
                },
            };

            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
