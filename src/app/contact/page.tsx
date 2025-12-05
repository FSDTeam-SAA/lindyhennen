import ContactHero from '@/components/contact/ContactHero'
import ContactOfficeInformation from '@/components/contact/contactInformation'
import ContactMap from '@/components/contact/ContactMap'
import SentUsMessage from '@/components/contact/SentUsMessage'
import FAQ from '@/components/FAQ'
import React from 'react'

const page = () => {
  return (
    <section>
        <ContactHero />
        <ContactOfficeInformation />
        <SentUsMessage />
        <ContactMap />
        <FAQ />
    </section>
  )
}

export default page