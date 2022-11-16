import Banner from '@/components/Banner'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="dark:bg-zinc-900 h-[5000px] overflow-scroll">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  
}