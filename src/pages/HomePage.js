import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Update from '../components/Update';
function HomePage(props){

  return(
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
      <Update />
      <Carousel />

    </div>
  );
}

export default HomePage;
