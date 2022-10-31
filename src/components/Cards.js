import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these Epic Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem 
                        src='/img/pexels-ian-beckley-2440009.jpg'
                        text = 'Explore the hidden waterfall deep inside the Amazon Jungle '
                        label = 'Adveture'
                        path ='/services'
                    />
                     <CardItem 
                        src='/img/pexels-spencer-davis-4388167.jpg'
                        text = 'Explore the hidden waterfall deep inside the Amazon Jungle '
                        label = 'Adveture'
                        path ='/services'
                        
                    />
                     <CardItem 
                        src='/img/pexels-jaime-reimer-2662116.jpg'
                        text = 'Explore the hidden waterfall deep inside the Amazon Jungle '
                        label = 'Adveture'
                        path ='/services'
                        
                    />
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards