import styled from 'styled-components'

import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Contact from './Contact'

const Hero = () => {
 const { openModal } = useModalContext()

 const { isModalOpen, closeModal } = useModalContext()
 return (
  <Wrapper>
   <div className="section-center">
    <div className="content">
     <h1
      style={{
       gridColumn: '1/3',
       gridRow: '1/2',
       textShadow: '2px 2px black',
       color: 'var(--clr-white)',
       fontWeight: 'bold',
      }}
      className="header"
     >
      {' '}
      A Better Way to Lease Your Home{' '}
     </h1>
     {/* <p
      style={{
       gridColumn: '1/3',
       gridRow: '2/3',
      }}
     >
      Rent your house to us worry free! <br />
     </p> */}

     <span style={{ gridColumn: '1/3', gridRow: '3/4' }}>
      <button type="button" className="submit-btn" onClick={openModal}>
       Contact us today
      </button>
     </span>
     <div
      className={`${
       isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
     >
      <div className="modal-container">
       <button className="close-modal-btn" onClick={closeModal}>
        <FaWindowClose></FaWindowClose>
       </button>
       <Contact />
      </div>
     </div>

     {/*
     <form
      className="contact-form"
      action="https://formspree.io/f/xeqvywoa"
      method="POST"
     >
      <input
       type="email"
       className="form-input"
       placeholder="enter your email"
       name="_replyto"
      />

     </form> */}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 min-height: 30rem;
 display: grid;
 align-items: center;
 background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650559874/generic_4_nzua4y.jpg')
  no-repeat center center;
 background-size: cover;
 height: 100%;

 .close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
 }
 .show-modal {
  visibility: visible;
  z-index: 10;
 }
 .qr-container {
  height: 70vh;
  width: 50vh;
  background: var(--mainGrey);
 }
 .modal-container {
  background-color: var(--clr-grey-3);
  border-radius: var(--radius);
  margin: auto;
  width: 100%;
  height: 75vh;
  max-width: var(--fixed-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
 }
 .camera-toggle {
  background: transparent;
  border: transparent;
  color: var(--cltr-primary-5);
  cursor: pointer;
  svg {
   font-size: 2rem;
  }
 }
 input {
  text-align: center;
  font-family: roboto;
 }
 .section-center {
  background-color: var(--clr-primary-1);
  transition: var(--transition);
  background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1652788878/brlogo_vtatak.jpg')
   no-repeat center center;
  background-size: cover;
 }
 .content {
  display: grid;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: var(--transition);
  p {
   color: #fff;
   font-size: 1.5rem;
   text-transform: capitalize;
  }
 }
 .contact-form {
  display: grid;
  justify-content: center;
  align-items: center;
 }

 .form-input,
 .submit-btn {
  border: 2px solid var(--clr-black);
 }
 .form-input {

  color: var(--clr-black);
  
 }
 .submit-btn {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
 }
 .form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
 }
 .submit-btn {
  background: var(--clr-black);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-grey-9);
 }
 .submit-btn:hover {
  color: var(--clr-white);
 }
 .btn {
  background: var(--clr-grey-5);
  color: var(--clr-bcg);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  border-color: transparent;
  text-transform: capitalize;
  transition: all 0.3s linear;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
 }

 .btn,
 .btn-white,
 .btn-primary {
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--clr-font);
  border: 2px solid var(--clr-primary);
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: var(--Transition);
  cursor: pointer;
  font-size: 0.8rem;


  border-radius: var(--mainBorderRadius);
  border-color: transparent;
 }
 .btn:hover {
  background: var(--clr-bcg);
  color: var(--clr-font);
 }
 @media (min-width: 576px) {

  .section-center {
   border-radius: 2%;
   height: 50vh;
  }
  .header {
   font-size: 2.15rem;
  }
  .content {
   height: 40vh;

  
  }
 }
 @media only screen and (max-width: 600px) {
 
  .section-center {
   border-radius: 2%;
   height: 45vh;
   width: 45vh;
   padding: 2rem;
  }
  .header {
   font-size: 2rem;
   margin-bottom: 5rem;
  }
  .submit-btn {
   font-size: 1.2rem;
   padding: 0.85rem 1rem;
  }
  .content {
   height: 40vh;


  }
 }
 @media only screen and (min-width: 600px) {

  .section-center {
   border-radius: 4%;
   height: 50vh;
   padding: 3rem;
   width: 55vh;
  }

  .submit-btn {
   font-size: 1.25rem;
   padding: 0.75rem 1rem;
  }
  .header {
   font-size: 2.35rem;
   margin-bottom: 8rem;
  }

  .content {
   height: 40vh;
  }
 }

 @media only screen and (min-width: 768px) {
 
  .section-center {
   height: 50vh;
   width: 75vh;
   grid-gap: 1.5rem;
   border-radius: 2%;
   padding: 2.5rem;
  }

  .header {
   font-size: 2.65rem;
  }
  .content {
   height: 40vh;
  }
  .submit-btn {
   font-size: 1.25rem;
   padding: 0.75rem 1.75rem;
  }
 }

 @media (min-width: 992px) {
  p {
   margin-bottom: 0;
  }
  .section-center {
   height: 55vh;
   width: 85vh;

   border-radius: 2%;
   background-color: midnightblue;
   padding: 3.5rem;
  }
  .content {
   height: 40vh;
  }
  .submit-btn {
   font-size: 1.25rem;
   padding: 1rem 1.75rem;
  }
  .modal-container {
   height: 70vh;
  }
  .header {
   font-size: 3rem;
  }
 }
 @media (min-width: 1280px) {
  .section-center {
   background-color: green;
   height: 55vh;
   width: 120vh;

   display: grid;
   align-items: flex-start;

   border-radius: 2%;
  }
  .modal-container {
   height: 70vh;
  }
  .header {
   font-size: 3em;
  }
  .content {
   grid-column: 5/6;
   grid-row: 1/2;
   width: 60vh;
   height: 40vh;
   margin-left: 20rem;
   grid-gap: 2rem;
  }
 }
`

export default Hero

