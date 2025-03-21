import React from 'react'
import { Box, Grid } from '@mui/material';
import { Avatar, Rating } from '@mui/material';

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>I</Avatar>
                    </Box>

                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'>Imran</p>
                            <p className='opacity-70'>April 9,2024</p>
                        </div>
                    </div>

                    <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                    <p>Nice product,i love this shoe </p>
                </Grid>

            </Grid>
        </div>
    )
};

export default ProductReviewCard;