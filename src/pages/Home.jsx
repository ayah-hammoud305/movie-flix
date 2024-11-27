import React, { useEffect, useState } from 'react';
import Landing from '../components/Landing.jsx';
import Featured from '../components/Featured.jsx';
import SearchBox from '../components/SearchBox.jsx';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/ui/Spinner.jsx';

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=ed88fe15&s=${searchValue}`;

    setLoading(true);

    const response = await fetch(url);
    const responseJson = await response.json();

    setLoading(false);

    if (responseJson.Search) {
      setMovies(responseJson.Search.slice(0, 6));
    } else {
      setMovies([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== '') {
      navigate(`/movies?query=${searchValue}`);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timeoutId); 
  }, []);

  return (
    <>
      <Landing />
      <SearchBox 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      {loading ? (
        <Spinner />
      ) : (
        <Featured />
      )}
    </>
  );
};

export default Home;
