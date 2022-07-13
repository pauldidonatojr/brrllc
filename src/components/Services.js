import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
 return (
  <Wrapper>
   <div className="section-center">
    <div className="services-center">
     {services.map((service) => {
      const { id, icon, title, text, logo } = service
      let section = ''
      if (id === 1) {
       section = 'section-center-1'
      }
      if (id === 2) {
       section = 'section-center-2'
      }
      if (id === 3) {
       section = 'section-center-3'
      }
      if (id === 4) {
       section = 'section-center-4'
      }
      return (
       <article key={id} className={section}>
        <img src={logo} className="logo" alt="logo" />
        <div className="box">
         {' '}
         <h3 className="title"> {title}</h3>{' '}
        </div>

        <div className="text">
         {' '}
         <p style={{color: 'white'}}> {text} </p>
        </div>
       </article>
      )
     })}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 height: 100%;
 padding: 3rem;

 img {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 195px;
 }

 h4 {
  color: var(--clr-grey-8);
  font-weight: bold;
 }

 padding: 1.5rem;

 background: var(--clr-grey-7);
 .title {
 font-weight: bold;
 color: white;
 }
 .box {
  display: grid;
  justify-content: center;
  align-items: center;

  text-transform: capitalize;
  font-size: 2.35rem;
  height: 8.5rem;

  font-family: roboto;
 }

 .text {
  margin-bottom: 1.75rem;
  font-family: roboto;

  font-size: 1.35rem;
  p {
    color: white;
  }
 }
 p {
  margin-bottom: 0;
  line-height: 1.55;
  color: white;

  white-space: pre-line;
 }
 .section-center {
  display: grid;
  align-items: center;
  justify-content: center;
 }
 .services-center {
  display: grid;
  gap: 1.5rem;
 }
 .section-center-1 .text {
  padding: 1rem;
 }
 .section-center-4 .text {
  padding: 1rem;

 }
 .service,
 .section-center-1,
 .section-center-2,
 .section-center-3,
 .section-center-4 {
  background: var(--clr-grey-3);
  text-align: center;
  border-radius: var(--radius);
  display: grid;
  height: 555px;
  width: 100%;

  p {
   color: black;
   
  }
 }
 span {
  width: 2rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;

  border-radius: 50%;
  background: var(--clr-grey-9);
  color: var(--clr-primary-1);
  svg {
   font-size: 2rem;
  }
 }
 @media (min-width: 576px) {
  .services-center {
   grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
  }
 }
 @media only screen and (min-width: 600px) {
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
  }
 }
 @media only screen and (min-width: 768px) {
 }
 @media (min-width: 992px) {
  .header {
   display: grid;
   grid-template-columns: 1fr 1fr;
  }
 }

 @media (min-width: 1280px) {
  .section-center-1 {
   grid-column: 1/2;
   grid-row: 1/2;
  }
  .section-center-2 {
   grid-column: 2/3;
   grid-row: 1/2;
  }
  .section-center-3 {
   grid-column: 2/3;
   grid-row: 2/3;
  }
  .section-center-4 {
   grid-column: 1/2;
   grid-row: 2/3;
  }
  .section-center {
   transform: translateY(5rem);
   padding: 0.5rem;
   margin-bottom: 2rem;
  }
  .service {
  }
 }
`
export default Services
