import React from 'react';
import { useState, useEffect } from 'react';

import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from './movieCard';

// API KEY: d671e229

const API_URL = "http://www.omdbapi.com/?apikey=d671e229"



const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data.Search);
        setMovies(data.Search)

    }

    useEffect(() => {
        searchMovies("Batman");
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    onChange={(e) => { setSearch(e.target.value) }}
                    value={search}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { searchMovies(search) }}
                />
            </div>

            {
                movies.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }

            {/* <div className="container">
                <MovieCard movie1={movies[0]} />
            </div> */}

        </div>
    )
}

export default App;