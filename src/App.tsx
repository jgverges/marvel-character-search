import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <main className="main-content">
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </main>
  );
}

export default App;
