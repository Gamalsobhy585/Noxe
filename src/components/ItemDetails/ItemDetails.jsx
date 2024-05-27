import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function ItemDetails() {
  let { id, mediaType } = useParams();
  const [itemDetails, setItemDetails] = useState({});

  async function getItemDetails(id, mediaType) {
    try {
      let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=ec0714adb1d9e5393ce7bd94814bcdba`);
      setItemDetails(data); 
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  }

  useEffect(() => {
    
    getItemDetails(id, mediaType); 
  }, [id, mediaType]);
  

      useEffect(() => {
        const link = document.querySelector("link[rel~='icon']");
        link.href = '../../../public/images.png' + (itemDetails.poster_path || '../../../public/images.png');
        document.title = `${itemDetails.title || itemDetails.name || ''}`;
      }, [itemDetails.title,itemDetails.name,itemDetails.poster_path]);


  return (
    <>

      <div className="row">
        <div className="col-md-3">
          <img src={'https://image.tmdb.org/t/p/w500' + itemDetails.poster_path} className='w-100' alt={itemDetails.title || itemDetails.name} />
        </div>
        <div className="col-md-9">
          <h2>{itemDetails.title || itemDetails.name}</h2>
          <p className='py-2 '>{itemDetails.overview}</p>
          {itemDetails.vote_average && (
            <h6 className='py-2'>Vote Average: {itemDetails.vote_average.toFixed(1)}</h6>
          )}
          {itemDetails.vote_count && (
            <h6 className='py-2'>Vote Count: {itemDetails.vote_count}</h6>
          )}
           {itemDetails.popularity && (
            <h6 className='py-2'>popularity: {itemDetails.popularity}</h6>
          )}
           {itemDetails.release_date && (
            <h6 className='py-2'>release_date: {itemDetails.release_date}</h6>
          )}
           {itemDetails.adult && (
            <h6 className='p-2 text-white rounded-circle bg-danger '>+18</h6>
          )}
        </div>
      </div>
    </>
  );
}
