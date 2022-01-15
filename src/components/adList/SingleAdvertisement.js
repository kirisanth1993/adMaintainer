import { Grid, Button, Box, Paper, Checkbox, Typography  } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './ListView.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const SingleAdvertisement = (props) => {
    const {adDetail, checkboxChange, infoPage} = props;

    return(
        <Paper className={"single-ad-container"}>
            <Grid className="fav-img-wrapper">
                <Grid display="flex" container alignItems="center">
                    <Grid item>
                        <img 
                            className={ "single-profile-img"} 
                            src={ require( "../../assets/images/" + adDetail.authorImg).default }
                        />
                    </Grid>
                    <Box item ml={2} className="authorName">
                        <Typography>{adDetail.author}</Typography>
                    </Box>
                </Grid>
                <img 
                    className={ "single-ad-img " + (infoPage && "info-page-single-ad-img")} 
                    src={ !adDetail.isNew ? require( "../../assets/images/" + adDetail.image).default : adDetail.image }
                />
                {
                    // fav icon
                    !infoPage &&
                    <Grid className="fav-checkbox">
                        <Checkbox
                            icon={ <FavoriteBorderIcon/> }
                            checkedIcon= { <FavoriteIcon/> }
                            checked={ adDetail.isFav }
                            onChange={ (e) => { checkboxChange(e.target.checked, adDetail) } }
                            color="primary"
                        />
                    </Grid>
                }
                <Grid className="nameBlock">
                    <Grid class="title">{adDetail.title}</Grid>
                    <Grid class="productId">{adDetail.productId}</Grid>
                </Grid>
            </Grid>
            <Grid>
                <Grid display="flex" container alignItems='center' className='likeBlock'>
                    <Box mr={2}><FavoriteIcon/></Box>
                    <Grid className="likeCount">{adDetail.likeCount} Likes</Grid>
                </Grid>
                <Grid className="single-ad-tags">
                    {
                        adDetail.tags.join(", ")
                    }
                </Grid>
                <Grid className="single-ad-comments">
                    View { adDetail.commentCount } Comments
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SingleAdvertisement;