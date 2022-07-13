import React, { useState } from 'react'
import styled from 'styled-components'
import { Reviews } from '../utils/constants'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Filler = () => {
 const [index, setIndex] = useState(0)
 const { text, image } = Reviews[index]
 const checkNumber = (number) => {
  if (number > Reviews.length - 1) {
   return 0
  }
  if (number < 0) {
   return Reviews.length - 1
  }
  return number
 }
 const nextPerson = () => {
  setIndex((index) => {
   let newIndex = index + 1
   return checkNumber(newIndex)
  })
 }
 const prevPerson = () => {
  setIndex((index) => {
   let newIndex = index - 1
   return checkNumber(newIndex)
  })
 }
 const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * Reviews.length)
  if (randomNumber === index) {
   randomNumber = index + 1
  }
  setIndex(checkNumber(randomNumber))
 }

 return (
  <Wrapper>
   <div className="section-center">
    <div class="card card-2">
     <div className="c_title">
      <p>Renting Made Simple</p>
     </div>
     <div className="c_content">
      {/* <p>
       You have options when it comes to renting your home, but most people know
       about it. Renting your house doesn't have to be a succession of hope and
       disappointment with each tennant you approve. When you work with us, you
       get a hassle and worry free experience that makes your life so much
       easier. That is our guarantee!!!
      </p> */}{' '}
      <article className="review" >
       <div className="img-container">
        <img src={image} alt="img" className="person-img" />
       </div>
       {/* <h4 className="author">{name}</h4>
       <p className="job">{job}</p> */}
       <p className="info">{text}</p>
       <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
         <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
         <FaChevronRight />
        </button>
       </div>
      </article>
     </div>
    </div>
   </div>
  </Wrapper>
 )
}
const Wrapper = styled.section`
 background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650569239/generic_6_zni0as.jpg')
  no-repeat center center fixed;
 background-size: cover;
 /* background-color: var(--clr-primary-1); */

 padding: 1rem;
 display: grid;
 .review {
  margin-bottom: 3rem;
 }
 img {
  width: 40rem;
  margin-top: 4rem;
  height: 30rem;
 }
 .section-center {
  display: grid;
  justify-content: center;
  align-items: center;
 }

 .card {
  margin: 10px;
  padding: 1rem;
  width: 500px;
  height: 20rem;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
 }

 .c_title {
  grid-row: 1/3;
  grid-column: 3/4;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
   font-size: 2.25rem;
   font-family: roboto;
   color: var(--clr-black);
   font-weight: bold;
  }
  p:hover {
   color: var(--clr-grey-10);
  }
 }
 .c_content {
  grid-row: 3/5;
  grid-column: 3/4;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  p {
   font-size: 1.2rem;
   font-family: roboto;
   color: var(--clr-grey-1);
  }
  p:hover {
   color: var(--clr-grey-10);
  }
 }
 /* CARD BACKGROUNDS */

 .card-2 {
  background-color: var(--clr-grey-5);
 }
 .img-container {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
 }
 .person-img {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
 }

 .img-container::before {
  content: '';
  width: 100%;
  height: 100%;
  background: var(--clr-primary-5);
  position: absolute;
  top: -0.25rem;
  right: -0.5rem;
  border-radius: 50%;
 }
 .prev-btn,
 .next-btn {
  color: var(--clr-primary-7);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
 }
 .prev-btn:hover,
 .next-btn:hover {
  color: var(--clr-primary-5);
 }

 @media only screen and (max-width: 600px) {
  height: 50rem;
  .section-center {
   height: 12rem;
   margin-top: 4rem;
  }
  .card {
   width: 23rem;
   height: 38rem;
  }
 }
 @media only screen and (min-width: 600px) {
  height: 50rem;

  h1 {
   font-size: 2rem;
   text-transform: capitalize;

   color: black;
   font-family: Roboto;
  }
  .card {
   height: 38rem;
  }
  .section-center {
   grid-gap: 1rem;

   height: 12rem;
   margin-top: 5rem;
   width: 30rem;
  }
 }
 @media only screen and (min-width: 768px) {
  height: 50rem;
  .section-center {
   height: 11rem;
   margin-top: 6rem;
   width: 35rem;
  }
  .card {
   height: 38rem;
  }
 }

 @media (min-width: 992px) {
  height: 50rem;
  .section-center {
   width: 35rem;
  }
  .card {
   width: 40rem;
   height: 38rem;
  }
 }
 @media (min-width: 1280px) {
  height: 50rem;

  .section-center {
   grid-gap: 5rem;
   width: 50rem;
   margin-top: 5rem;
   height: 20rem;
  }

  .card {
   width: 45rem;
   height: 38rem;
  }
 }
`

export default Filler

