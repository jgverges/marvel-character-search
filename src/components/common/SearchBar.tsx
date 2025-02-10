import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (term: string) => void;
  resultsCount: number | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, resultsCount }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-bar">
          <img src="/search-icon.svg" alt="search icon" className="search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="SEARCH A CHARACTER..."
            className="search-input"
          />
        </form>

        <hr />

        <p className="results-count ">{resultsCount} RESULTS</p>
      </div>
    </>
  );
};

export default SearchBar;
