import { fn } from '@storybook/test';
import MovieCard from '../components/MovieCard/MovieCard';
import { movies } from './stub';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Movie card',
  component: MovieCard,
  tags: ['autodocs'], 
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    movie: movies[0]
  },
};

