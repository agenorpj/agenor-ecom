import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    main: {
        height: '80vh',
    },
    navbar: {
        '& a': {
            color: '#1c1c8c',
            marginLeft: 10,
            textDecoration: 'none',
        },
    },
    brand: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    grow: {
        flexGrow: 1,
    },
    titles: {
        margin: 20,
        fontFamily: 'Poiret One',
        fontWeight: 'bolder',
        letterSpacing: 2,
        borderBottom: '1px solid #1c1c8c',
    },
    footer: {
        textAlign: 'center',
        backgroundColor: '#1c1c8c',
        position: 'fixed',
        bottom: 0,
        padding: 10,
        width: '100%',
        opacity: 0.6,
        fontWeight: 'bolder',
    },
    section: {
        marginTop: 70,
        marginBottom: 10,
        letterSpacing: 1.3,
        '& a': {
            textDecoration: 'none',
        },
        '& h6': {
            fontWeight: 'bold',
            fontFamily: 'Poiret One',
            borderBottom: '1px solid #1c1c8c',
            marginLeft: 10,
        },
    },
    titlecontainer: {
        marginTop: 70,
    },
})

export default useStyles
