import { Hero } from '@/components/organisms/Hero'
import { HowItWorks } from '@/components/organisms/HowItWorks'
import { Talent } from '@/components/organisms/Talent'
import { Companies } from '@/components/organisms/Companies'
import { Tournaments } from '@/components/organisms/Tournaments'
import { Networking } from '@/components/organisms/Networking'
import { Testimonials } from '@/components/organisms/Testimonials'
import { News } from '@/components/organisms/News'
import { CallToAction } from '@/components/organisms/CallToAction'
import { Newsletter } from '@/components/organisms/Newsletter'
import { Footer } from '@/components/organisms/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Talent />
      <Companies />
      <Tournaments />
      <Networking />
      <Testimonials />
      <News />
      <CallToAction />
      <Newsletter />
      <Footer />
    </>
  )
}
