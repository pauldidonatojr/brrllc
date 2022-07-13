import React from 'react'
import styled from 'styled-components'
import { info } from '../utils/constants'

const Article = () => {
 return (
  <Wrapper>
   <div className="section-center">
    {info.map((inf) => {
     const { id, icon, title, text, logo } = inf
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
     return (
      <article key={id} className={section}>
       <h4 className="title"> {title} </h4>
       <div className="icon"> {icon} </div>
       <p> {text} </p>
      </article>
     )
    })}
   </div>
  </Wrapper>
 )
}
const Wrapper = styled.section`
 padding: 1.5rem;

 width: 100%;

 background-color: var(--clr-grey-8);
 height: 170vh;
 ${
  '' /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650567139/generic_5_uz5tu1.webp')
  no-repeat center;
 background-size: cover; */
 }
 ${
  '' /* height: 100%;
 padding: 2rem 0;
 height: 40vh; */
 }
 .section-center {
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
 }
 .section-center-1 {
  display: grid;
  padding: 0.5rem;
  ${
   '' /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650571271/generic_9_cla6jl.jpg')
   no-repeat center; */
  }
  justify-content: center;
  text-align: center;

  background-size: cover;
  height: 25rem;
  width: 15rem;
 }
 .section-center-2 {
  display: grid;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  ${
   '' /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650570601/generic_7_iah6lk.jpg')
   no-repeat center; */
  }
  background-size: cover;
  height: 25rem;
  width: 15rem;
 }

 .section-center-3 {
  display: grid;
  justify-content: center;
  padding: 0.5rem;
  justify-content: center;
  text-align: center;
  ${
   '' /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650570601/generic_8_wetmyp.webp')
   no-repeat center; */
  }

  background-size: cover;

  height: 25rem;

  width: 15rem;
 }
 .content h2 {
  display: grid;
  padding: 2rem;
  font-size: 1.5rem;
  font-family: roboto;
  color: #222e35;
 }
 p {
  font-size: 1rem;
 }
 @media (min-width: 576px) {
  ${
   '' /* .content-1,
  .content-2,
  .content3 {
   height: 5vh;
  } */
  }
  .icon {
   font-size: 2rem;
  }
  .section-center {
   flex-direction: column;
  }
  .section-center-1 {
   margin-bottom: 2rem;
  }
  .section-center-2 {
   margin-bottom: 2rem;
  }
 }
 @media only screen and (max-width: 600px) {
  .icon {
   font-size: 3rem;
  }
  .section-center {
  }
 }
 @media only screen and (min-width: 768px) {
  .icon {
   font-size: 4rem;
  }
  .section-center {
  }
 }

 @media (min-width: 992px) {
  padding: 1rem;

  height: 40rem;
  .section-center {
   flex-direction: row;
   height: 30rem;
  }

  .section-center-1 {
   height: 25rem;
  }
  .section-center-2 {
   height: 25rem;
  }
  .section-center-3 {
   height: 25rem;
  }
  .icon {
   font-size: 5rem;
  }
 }
 @media (min-width: 1280px) {
  padding: 2rem;

  .section-center {
   flex-direction: row;
   height: 30rem;

   margin-top: 0rem;
  }
  height: 40rem;
  .section-center-1 {
   height: 25rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
  }
  .section-center-2 {
   height: 25rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
  }
  .section-center-3 {
   height: 25rem;
   margin-top: 2rem;
   margin-bottom: 2rem;
  }
 }
`

export default Article
