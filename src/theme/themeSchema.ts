/*
  This theme file follows System UI Theme Specification
  https://system-ui.com/theme/
*/

const themeSchema = {
    space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    padding: [0, 1, 3, 5, 10, 15, 20],
    borderWidth: [0, 1, 3, 5],
    radii: [0, 3, 4, 6, 8, 12, 15],
    fontSizes: [8, 10, 14, 16, 18, 20, 24, 28, 32, 36],
    sizes: {
        input: {
            small: 100,
            medium: 300,
            large: 500,
        },
        icon: {
            xsmall: 16,
            small: 40,
            medium: 40,
            large: 80,
            xlarge: 100,
        },
        navbar: {
            xsmall: 16,
            small: 30,
            medium: 40,
            large: 70,
        },
        activityIndicator: {
            small: 40,
            medium: 60,
            large: 80,
        },
        button: {
            width: {
                small: 90,
                medium: 100,
                large: 120,
            },
            height: {
                small: 25,
                medium: 35,
                large: 55,
            },
        },
        logoSignIn: {
            width: {
                small: 91,
                medium: 500,
                large: 600,
            },
            height: {
                small: 60,
                medium: 500,
                large: 600,
            },
        },
        mainImage: {
            width: {
                small: 400,
                medium: 500,
                large: 600,
            },
            height: {
                small: 175,
                medium: 250,
                large: 350,
            },
        },
        carouselImageLandScape: {
            width: {
                small: 150,
                medium: 200,
                large: 400,
            },
            height: {
                small: 100,
                medium: 120,
                large: 175,
            },
        },
        carouselImagePortrait: {
            width: {
                small: 75,
                medium: 100,
                large: 200,
            },
            height: {
                small: 100,
                medium: 140,
                large: 280,
            },
        },
        pill: {
            height: {
                small: 10,
                medium: 16,
                large: 22,
            },
        },
        heroCarousel: {
            height: {
                portrait: {
                    small: 100,
                    medium: 200,
                    large: 300,
                },
                landscape: {
                    small: 167,
                    medium: 334,
                    large: 500,
                },
            },
        },
    },
    colors: {
        white: '#fff',
        black: '#000',
        red: '#ff0000',
        transparent: 'transparent',
        lightboxBackground: '#00000090',
        grays: {
            100: '#f4f4f4',
            200: '#e1e1e7',
            300: '#ddd',
            400: '#bbb',
            500: '#999',
            600: '#777',
            700: '#666',
            800: '#444',
            900: '#333',
        },
        blues: {
            300: '#5dbdff',
            500: '#008dcf',
            700: '#00609e',
        },
        oranges: {
            500: '#ffca47',
            700: '#ff9900',
            900: '#c66a00',
        },
    },

    // Aliases
};

export default themeSchema;
