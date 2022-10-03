import React from 'react';
import ServiceComponent from './serviceComponent';
import services from './servicesName';
import "./services.css";

const Services = () => {
  return (
    <section className='work'>
    {services.map(card => <ServiceComponent key={card.id}  imgUrl={card.imgSrc} title={card.title} content={card.text}/>)}
        
    </section>
  )
}

export default Services