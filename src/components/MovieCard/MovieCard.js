import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMenu from './CardMenu';
import { styled } from '@mui/material/styles';

const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(1),
      }
  }));

const MovieCard = () => {

    const onAddClick = (movie) => alert('movie is added')

    return (
        <Card sx={{ maxWidth: 250, position: 'relative' }}>
            <CardMenu onAddClick={onAddClick} />
            <CardMedia
                component="img"
                height="250"
                image="https://media.themoviedb.org/t/p/w220_and_h330_face/mAx0fEjmO6oZxpEFpLWB0OQjfyM.jpg"
                alt="Paella dish"
            />
            <CardInfo>
                <Typography variant="h5" gutterBottom component={'div'}>
                    Name Film 
                </Typography>
                <Typography variant="subtitle1" gutterBottom component={'div'}>
                    04 лип. 2024
                </Typography>
            </CardInfo>
        </Card>
    )
}

export default MovieCard