import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Grid, ImageListItemBar, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MuiButton from '../StyleComponent/MuiButton';

const itemData = [
    {
        img: 'https://i.ibb.co.com/Rb5TG0m/bmwm3.jpg',
        title: 'BMW M3',
        author: '@bmw_company',
    },
    {
        img: 'https://i.ibb.co.com/YWVMdxJ/camry.jpg',
        title: 'Toyota',
        author: '@silverdalex',
    },
    {
        img: 'https://i.ibb.co.com/2tPS3NC/mers.jpg',
        title: 'Mercedes',
        author: '@mercedes_benz',
    },
    {
        img: 'https://i.ibb.co.com/RvXT1xF/apollo.jpg',
        title: 'Appolo v8 Car',
        author: '@helloimnik',
    },
    {
        img: 'https://i.ibb.co/MnqK5x4/car4.jpg',
        title: 'SM B 5006',
        author: '@smb_company',
    },
    {
        img: 'https://i.ibb.co.com/wcNzVnp/ferrari.jpg',
        title: 'Ferrari Enzo',
        author: '@enzo_company',
    },
    {
        img: 'https://i.ibb.co.com/0fQbdkH/bentley.jpg',
        title: 'Bentley Bentayga',
        author: '@bentayga',
    },
    {
        img: 'https://i.ibb.co/D5tGT2M/car7.jpg',
        title: 'LariatLariat',
        author: '@tjdragotta',
    },
    {
        img: 'https://i.ibb.co/jbHHrHs/car8.jpg',
        title: 'Fern W3',
        author: '@katie_fern',
    },
    {
        img: 'https://i.ibb.co.com/YWVMdxJ/camry.jpg',
        title: 'Toyota',
        author: '@silverdalex',
    },
    {
        img: 'https://i.ibb.co/5kzWDL9/car10.jpg',
        title: 'Ford Motor',
        author: '@shelleypauls',
    },
    {
        img: 'https://i.ibb.co/JH74RBf/car11.jpg',
        title: 'Daimler',
        author: '@peterlaster',
    },
    {
        img: 'https://i.ibb.co/G2SxM90/car12.jpg',
        title: 'Volkswagen',
        author: '@southside_customs',
    },
];

const CarList = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2} sx={{ mt: 15 }}>
                        <Typography style={{ fontWeight: 600 }} variant="h4" gutterBottom component="div">
                            CHOOSE YOUR<br /> DREAM
                        </Typography>
                        <Typography sx={{ fontWeight: 'light', mb: 2, fontSize: 15, textAlign: 'justify', width: '75%' }} variant="h6" component="div">
                          This website only for Perekupshikov here you can find Automotive Dealers, car resellers, car service stations, mechanic workshop and auto motor retailers.
                        </Typography>
                        <Link to='/cars' style={{ textDecoration: 'none' }}><MuiButton>Catalog Cars</MuiButton></Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ImageList sx={{ width: 500, height: 450 }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>by: {item.author}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CarList;