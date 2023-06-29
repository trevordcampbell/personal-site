import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { SectionTitle } from '@/components/SectionTitle'
import DetailsModalTesting from '@/components/museum/DetailsModal'

export async function getStaticProps() {
 const { data } = await supabase.from('museum-demo').select().order('id')
 console.log({data})
  return {
    props: {
      museumItems: data,
    },
    revalidate: 600,
  }
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type MuseumItem = {
  id: number
  createdAt: Date
  title: string
  description: string
  category: string
  year: string
  timePeriod: string
  geography: string
  otherDetails: Date
  featureImage: string
  images: string
  junk1: string
  junk2: string
  otherImages: [
    {href: string}
  ]
}

export default function Gallery({ museumItems }: { museumItems: MuseumItem[] }) {
  const [isLoading, setLoading] = useState(true)

  const [open, setOpen] = useState(false)
  const [modalData, setModalData]: any = useState<MuseumItem | null>(null);

  return (
    <>
      <Head>
        <title>Museum - Trevor Campbell</title>
        <meta
          name="description"
          content="Some of the Photos and Videos from my travels!"
        />
      </Head>
      <section className="relative -top-16 bg-gray-900 py-16 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0">
          <Image 
            width="0"
            height="0"
            sizes="100vw"
            priority
            quality={40}
            className={classNames(
              'object-cover object-bottom sm:object-center w-full h-full bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 ease-in-out',
              isLoading
                ? 'blur-2xl grayscale'
                : 'blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
            src="https://images.unsplash.com/photo-1582242777411-9e87051b84e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=25" alt="Photo from Unsplash by Joao Melo."
          />
        </div>
        <div className="relative pt-6 px-4 mx-auto sm:px-6 lg:pt-0 lg:px-8 max-w-7xl">
            <div className="text-center font-bold tracking-tight text-white dark:text-zinc-100">
                <p className="text-5xl sm:text-7xl">🏛</p>
                <h1 className="text-4xl sm:text-5xl">Museum of Trev</h1>
            </div>
        </div>
      </section>

      <section className="px-4 mx-auto mb-32 space-y-24 max-w-7xl sm:px-6 lg:px-8">

        <div className="sm:mx-auto max-w-4xl text-lg text-zinc-600 dark:text-zinc-400 space-y-6">
          <p>
            Throughout my life, I have curated a personal museum of things that carry significance. They symbolize the journey I have made, the people I have met, the hardships I have endured, the things that captivate me, and things which provoke deep questions within me:
          </p>
          <p className="inline-flex p-4 rounded-lg italic border-l-4 border-teal-600 dark:border-teal-400 bg-zinc-100 dark:bg-zinc-800/90 font-medium text-teal-600 dark:text-teal-400">
            "Who am I? What do I stand for? Why am I here? Am I doing things that matter?"
          </p>
          <p>
            I invite you, reader, into my life to explore the Museum of Trevor — I hope what you find will captivate you too!
          </p>

        </div>

        <section className="space-y-32">
          <div>
            <SectionTitle
              emoji="🦴"
              title="Fossils"
              description="These are some of the most interesting items to me, because they're like screenshots of the past – they make natural history tangible. It's fascinating to hold a fossil in your hands and be transported back in time to a world that used to be."
            />
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
              {museumItems?.filter((museumItem) => (museumItem.category === 'fossil')).map((museumItem) => (
                <BlurImage key={museumItem.id} museumItem={museumItem} open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              emoji="🏺"
              title="Ancient Artifacts"
              description="Descriptions"
            />
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
              {museumItems?.filter((museumItem) => (museumItem.category === 'artifact')).map((museumItem) => (
                <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              emoji="🖼"
              title="Artwork"
              description="Description"
            />
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
              {museumItems?.filter((museumItem) => (museumItem.category === 'art')).map((museumItem) => (
                <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              emoji="🛠"
              title="Projects"
              description="Description"
            />
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
              {museumItems?.filter((museumItem) => (museumItem.category === 'project')).map((museumItem) => (
                <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle
              emoji="📓"
              title="Personal Life"
              description="Description"
            />
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
              {museumItems?.filter((museumItem) => (museumItem.category === 'personal life')).map((museumItem) => (
                <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
              ))}
            </div>
          </div>

        </section>

      </section>

      {open && (
        <DetailsModalTesting open={open} setOpen={setOpen} modalData={modalData} />
      )}      
    </>
  )
}

function BlurImage({ museumItem, setOpen, setModalData }: { museumItem: MuseumItem, setOpen: any, setModalData: any, modalData: any, open: boolean }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="group"
      onClick={() => {
        setOpen(true);
        setModalData(museumItem);
      }}
    >
      <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={museumItem.title}
          src={museumItem.featureImage+'?auto=format'}
          // width="0"
          // height="0"
          // sizes="100vw"
          // layout='fill'
          // objectFit='contain'
          // layout="fill"
          // objectFit="cover"
          width="0"
          height="0"
          sizes="100vw"
          loading='lazy'
          className={classNames(
            'object-contain max-h-[28rem] w-full h-full bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90',
            isLoading
              ? 'blur-2xl grayscale'
              : 'blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className='absolute bottom-0 px-2 pb-2 pt-8 w-full text-zinc-300 font-medium opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-zinc-900'>
          {museumItem.description}
        </div>
      </div>
      <h3 className="mt-4 text-md font-medium text-zinc-900 dark:text-zinc-100">{museumItem.title}</h3>
      <p className="text-sm text-zinc-500">{museumItem.geography}</p>
    </div>
  )
}
