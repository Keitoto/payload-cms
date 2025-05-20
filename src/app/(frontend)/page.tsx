import RichText from '@/components/RichText'
import type { Homepage } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const homepageData = (await payload.findGlobal({ slug: 'homepage' })) as Homepage

  const { description, aboutText } = homepageData

  return (
    <main>
      <div className="max-w-[700px] mx-auto">
        <p>description: {description}</p>
        <RichText className='max-w-none p-0' data={aboutText} />
      </div>
    </main>
  )
}
