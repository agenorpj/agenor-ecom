import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#1c1c8c',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#d42216',
        },
        background: {
            default: '#f0f0f0',
        },
        text: {
            primary: '#1c1c8c',
        },
        button: {
            main: '#fff',
        },
    },
    typography: {
        fontFamily: [
            '"Nanum Gothic"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Poiret One"',
        ].join(','),
        h1: {
            fontSize: '2rem',
        },
    },
})

export default theme
