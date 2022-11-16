import FeaturedBanner from '@/components/FeaturedBanner'
import type { NextPage } from 'next'
import Head from 'next/head'
import { supabase } from '@/utils/supabase'

export async function getStaticProps() {
  console.log("Entered Function")
  const { data } = await supabase.from('images').select('*').order('id')
  console.log(data + " Obtained Data")
    return {
      props: {
        images: data,
      },
    }
}

const Gallery: NextPage = () => {
  return (
    <div className="h-[5000px] overflow-scroll">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FeaturedBanner images={props}/>
      </main>
      {/* Modal */}
      {/* Footer */}
    </div>
  )
}

export default Gallery
