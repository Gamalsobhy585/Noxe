import React, { useState,useLayoutEffect,useRef } from 'react';
import { Helmet } from 'react-helmet';
export default function Gallery() {
 
let inputEl = useRef();
useLayoutEffect(()=>{
  inputEl.current.value="mostafa";
  console.log('useLayoutEffect');
},[])
    return (
      
        <>
        <input type="text" value="ahmed ali" ref={inputEl}/>

       <Helmet>
  <meta charSet="utf-8" />
  <title>Gallery</title>
  <link rel="icon " href="../../../public/images.png" type="image/x-icon" />

</Helmet>


        </>
  )
}
