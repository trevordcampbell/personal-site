import Image from 'next/image'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import ImageModal from '@/components/ImageModal'

export async function getStaticProps() {
 const { data } = await supabase.from('images').select().eq('show', 'true').order('id')
  return {
    props: {
      images: data,
    },
  }
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  createdAt: Date
  title: string
  description: string
  href: string
  imageSrc: string
  location: string
  metadata: string
  imageDate: Date
  show: string
  featured: boolean
}

export default function Gallery({ images }: { images: Image[] }) {
  const [isLoading, setLoading] = useState(true)
  return (
    <>
      <section className="relative -top-16 bg-gray-900 py-16 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0">
            <Image 
              width="0"
              height="0"
              sizes="100vw"
              className={classNames(
                'object-cover w-full h-full transition-all duration-500 ease-in-out',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
              src="https://trevordcampbell.imgix.net/singapore-2022/Still+8.png?auto=format" alt=""
            />
        </div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <p className="text-3xl sm:text-5xl lg:text-7xl">📷</p>
                <h1 className="text-2xl font-bold text-white dark:text-zinc-100 sm:text-3xl lg:text-5xl">Photo Gallery</h1>
            </div>
        </div>
      </section>

      <ImageModal />

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <div className="border-b-2 border-zinc-200 dark:border-zinc-700 pb-5">
          <h3 className="text-2xl font-medium leading-6 text-zinc-900 dark:text-zinc-100"><span className='mr-3'>✨</span>Featured Images</h3>
          <p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">
            These are a few of my favorite hand-selected photographs from my travels! Enjoy!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
          {images?.filter((image) => (image.featured === true)).map((image) => (
            <BlurImage key={image.id} image={image}/>
          ))}
        </div>

        <div className="mt-32 border-b-2 border-zinc-200 dark:border-zinc-700 pb-5">
          <h3 className="text-2xl font-medium leading-6 text-zinc-900 dark:text-zinc-100"><span className='mr-3'>🇵🇰</span>Pakistan 2022</h3>
          <p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">
            Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
            Fringilla egestas justo massa purus sagittis malesuada.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
          {images?.filter((image) => (image.metadata === 'pakistan-2022') && (image.featured === false)).map((image) => (
            <BlurImage key={image.id} image={image}/>
          ))}
        </div>

        <div className="mt-32 border-b-2 border-zinc-200 dark:border-zinc-700 pb-5">
          <h3 className="text-2xl font-medium leading-6 text-zinc-900 dark:text-zinc-100"><span className='mr-3'>🇸🇬</span>Singapore 2022</h3>
          <p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">
            Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
            Fringilla egestas justo massa purus sagittis malesuada.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
          {images?.filter((image) => (image.metadata === 'singapore-2022') && (image.featured === false)).map((image) => (
            <BlurImage key={image.id} image={image}/>
          ))}
        </div>

        <div className="mt-32 border-b-2 border-zinc-200 dark:border-zinc-700 pb-5">
          <h3 className="text-2xl font-medium leading-6 text-zinc-900 dark:text-zinc-100"><span className='mr-3'>🇲🇾</span>Borneo 2022</h3>
          <p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">
            Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
            Fringilla egestas justo massa purus sagittis malesuada.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
          {images?.filter((image) => (image.metadata === 'borneo-2022') && (image.featured === false)).map((image) => (
            <BlurImage key={image.id} image={image}/>
          ))}
        </div>

      </div>

    </>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href+'?auto=format'} className="group">
      <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={image.description}
          src={image.imageSrc+'?auto=compress?auto=format'}
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
          className={classNames(
            'object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className='absolute bottom-0 px-2 pb-2 pt-8 w-full text-zinc-300 font-medium opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-zinc-900'>
          {image.description}
        </div>
      </div>
      <h3 className="mt-4 text-md font-medium text-zinc-900 dark:text-zinc-100">{image.title}</h3>
      <p className="text-sm text-zinc-500">{image.location}</p>
    </a>
  )
}
