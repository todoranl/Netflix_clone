import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Row.css"; // Import the CSS file;

const Row = ({ title, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the currently displayed movie index
  const numDisplayedMovies = 6; // Number of movies to display at a time

  useEffect(() => {
    const apiKey = "18d60938ee7e614f428393833993664d";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(apiUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < movies.length - numDisplayedMovies) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full flex space-x-4 overflow-x-auto scrollbar-hide"
        >
          {movies
            .slice(currentIndex, currentIndex + numDisplayedMovies)
            .map((item, id) => (
              <div key={id} className="movie-card">
                <div className="movie-image">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={item.title}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/archive/6/69/20220504140801%21Netflix_logo.svg"
                    alt="Logo"
                    className="movie-logo"
                  />
                </div>
              </div>
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
