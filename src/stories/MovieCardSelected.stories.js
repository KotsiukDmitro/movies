import { fn } from '@storybook/test';
import MovieCardSelected from '../components/MovieCardSelected/MovieCardSelected';
import { movies } from './stub';


export default {
  title: 'Card/Movie card selected',
  component: MovieCardSelected,
  tags: ['autodocs'], 
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    movie: movies[0]
  },
};

