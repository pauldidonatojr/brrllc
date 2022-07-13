import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('mgedrrvw')
 if (state.succeeded) {
     return <p style={{ fontSize: '2rem'
}}>We will be in contact shortly!</p>
 }
 return (
  <Wrapper>
   <div className="contact-section">
   <div>
     <form className="contact-form" onSubmit={handleSubmit} style={{color: 'black'}}>
 
  
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" className="form-input" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
       <label htmlFor="name">Name</label>
	<input id="name" type="name" name="name" className="form-input" />
      
      <label htmlFor="number">Phone Number</label>
	<input id="number" type="number" name="number" className="form-input"/>
      
   	 <label htmlFor="message">Message</label>
    <textarea id="message" type="message" name="message" />
      
    <button type="submit" className="btn" disabled={state.submitting}>
       Submit
      </button>


     </form>
     <p className="info" style={{color: 'black'}}>
      Fill out the form and we will be in contact with you shortly!
     </p>
 </div>
   </div>
  </Wrapper>
 )
}
const Wrapper = styled.section`
 display: grid;
 justify-content: center;
 align-items: center;

 label {
  font-size: 1.5rem;
 }

 h3 {
  text-transform: none;
 }
 p {
  line-height: 2;
  max-width: 45em;
  color: var(--clr-grey-5);
 }
 .contact-section {
  display: grid;
  align-items: center;
  justify-content: center;

  padding: 1rem;
 }
 .content {
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
 }
 p {
  font-size: 1.25rem;
  font-family: roboto;
 }
 .contact-form {
  display: grid;

  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
 }

 .form-input,
 .submit-btn {
  font-size: 1rem;
  padding: 0.2rem 1rem;
  border: 2px solid var(--clr-black);
 }
 .form-input {
  color: var(--clr-grey-3);

 }
 textarea {
   resize: none;
     border: 2px solid var(--clr-black);
}
 .submit-btn {
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
 }
 .form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
 }
 .submit-btn {
  background: var(--clr-grey-1);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-grey-9);
 }
 .submit-btn:hover {
  color: var(--clr-white);
 }
 @media (min-width: 576px) {
  .content {
   grid-template-columns: 1fr 1fr;
  }
 }
 @media only screen and (max-width: 600px) {
  .content {
   grid-template-columns: 1fr 1fr;
  }
 }

 @media only screen and (min-width: 600px) {
  .content {
   grid-template-columns: 1fr 1fr;
  }
 }

 @media only screen and (min-width: 768px) {
  .content {
   grid-template-columns: 1fr 1fr;
  }
 }
 @media (min-width: 992px) {
  .content {
   display: grid;
   align-items: center;
   gap: 0.5rem;
   margin-top: 2rem;
   justify-content: center;
  }
  p {
   margin-bottom: 0;
  }
  .info {
   grid-column: 1/3;
   grid-row: 1/2;
  }
  .contact-form {
   grid-column: 1/3;
   grid-row: 2/3;
   margin-left: 3rem;
  }
 }
 @media (min-width: 1280px) {
  .content {
   grid-template-columns: 1fr 1fr;
  }
 }
`

export default Contact
