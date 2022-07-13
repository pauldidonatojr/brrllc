import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { services } from '../utils/constants'

const AboutPage = () => {
 return (
  <main>
   <PageHero title="about" />
   <Wrapper className="page section section-center">
             {services.map((service) => {
                 const { id, logo } = service;
                 let classLogo = ''
                 if (id === 1) {
                    classLogo = 'classLogo'
                 }

                  if (id === 3) {
                   classLogo = 'classLogo'
                 }
                   if (id === 4) {
                    classLogo = 'classLogo'
                   }
                 return <img key={id} src={logo} className={classLogo} alt="about" />
    })}
    <article>
     <div className="title">
      <h2> our story </h2>
      <div className="underline"> </div>
     </div>
     <p>
      {' '}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, itaque
      perspiciatis. Dolor esse sint ipsam non, saepe blanditiis, praesentium
      ratione sit ut facere perspiciatis possimus corrupti velit voluptates!
      Delectus, eveniet.
     </p>
    </article>
   </Wrapper>
  </main>
 )
}

const Wrapper = styled.section`
 display: grid;
 gap: 4rem;
 .classLogo {
    display: none;
 }
 img {
  width: 100%;
  display: block;
  border-radius: var(--radius);
  height: 500px;
  object-fit: cover;
 }
 p {
  line-height: 2;
  max-width: 45em;
  margin: 0 auto;
  margin-top: 2rem;
  color: var(--clr-grey-5);
 }
 .title {
  text-align: left;
 }
 .underline {
  margin-left: 0;
 }
 @media (min-width: 992px) {
  grid-template-columns: 1fr 1fr;
 }
`
export default AboutPage
