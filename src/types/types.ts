// types/types.ts
export interface Show {
  show: any;
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
  rating: {
    average: number
  }
}

export interface ShowContextType {
  searchTerm: string;
  shows: Show[];
  popularShows: Show[];
  selectedShow: Show | null;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setShows: React.Dispatch<React.SetStateAction<Show[]>>;
  setSelectedShow: React.Dispatch<React.SetStateAction<Show | null>>;
  fetchShows: (term: string) => void;
}

export interface ShowProviderProps {
  children: React.ReactNode;
}
