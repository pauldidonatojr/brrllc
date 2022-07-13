import React from 'react'
import { useRentalContext } from '../context/rental_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Rentals from './Rentals'
import { feature } from '../data/featured_data.js'

const Featured = () => {
 const {
  products_loading: loading,
  products_error: error,
  featured_products: featured,
 } = useRentalContext()

 if (loading) {
  return <Loading />
 }
 if (error) {
  return <Error />
 }
 return (
  <Wrapper className="section">
   <div className="title">
    <h1 style={{ fontSize: '2.5rem', fontFamily: 'Roboto' }}> View rentals </h1>

    <div className="underline" style={{ marginBottom: '1rem' }}>
     {' '}
    </div>
    <Link to="/rentals" className="btn">
     all rentals
    </Link>
    <div className="section-center featured">
     {featured.slice(0, 3).map(product => {
      return <Rentals key={product.id} {...product} />
     })}
     {/* {feature.map(feat => {
      const { id, logo, title, text } = feat
      return (
       <article key={id} className="featured">
        <h4> {title} </h4>
        <img src={logo} className="logo" alt="logo" />

        <p> {text} </p>
       </article>
      )
     })} */}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 background: var(--clr-grey-10);
 .featured {
  margin: 4rem auto;
  display: grid;
  gap: 2.5rem;
  img {
   height: 225px;
  }
 }
 .underline {
  background-color: black;
 }
 .btn {
  display: block;
  width: 148px;
  margin: 0 auto;
  text-align: center;
 }
 @media (min-width: 576px) {
  .featured {
   grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
 }
`

export default Featured
