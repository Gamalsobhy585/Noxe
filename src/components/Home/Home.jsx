import React, { useContext } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import { Helmet } from 'react-helmet';
import { MediaContext } from '../ConText/MediaContext';

export default function Home() {
  let { trendingMovies, trendingTv, trendingPeople } = useContext(MediaContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="shortcut icon" href="/images.png" type="image/x-icon" />
      </Helmet>
      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="brdr w-25 mb-3"></div>
          <h2 className="h4">Trending Movies <br />To Watch Right Now</h2>
          <div className="brdr w-100 mt-3"></div>
        </div>
        {trendingMovies.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>

      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="brdr w-25 mb-3"></div>
          <h2 className="h4">Trending Tv <br />To Watch Right Now</h2>
          <div className="brdr w-100 mt-3"></div>
        </div>
        {trendingTv.slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>

      <div className="row py-5">
        <div className="col-md-4 d-flex align-items-center">
          <div className="brdr w-25 mb-3"></div>
          <h2 className="h4">Trending People <br />To Watch Right Now</h2>
          <div className="brdr w-100 mt-3"></div>
        </div>
        {trendingPeople.filter((person) => person.profile_path !== null).slice(0, 10).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
