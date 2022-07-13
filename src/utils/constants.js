import React from 'react'
import {
 GiCompass,
 GiDiamondHard,
 GiStabbedNote,
 GiLightBulb,
} from 'react-icons/gi'
import { FaBookReader, FaRegStar } from 'react-icons/fa'
import generic_1 from '../assets/generic_1.jpeg'
import generic_2 from '../assets/generic_2.jpeg'
import generic_3 from '../assets/generic_3.jpeg'
import house from '../assets/house.jpeg'

export const info = [
 {
  id: 1,
  title: 'Expertise',
  icon: <FaBookReader />,
  text: `We're experienced real estate professionals who lease and rent properties all over the tri-state area with the primary intent of creating positive outcomes for landlords who are looking for renters who will take care of their property.`,
 },
 {
  id: 2,
  title: 'Innovation',
  icon: <GiLightBulb />,

  text: `As professional real estate investors, our job is to make your life easier.  Because we are investors, we have the flexibility to offer multiple solutions when leasing your property.`,
 },
 {
  id: 3,
  title: 'Excellence',
  icon: <FaRegStar />,

  text: `We believe that everyone should be able to sleep well at night, and because we're investors, we have options that traditional renters do not.  We take pride in creating relationships that last, and provide customer service that is above and beyond for you.`,
 },
]
export const links = [
 {
  id: 1,
  text: 'home',
  url: '/',
 },
 {
  id: 2,
  text: 'about',
  url: '/about',
 },
 {
  id: 3,
  text: 'products',
  url: '/products',
 },
]
export const feature = [
 {
  id: 1,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650567139/generic_5_uz5tu1.webp',
  title: 'what we do',
  text:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
 },
 {
  id: 2,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_1_o2z5hb.jpg',
  title: 'vision',
  text:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
 },
 {
  id: 3,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_2_k9ovnf.jpg',
  title: 'history',
  text:
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
 },
]

export const services = [
 {
  id: 1,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/house_qxpp71.jpg',
  icon: <GiCompass />,
  title: 'what we do?',
  text:
   'We lease your home and rent it out as short term rentals on sites such as AirBnb.',
 },
 {
  id: 2,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_1_o2z5hb.jpg',

  icon: <GiDiamondHard />,
  title: 'benefits to you.',
  text: `
   Free Property Management.
   Save Money on Insurance.
   Better than the Ordinary Tennant.
   And More.....`,
 },
 {
  id: 3,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1652561273/Vacation-Rental-Websites-The-Comprehensive-Guide_h8w2ho.jpg',
  icon: <GiStabbedNote />,
  title: "We Can Do What Other Won't",
  text: `House Utilities controlled Remotely.
Outside Cameras for Added Security.
Cleaning Crew after Each Rental.
Minor Repairs done at Our Expense.
`,
 },
 {
  id: 4,
  logo:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1650558637/generic_3_saiwdi.jpg',
  icon: <GiStabbedNote />,
  title: 'our commitment.',
  text: `Never have to worry about your lease being paid on time. We love what we do and our Landlords get a house that will be maintained better than they could ever hope for.`,
 },
]

export const Reviews = [
 {
  id: 1,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_2_tiyzm1.webp',
  text: `You have options when it comes to renting your home, but most people know
       about it.`,
 },
 {
  id: 2,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_1_rfakam.jpg',
  text: ` Renting your house doesn't have to be a succession of hope and
       disappointment with each tennant you approve.`,
 },
 {
  id: 3,
  image:
   'https://res.cloudinary.com/elpawl-llc/image/upload/v1654197550/image_4_ajsjwl.jpg',
  text: `When you work with us, you
       get a hassle and worry free experience that makes your life so much
       easier. That is our guarantee!!!`,
 },
]
export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

