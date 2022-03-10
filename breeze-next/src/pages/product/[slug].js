import AppLayout from '@/components/Layouts/AppLayout'
import { useRouter } from 'next/router'
import React from 'react'
import NextLink from 'next/link'
import axios from '@/lib/axios'
import {
    Grid,
    Link,
    List,
    ListItem,
    Typography,
    Card,
    Button,
} from '@mui/material'
import useStyles from '@/theme/styles'
import Image from 'next/image'

const ShowProduct = props => {
    const classes = useStyles()
    const { product } = props

    if (!product) {
        return <div>Product Not Found</div>
    }
    return (
        <AppLayout title={product.name} description={product.description}>
            <Grid container className={classes.section}>
                <Grid item>
                    <NextLink href={'/'} passHref>
                        <Link>
                            <Typography variant="h6">
                                back to products
                            </Typography>
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid
                    container
                    spacing={12}
                    md={12}
                    rowSpacing={3}
                    columnSpacing={{ md: 3 }}>
                    <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={480}
                            height={480}
                            layout="intrinsic"></Image>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <List>
                            <ListItem>
                                <Typography component="h1" variant="h1">
                                    {product.name}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    Category: {product.category}
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>Brand: {product.brand}</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    Rating: {product.rating} stars (
                                    {product.numReviews} reviews)
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    {' '}
                                    Description: {product.description}
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card>
                            <List>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>Price</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                ${product.price}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Typography>Status</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>
                                                {product.countInStock > 0
                                                    ? 'In stock'
                                                    : 'Unavailable'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary">
                                        Add to cart
                                    </Button>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </AppLayout>
    )
}

export default ShowProduct

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    const product = await axios.get(`api/product/${slug}`).then(res => {
        return res.data[0]
    })
    return {
        props: {
            product,
        },
    }
}
