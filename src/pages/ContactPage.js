import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/generic_2.jpeg'
import { Contact } from '../components'
const ContactPage = () => {
 return (
  <BigWrapper>
   <PageHero title="Contact Us" />

   <Wrapper className="page section section-center">
    <div className="map">
     <img src="https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_2_k9ovnf.jpg" className="image" alt="img" />
    </div>
    <article className="article-2">
     <ul>
      <li>
       Owner: Samuel Schubert
       <p>
        Email:
        <a href="mailto:sam@bloomingtonrentalsllc.com">
         {' '}
         sam@bloomingtonrentalsllc.com
        </a>
       </p>
      </li>
      <li>
       <p>
        Phone Number: <a href="tel:215-259-8716"> 215-259-8716</a>
       </p>
      </li>
     </ul>
    </article>
   </Wrapper>
  </BigWrapper>
 )
}

const BigWrapper = styled.div`
 height: 92vh;
 text-align: center;
 @media only screen and (max-width: 600px) {
  height: 92vh;
 }
 @media only screen and (min-width: 600px) {
  height: 92vh;
 }
 @media only screen and (min-width: 768px) {
  height: 92vh;
 }
 @media (min-width: 992px) {
  height: 92vh;
 }
`
const Wrapper = styled.section`
 display: grid;
 align-items: center;
 justify-content: center;
 grid-column: 3/4;
 grid-row: 1/2;
 margin-top: 2rem;
 .article-2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

 }
 .map {
 }
 .article-2 ul {
  display: grid;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-family: roboto;
  font-weight: bold;
 }
 .article ul li {
  display: grid;
 }
 .article-2 ul:hover {
  color: var(--clr-grey-7);
 }
 .image {
  width: 100%;
  display: block;
  border-radius: var(--radius);
  height: 25vh;
  object-fit: cover;
 }

 p {
  line-height: 2;
  max-width: 45em;
  margin: 0 auto;
  margin-top: 2rem;
 }
 p:hover {
  color: darkblue;
 }
 @media only screen and (max-width: 600px) {
  .article-2 ul {
   grid-gap: 0.75rem;
   margin-top: 1rem;
  }
 }
 @media only screen and (min-width: 600px) {
  .article-2 ul {
   grid-gap: 1rem;
  }
 }
 @media only screen and (min-width: 768px) {
  .article-2 ul {
   grid-gap: 1rem;
  }
 }

 @media (min-width: 992px) {
  grid-template-columns: 1fr 1fr;

  .image {
   height: 40vh;
   width: 55vh;
  }
  .article-2 ul {
   grid-gap: 1rem;
   font-size: 1.25rem;
  }
 }
 @media only screen and (min-width: 1200px) {
 }
`
export default ContactPage
