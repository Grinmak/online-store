import React from 'react';
import '../css/ProductsCard.css';
import { Link } from 'react-router-dom';

export interface ProductsTemplate {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export function ProductCard(props: ProductsTemplate) {
  return (
    <div className='card__body'>
      <div className='card__image-body'>
        <Link
          to={{
            pathname: `/product/${props.id}/${props.title}`,
          }}
        >
          <img
            className='card__image'
            src={props.thumbnail}
            alt={props.category}
          />
        </Link>
      </div>
      <div className='card__info'>
        <div className='card__discount'>-{props.discountPercentage}%</div>
        <div className='card__price-brand'>
          <div className='card__price'>${props.price}</div>
          <div className='card__brand'>{props.brand}</div>
        </div>
        <div className='card-title'>{props.title}</div>
      </div>
    </div>
  );
}
