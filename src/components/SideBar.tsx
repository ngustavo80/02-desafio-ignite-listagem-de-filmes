import { useEffect, useState, createContext, ReactNode } from 'react';

import { Button } from "./Button";
import { api } from '../services/api';

import '../styles/sidebar.scss';
import {  } from 'react';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
} 

interface sidebarContext {
  selectedGenreId: number
}

interface sidebarContextProps {
  children: ReactNode;
}

export const sidebarContext = createContext({} as sidebarContext)

export function SideBar(props: sidebarContextProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <sidebarContext.Provider value={{ selectedGenreId }}>
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>

    {props.children}
    </sidebarContext.Provider>
  )
}