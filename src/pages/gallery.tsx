import Image from 'next/image'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import ImageModal from '@/components/ImageModal'

export async function getStaticProps() {
 const { data } = await supabase.from('images').select('*').eq('metadata', 'singapore-2022').order('id')
  return {
    props: {
      images: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  title: string
  location: string
  imageSrc: string
  name: string
  username: string
  metadata: string
}

export default function Gallery({ images }: { images: Image[] }) {
  const [isLoading, setLoading] = useState(true)
  return (
    // <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    //   <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //     {images.map((image) => (
    //       <BlurImage key={image.id} image={image} />
    //     ))}
    //   </div>
    // </div>

    // <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //   <div>
    //     <h2 className="text-lg font-bold text-gray-900">Your media files</h2>
    //     <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
    //   </div>

    //   <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
    //     <div className="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
    //       {images.map((image) => (
    //         <div className="">
    //           <BlurImage key={image.id} image={image} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    // </div>

    <>
      <section className="relative -top-16 bg-gray-900 py-16 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0">
            <Image 
              width="0"
              height="0"
              sizes="100vw"
              className={cn(
                'object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/category-hero/2/background.png" alt=""
            />
        </div>
        <div className="absolute inset-0 bg-gray-900/70 lg:bg-gray-900/50"></div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
                <p className="text-3xl sm:text-5xl lg:text-7xl">📷</p>
                <h1 className="text-2xl font-bold text-white dark:text-zinc-100 sm:text-3xl lg:text-5xl">Photo Gallery</h1>
            </div>
        </div>
      </section>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <div className="border-b-2 border-zinc-200 dark:border-zinc-700 pb-5">
          <h3 className="text-2xl font-medium leading-6 text-zinc-900 dark:text-zinc-100"><span className='mr-3'>🇸🇬</span>Singapore 2022</h3>
          <p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">
            Workcation is a property rental website. Etiam ullamcorper massa viverra consequat, consectetur id nulla tempus.
            Fringilla egestas justo massa purus sagittis malesuada.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
          {images?.filter((image) => (image.metadata === 'singapore-2022') ).map((image) => (
            <BlurImage key={image.id} image={image}/>
          ))}
        </div>

        <ImageModal />
      </div>

    </>

    // <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
    //   {images.map((images) => (
    //     <li key={images.id} className="">
    //       <div className="relative group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
    //         <BlurImage key={images.id} image={images} />
    //       </div>
    //     </li>
    //   ))}
    // </ul>

    // <div className="py-12 bg-white sm:py-16 lg:py-20">
    //   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //     <div>
    //         <h2 className="text-lg font-bold text-gray-900">Your media files</h2>
    //         <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
    //     </div>

    //     <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-10 sm:grid-cols-3 lg:grid-cols-4">
    //         <div>
    //             <div className="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
    //               {images.map((image) => (
    //                 <div className="">
    //                   <BlurImage key={image.id} image={image} />
    //                 </div>
    //               ))}
    //             </div>
    //             <p className="mt-4 text-sm font-bold text-gray-900">Interior_904.png</p>
    //             <p className="mt-1 text-sm font-medium text-gray-500">1.04 MB</p>
    //         </div>
    //     </div>
    //   </div>
    // </div>

  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href} className="group">
      <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
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
          className={cn(
            'object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-md font-medium text-zinc-900 dark:text-zinc-100">{image.title}</h3>
      <p className="text-sm text-zinc-500">{image.location}</p>
    </a>
  )
}
