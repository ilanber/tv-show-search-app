import React from 'react';
import { useShowContext } from '../context/ShowContext';

const ShowList: React.FC = () => {
  const { shows, popularShows, searchTerm, setSelectedShow } = useShowContext();

  const showDetails = (showId: number) => {
    const selectedFromShows = shows.find((show) => show.show.id === showId);
    const selectedFromPopularShows = popularShows.find((show) => show.id === showId);

    if (selectedFromShows) {
      setSelectedShow(selectedFromShows.show);
    } else if (selectedFromPopularShows) {
      setSelectedShow(selectedFromPopularShows);
    } else {
      setSelectedShow(null);
    }
  };

  return (
    <div className="show-list">
      {searchTerm !== '' ? (
        shows.length > 0 ? (
          shows.map((show) => (
            <div key={show.show.id} className="show-card">
              <img src={show.show.image?.medium || 'no-image.svg'} alt={show.show.name} />
              <div className="show-info">
                <h3>{show.show.name}</h3>
                <button onClick={() => showDetails(show.show.id)}>Show Details</button>
              </div>
            </div>
          ))
        ) : (
          <p>No results found for "{searchTerm}"</p>
        )
      ) : (
        <>
          <h2>Popular Shows</h2>
          {popularShows
            .sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0))
            .slice(0, 8)
            .map((show) => (
              <div key={show.id} className="show-card">
                <img src={show.image?.medium || 'no-image.svg'} alt={show.name} />
                <div className="show-info">
                  <h3>{show.name}</h3>
                  <p>Rating: {show.rating?.average}</p>
                  <button onClick={() => showDetails(show.id)}>Show Details</button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default ShowList;
