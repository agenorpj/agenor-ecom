import * as React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useAuth } from '@/hooks/auth'
import {
    AppBar,
    Container,
    Link,
    Toolbar,
    Typography,
    useScrollTrigger,
    Grid,
} from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from '@/theme/theme'
import useStyles from '../../theme/styles'
import CssBaseline from '@mui/material/CssBaseline'

function ElevationScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return React.cloneElement(children, {
        style: {
            backgroundColor: trigger ? '#000' : 'transparent',
            transition: trigger ? '0.3s' : '0.5s',
            boxShadow: trigger ? '0 3px 5px 2px rgba(28, 28, 140, .3)' : 'none',
        },
    })
}

function ElevationScrollText(props) {
    const { children } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return React.cloneElement(children, {
        style: {
            color: '#fff',
            textDecoration: 'none',
            marginLeft: 10,
            marginRight: 10,
            textShadow: trigger ? 'none' : '1px 2px rgba(28, 28, 140, .7)',
        },
    })
}

const AppLayout = ({ title, children, description, props }) => {
    const classes = useStyles()

    return (
        <>
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline>
                        <Head>
                            <title>
                                {title
                                    ? `${title} - Agenor E-commerce`
                                    : 'Agenor E-commerce'}
                            </title>
                            {description && (
                                <meta
                                    name="description"
                                    content={description}></meta>
                            )}
                        </Head>
                        <ElevationScroll {...props}>
                            <AppBar>
                                <Toolbar>
                                    <NextLink href="/" passHref>
                                        <ElevationScrollText {...props}>
                                            <Link>
                                                <Typography
                                                    className={classes.brand}>
                                                    Fashion Store
                                                </Typography>
                                            </Link>
                                        </ElevationScrollText>
                                    </NextLink>
                                    <div className={classes.grow}></div>

                                    <div>
                                        <NextLink href="/cart" passHref>
                                            <ElevationScrollText {...props}>
                                                <Link>Cart</Link>
                                            </ElevationScrollText>
                                        </NextLink>
                                        <NextLink href="/login" passHref>
                                            <ElevationScrollText {...props}>
                                                <Link>Login</Link>
                                            </ElevationScrollText>
                                        </NextLink>
                                    </div>
                                </Toolbar>
                            </AppBar>
                        </ElevationScroll>

                        {/* <Grid
                            container
                            sx={{
                                height: '90vh',
                                display: 'grid',
                                alignItems: 'space-around',
                            }}>
                            {children}
                        </Grid> */}
                        <div>{children}</div>
                    </CssBaseline>
                </React.Fragment>
            </ThemeProvider>
        </>
    )
}

export default AppLayout
