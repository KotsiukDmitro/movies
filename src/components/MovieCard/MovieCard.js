import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMenu from './CardMenu';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'

const CardInfo = styled(CardContent)(({ theme }) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(1),
    }
}));

const MovieCard = ({ movie, onCardSelect }) => {

    return (
        <Card sx={{ maxWidth: 250, position: 'relative' }}>
            <CardMenu onCardSelect={onCardSelect} />
            <CardMedia
                component="img"
                height="250"
                image={movie.image}
                alt={movie.title}
            />
            <CardInfo>
                <Typography variant="h5" gutterBottom component={'div'}>
                    {movie.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component={'div'}>
                    {movie.releaseDate}
                </Typography>
            </CardInfo>
        </Card>
    )
}

MovieCard.propTypes = {
movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
}).isRequired,
onCardSelect: PropTypes.func
}

export default MovieCard