import React from 'react'
import styled from 'styled-components'
import { Filters, RentalList, Sort, PageHero } from '../components'

const RentalsPage = () => {
 return (
  <main>
   <PageHero title="Properties" />

   <Wrapper>
    <div className="section-center products">
     <Filters className="filtersUi" />
     <div className="productUi">
      <Sort />
      <RentalList />
     </div>
    </div>
   </Wrapper>
  </main>
 )
}

const Wrapper = styled.div`
 .products {
  display: grid;
  gap: 3rem 1.5rem;
  margin: 4rem auto;
 }
 .filterUi {
  grid-column: 1/3;
  grid-row: 1/2;
 }
 .productUi {
  grid-column: 2/3;
  grid-row: 1/2;
 }
 @media (min-width: 300px) {
  .products {
   grid-template-columns: 114px 2fr;
  }
 }
 @media (min-width: 768px) {
  .products {
   grid-template-columns: 200px 1fr;
  }
 }
`

export default RentalsPage
