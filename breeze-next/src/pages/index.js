import AppLayout from '@/components/Layouts/AppLayout'
import useStyles from '@/theme/styles'
import {
    Paper,
    Button,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    bull,
    Link,
} from '@mui/material'
import NextLink from 'next/link'
import Carousel from 'react-material-ui-carousel'

export default function Home(props) {
    const classes = useStyles()
    var images = [
        {
            imgurl: `url('../../../images/indexbg.jpg')`,
        },
        {
            imgurl: `url('../../../images/indexbg2.jpg')`,
        },
        {
            imgurl: `url('../../../images/indexbg3.jpg')`,
        },
        {
            imgurl: `url('../../../images/indexbg4.jpg')`,
        },
    ]
    return (
        <>
            <AppLayout>
                <Carousel>
                    {images.map((item, i) => (
                        <Paper
                            sx={{
                                backgroundImage: item.imgurl,
                                width: '100%',
                                height: '456px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                border: 'none',
                                boxShadow: 'none',
                                opacity: '0.6',
                            }}>
                            <Grid
                                container
                                sx={{
                                    display: 'grid',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        display: 'grid',
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'end',
                                    }}>
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontFamily: 'Poiret One',
                                            color: 'white',
                                            display: 'grid',
                                            fontSize: '5rem',
                                            textShadow: '1px 2px #000',
                                            fontWeight: 'bolder',
                                        }}>
                                        New Collection
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        display: 'grid',
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'start',
                                        marginTop: 5,
                                    }}>
                                    <NextLink href="/products" passHref>
                                        <Link
                                            sx={{
                                                textDecoration: 'none',
                                            }}>
                                            <Button
                                                variant="outlined"
                                                color="button"
                                                sx={{
                                                    padding: '10px 50px',
                                                }}>
                                                Shop Now
                                            </Button>
                                        </Link>
                                    </NextLink>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Carousel>
                <Grid
                    container
                    sx={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-around',
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                    <Grid item xs={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    sx={{
                                        backgroundColor: '#fff',
                                    }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography
                                    sx={{ mb: 1.5 }}
                                    color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </AppLayout>
        </>
    )
}
