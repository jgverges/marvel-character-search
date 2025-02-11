import { Link } from 'react-router-dom';
import './Header.css';
import { useFavoriteIds } from '../../hooks/useFavorites';

const Header = () => {
  const { favoriteIdsCount } = useFavoriteIds();

  return (
    <header className="header">
      <Link to="/">
        <img src="/marvel-logo.svg" alt="Marvel" className="header__logo" />
      </Link>
      <Link to="/favorites" className="header__favorites">
        <span className="header__favorites-count">{favoriteIdsCount}</span>
        <img
          src={favoriteIdsCount > 0 ? '/heart-default.svg' : '/heart-outline.svg'}
          alt="Favorites"
          className="header__favorites-icon"
        />
      </Link>
    </header>
  );
};

export default Header;
