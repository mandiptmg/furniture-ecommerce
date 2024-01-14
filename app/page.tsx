import {Blog, Choose, Hero, Product, Testimonials} from '@/components'
import { Design } from '../components'
export default function Home() {
  return (
    <main>
     <Hero/>
     <Product/>
     <Choose/>
     <Design/>
     <Testimonials/>
     <Blog/>
    </main>
  )
}
