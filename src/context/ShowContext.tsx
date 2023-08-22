
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Show, ShowContextType, ShowProviderProps } from '../types/types';



const ShowContext = createContext<ShowContextType | undefined>(undefined);

export const useShowContext = () => {
  const context = useContext(ShowContext);
  if (!context) {
    throw new Error('useShowContext must be used within a ShowProvider');
  }
  return context;
};



export const ShowProvider: React.FC<ShowProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [shows, setShows] = useState<Show[]>([]);
  const [popularShows, setPopularShows] = useState<Show[]>([]); // Initialize popularShows state
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);

  const fetchShows = (term: string) => {
    if (term) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${term}`)
        .then(response => setShows(response.data))
        .catch(error => console.error('Error fetching shows:', error));
    }
  };

  const fetchPopularShows = () => {
    axios.get('https://api.tvmaze.com/shows') // Adjust API endpoint for popular shows
      .then(response => setPopularShows(response.data))
      .catch(error => console.error('Error fetching popular shows:', error));
  };

  useEffect(() => {
    fetchShows(searchTerm);
    fetchPopularShows(); // Fetch popular shows when the context is created
  }, [searchTerm]);

  const contextValue: ShowContextType = {
    searchTerm,
    shows,
    popularShows,
    selectedShow,
    setSearchTerm,
    setShows,
    setSelectedShow,
    fetchShows,
  };

  return (
    <ShowContext.Provider value={contextValue}>
      {children}
    </ShowContext.Provider>
  );
};
