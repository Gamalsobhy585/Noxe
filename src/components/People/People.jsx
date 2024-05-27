import React from 'react';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { MediaContext } from '../ConText/MediaContext';
import MediaItem from '../MediaItem/MediaItem';


export default function People() {
  let { trendingPeople } = useContext(MediaContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>People</title>
        <link rel="shortcut icon" href="/images.png" type="image/x-icon" />
      </Helmet>
      <div className="row py-5 ">
     
        {trendingPeople.slice(0, 20).map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </>
  )
}
