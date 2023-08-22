import React from 'react';
import { useShowContext } from '../context/ShowContext';

const ShowDetails: React.FC = () => {
  const { selectedShow, setSelectedShow } = useShowContext();

  if (!selectedShow) {
    return null;
  }

  const { name, image, summary, genres } = selectedShow;

  return (
    <div className={`modal ${selectedShow ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>{name}</h2>
        <div className='show-wrapper'>
          <div className='image'>
            <img src={image?.original || 'no-image.svg'} alt={name} />
          </div>
          <div className='show-details'>
            <p dangerouslySetInnerHTML={{ __html: summary }} />
            {genres.length > 0 && (
              <p>
                <b>Genre:</b> {genres.map((g: string, index: number) => index === genres.length - 1 ? g : g + " , ")}
              </p>
            )}
            <button onClick={() => setSelectedShow(null)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
