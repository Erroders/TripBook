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
                    text: {
                        gray: 'rgba(0, 0, 0, 0.4)',
                    },
                },
            },
            spacing: {
                header: '56px',
                tripCoverImage: '60vh',
                userProfilePicSmall: '2.2rem',
                userProfilePicBig: '15vh',
                userStatsGap: '2vh',
                tripCoverImageProfilewidth: '30vh',
                tripCoverImageProfileheight: '15vh',
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
