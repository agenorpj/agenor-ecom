import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import useStyles from '@/theme/styles'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'

import NextLink from 'next/link'

const Products = props => {
    const classes = useStyles()
    const { prods } = props

    return (
        <AppLayout>
            <Grid container className={classes.titlecontainer}>
                <Grid item>
                    <Typography
                        variant="h1"
                        component="h1"
                        className={classes.titles}>
                        Products
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid
                    container
                    md={12}
                    rowSpacing={3}
                    columnSpacing={{ md: 3 }}>
                    {prods.map(product => (
                        <Grid item md={3} key={product.name}>
                            <Card>
                                <NextLink
                                    href={`/product/${product.slug}`}
                                    passHref>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            key={product.name}
                                            title={product.name}></CardMedia>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="div">
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                color="text.secondary"
                                                component="div">
                                                $ {product.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                size="small"
                                                color="primary"
                                                component="div">
                                                Add to cart
                                            </Button>
                                        </CardActions>
                                    </CardActionArea>
                                </NextLink>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </AppLayout>
    )
}
export default Products

export async function getServerSideProps() {
    const prods = await axios.get('api/products').then(res => {
        return res.data
    })
    return {
        props: {
            prods,
        },
    }
}
