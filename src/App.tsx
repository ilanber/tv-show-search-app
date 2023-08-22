import React from 'react';
import { ShowProvider } from './context/ShowContext';
import SearchBar from './components/SearchBar';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <ShowProvider>
      <div className="app">
        <h1>Find TV Shows</h1>
        <SearchBar />
        <ShowList />
        <ShowDetails />
      </div>
    </ShowProvider>
  );
};

export default App;


