/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import { getImageUrl } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);

  /* handleAddToCart */
  const handleAddToCart = (event, movie) => {
    event.stopPropagation();

    const found = state.cartData.find((c) => {
      return c.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });

      toast.success(`Added  ${movie.title} to Cart !`, {
        position: "bottom-right",
      });
    } else {
      toast.error(
        `The movie ${movie.title} has been already added to the cart!`,
        {
          position: "bottom-right",
        }
      );
    }
  };

  /* handleModalClose */
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  /* handleMovieSelection */
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
        <a href='#' onClick={() => handleMovieSelection(movie)}>
          <img
            className='w-full object-cover'
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className='pt-4'>
            <h3 className='text-xl mb-1'>{movie.title}</h3>
            <p className='text-[#575A6E] text-sm mb-2'>{movie.genre}</p>
            <div className='flex items-center space-x-1 mb-5'>
              <Rating value={movie.rating} />
            </div>
            <button
              className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'
              href='#'
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src='./assets/tag.svg' alt='' />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCart;
