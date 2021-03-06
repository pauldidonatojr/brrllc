import React from 'react'
import styled from 'styled-components'
const Footer = () => {
 return (
   <Wrapper>

   <h5>
    &copy; {new Date().getFullYear()}
    <span> Bloomington Rentals LLC</span>
   </h5>
   <h5> Short Term Rentals </h5>
  </Wrapper>
 )
}

const Wrapper = styled.footer`
 min-height: 10vh;
 width: 100%;
 position: absolute;
 font-family: roboto;
 bottom: 0;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: var(--clr-black);
 text-align: center;
 span {
  color: var(--clr-grey-9);
 }
 h5 {
  color: var(--clr-white);
  margin: 0.1rem;

  font-weight: 400;
  text-transform: none;
  line-height: 1.25;
 }
 @media (min-width: 776px) {
  flex-direction: row;
 }
`

export default Footer
