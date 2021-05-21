module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#262626',
                    gray: '#FAFAFA',
                    blue: '#3897F0',
                    white: '#FFFFFF',
                },
            },
            spacing: {
                header: '56px',
                tripCoverImage: '60vh',
            },
            fontFamily: {
                display: ['Source Sans Pro', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
