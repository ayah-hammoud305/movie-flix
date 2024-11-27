import React, { useEffect, useState } from 'react';
import MoviesList from '../components/ui/MoviesList';
import Select from '../components/Select';
import Landing from '../components/Landing';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/ui/Spinner.jsx';
import NoResults from '../components/ui/NoResults.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Movies = () => {
  const navigate = useNavigate();
  const location = useLocation();  
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  
    const getMovieRequest = async (searchValue, type) => {
    const url = `https://www.omdbapi.com/?apikey=ed88fe15&s=${searchValue}`;

    setLoading(true);

    const response = await fetch(url);
    const responseJson = await response.json();

    setTimeout(() => {
      setLoading(false);

      if (responseJson.Search) {
        setMovies(responseJson.Search.slice(0, 6));
        setNoResults(responseJson.Search.length === 0);
      } else {
        setMovies([]);
        setNoResults(true);
      }
    }, 1000);
  };

  useEffect(() => {
    
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    if (query) {
      setSearchValue(query); 
      getMovieRequest(query, selectedType); 
    } else {
      setLoading(false); 
    }
  }, [location.search, selectedType]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== '') {
      navigate(`/movies?query=${searchValue}`);
    }
  };

  useEffect(() => {
    if (selectedType && movies.length > 0) {
      const filtered = movies.filter(movie =>
        movie.Type.toLowerCase() === selectedType.toLowerCase()
      );
      setFilteredMovies(filtered);
      setNoResults(filtered.length === 0);
    } else {
      setFilteredMovies(movies);  
      setNoResults(movies.length === 0);
    }
  }, [selectedType, movies]);

  const handleTypeChange = (type) => {
    setSelectedType(type); 
  };

  return (
    <>
      <Landing />
      <SearchBox 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      <div className="search__results--container">
        <div className="search__results--row">
          <h1 className="search__results--title">
            Search results for "{searchValue}"
          </h1>
          <Select selectedType={selectedType} onTypeChange={handleTypeChange} />
        </div>
        <hr className="line" />
        {loading ? (
          <Spinner />
        ) : noResults ? (
          <NoResults searchValue={searchValue} />
        ) : (
          <MoviesList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
        )}
      </div>
    </>
  );
};

export default Movies;
