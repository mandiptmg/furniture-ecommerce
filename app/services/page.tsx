import { AllServices, Product, Services, Testimonials } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div>
     <Services/>
     <AllServices/>
     <Product/>
     <Testimonials/>
    </div>
  )
}

export default page