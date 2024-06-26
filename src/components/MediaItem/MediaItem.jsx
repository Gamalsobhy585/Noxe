import React from 'react';
import { Link } from 'react-router-dom';

export default function MediaItem({ item }) {
  return (
    <div className="col-md-2 mb-4 text-center">
      <Link to={`/itemdetails/${item.media_type}/${item.id}`}>
        <div className="movie position-relative">
          {item.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='w-100' alt={item.title || item.name} />
          ) : (
            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} className='w-100' alt={item.title || item.name} />
          )}
          <h3 className='h6 my-2'>{item.title || item.name}</h3>
          {item.vote_average && (
            <div className="vote p-2 text-white position-absolute end-0 top-0">
              {item.vote_average.toFixed(1)}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
