import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function GambarWisata(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' onClick={props.onClick}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GambarWisata;
