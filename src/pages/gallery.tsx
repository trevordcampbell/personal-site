import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { SectionTitle } from '@/components/SectionTitle'

export async function getStaticProps() {
 const { data } = await supabase.from('images').select().eq('show', 'true').order('id')
  return {
    props: {
      images: data,
    },
    revalidate: 10,
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
      <Head>
        <title>Gallery - Trevor Campbell</title>
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
              'object-cover sm:object-right w-full h-full transition-all duration-500 ease-in-out',
              isLoading
                ? 'blur-2xl grayscale'
                : 'blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
            src="https://trevordcampbell.imgix.net/pakistan-2022/Still+27.png?auto=format" alt=""
          />
        </div>
        <div className="relative pt-6 px-4 mx-auto sm:px-6 lg:pt-0 lg:px-8 max-w-7xl">
            <div className="text-center font-bold tracking-tight text-white dark:text-zinc-100">
                <p className="text-5xl sm:text-7xl">📷</p>
                <h1 className="text-4xl sm:text-5xl">Photo Gallery</h1>
            </div>
        </div>
      </section>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-32">

        <div>
          <SectionTitle
            emoji="✨"
            title="Featured Images"
            description="These are a few of my favorite hand-selected photographs from my travels! Enjoy!"
          />
          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
            {images?.filter((image) => (image.featured === true)).map((image) => (
              <BlurImage key={image.id} image={image}/>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            emoji="🇵🇰"
            title="Pakistan 2022"
            description="I visted Pakistan to attend the wedding of my very good friend, Bilal. When I arrived in the beginning of August. After the wedding, I traveled around the country in search of adventure ... and found lots of it! From the cities to the hills, the deserts to the mountains, I saw a large part of the country and its beauty. Although I was often sleeping in the dirt, mud, rain and snow, I never felt far from home."
          />
          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
            {images?.filter((image) => (image.metadata === 'pakistan-2022') && (image.featured === false)).map((image) => (
              <BlurImage key={image.id} image={image}/>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            emoji="🇸🇬"
            title="Singapore 2022"
            description="After leaving Pakistan, I stayed in Singapore for two weeks to recharge. I enjoyed how Singapore was so walkable, and managed to visit almost every part of the city during my stay. It's lovely how the city and nature exist together with lots of urban green space. I met lots of interesting people from around the world here!"
          />
          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
            {images?.filter((image) => (image.metadata === 'singapore-2022') && (image.featured === false)).map((image) => (
              <BlurImage key={image.id} image={image}/>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            emoji="🇲🇾"
            title="Borneo 2022"
            description="After recharging, it was time to head back into the dirt! One of my long-time dreams has been to see truly wild Orangutans in their undisturbed natural habitat. I had the immense privilege to travel with a team of biologist researchers deep into the heart of the Borneo rainforest. The jungle is a fascinating and captivating place ... aside from all the leeches!"
          />
          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-2">
            {images?.filter((image) => (image.metadata === 'borneo-2022') && (image.featured === false)).map((image) => (
              <BlurImage key={image.id} image={image}/>
            ))}
          </div>
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
          src={image.imageSrc+'?auto=format'}
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
          quality={40}
          className={classNames(
            'object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90',
            isLoading
              ? 'blur-2xl grayscale'
              : 'blur-0 grayscale-0'
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
