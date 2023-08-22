import React from 'react';
import { useShowContext } from '../context/ShowContext';

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm, fetchShows } = useShowContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    fetchShows(newSearchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a TV show"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
