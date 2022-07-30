import React from 'react';
import './Cards.css';
import { Button } from './Button';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'><Link to='/Club'>Club</Link></ul>
        <ul className='cards__items'><Link to='/Archive'>Archive</Link></ul>
        <ul className='cards__items'><Link to='/Event'>Event</Link></ul>
        <ul className='cards__items'><Link to='/Quiz'>Quiz</Link></ul>
            
        <h1>Check out these Upcoming Events!</h1>
          <ul className='cards__items'>
          
            <CardItem
              src='/images/img-9.jpg'
              text='MYSTERY QUIZ   : Every audiovisual quiz we create is tailored for you, whether we build something completely from scratch on your chosen theme, or carefully select the ideal rounds from our constantly updated library of fun and creative onscreen rounds. Even with traditionally ‘dry’ topics like history, we don’t ask “when was the Battle of Hastings?”,
               we show a video montage of historical events, film and music and ask you to identify the year.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='MYSTERY QUIZ   : Every audiovisual quiz we create is tailored for you, whether we build something completely from scratch on your chosen theme, or carefully select the ideal rounds from our constantly updated library of fun and creative onscreen rounds. Even with traditionally ‘dry’ topics like history, we don’t ask “when was the Battle of Hastings?”,
               we show a video montage of historical events, film and music and ask you to identify the year.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <h1>Check out these Daily Quizes!</h1>
          <ul className='cards__items'>
            <CardItem
              // src='/images/elsaq.jpg'
              text='How old is Elsa when she was becoming a crowned queen?'
              label='Animation_Movies'
              path='/services'
            />
            <CardItem
              // src='images/img-4.jpg'
              text='Who won the 2010 Football worldCup?'
              label='Games'
              path='/products'
            />
            <CardItem
              // src='images/img-8.jpg'
              text='How many tribes are there in Africa?'
              label='Continents'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;