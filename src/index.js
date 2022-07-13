import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { FilterProvider } from './context/filter_context'
import { RentalProvider } from './context/rental_context'
import { ModalProvider } from './context/modal_context'
ReactDOM.render(
 <RentalProvider>
  <FilterProvider>
   <ModalProvider>
    <App />
   </ModalProvider>
  </FilterProvider>{' '}
 </RentalProvider>,
 document.getElementById('root')
)
