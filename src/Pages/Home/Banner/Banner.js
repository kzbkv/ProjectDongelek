import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import MuiButton from '../../../StyleComponent/MuiButton';
import Typical from 'react-typical';


const Banner = () => {

    return (
        <div style={{ minHeight: 500, height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: 700, }}>
                                Car Selling
                                <Typical
                                    steps={['Сату', 5000, 'Продажа', 5000,'Buy', 5000]}
                                    loop={Infinity}
                                    wrapper="div"
                                />
                            </Typography>

                            <Typography sx={{ fontWeight: 'light', mb: 2, fontSize: 15, textAlign: 'justify', width: '75%' }} variant="h6" component="div">
                            You're a young kid and you buy yourself a banana, black, everyone asks what kind of car you have and you say Mercedes banana
                            </Typography>
                            <Link to='/cars' style={{ textDecoration: 'none' }}><MuiButton>Explore Car</MuiButton></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{ width: '100%' }} src="https://i.ibb.co.com/pLvtcrS/main.jpg" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;