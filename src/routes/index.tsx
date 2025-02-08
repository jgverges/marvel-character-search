import { createBrowserRouter } from 'react-router-dom';
import CharacterList from '../pages/CharacterList';
import CharacterDetails from '../pages/CharacterDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterList />,
  },

  {
    path: '/character/:id',
    element: <CharacterDetails />,
  },
]);
