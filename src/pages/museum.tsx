import Image from 'next/image'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { SectionTitle } from '@/components/SectionTitle'
import DetailsModalTesting2 from '@/components/museum/DetailsModal2'
import { stringToSlug } from '@/lib/stringToSlug'

type ItemID = string;
type Category = 'artifact' | 'artwork' | 'cool-rock' | 'fossil' | 'personal-life' | 'person' | 'project' ;

interface MuseumItemBase {
  id: number;
  createdAt: Date;
  itemID: ItemID;
  category: Category;
  title: string;
  description: string;
  images: string[];
  videos?: string[];
  threeD_model?: string;
  display: boolean;
}

interface MuseumItemArtifact extends MuseumItemBase {
  category: 'artifact';
  details: {
    age?: string;
    timePeriod?: string;
    locationOfOrigin?: string;
    acquisitionMethod?: string;
    size?: string;
    material?: string;
  }
}

interface MuseumItemArtwork extends MuseumItemBase {
  category: 'artwork';
  details: {
    year?: string;
    artist?: string;
    locationOfOrigin?: string;
    acquisitionMethod?: string;
    size?: string;
    medium?: string;
  }
}

interface MuseumItemCoolRock extends MuseumItemBase {
  category: 'cool-rock';
  details: {
    age?: string;
    timePeriod?: string;
    locationOfOrigin?: string;
    acquisitionMethod?: string;
    size?: string;
    material?: string;
  }
}

interface MuseumItemFossil extends MuseumItemBase {
  category: 'fossil';
  details: {
    species?: string;
    age?: string;
    timePeriod?: string;
    locationOfOrigin?: string;
    acquisitionMethod?: string;
    size?: string;
    material?: string;
    other?: string;
  }
}

interface MuseumItemPersonalLife extends MuseumItemBase {
  category: 'personal-life';
  details: {
    year?: string;
  }
}

interface MuseumItemPerson extends MuseumItemBase {
  category: 'person';
  details: {
    nickname?: string;
    relation?: string;
    status?: string;

  }
}

interface MuseumItemProject extends MuseumItemBase {
  category: 'project';
  details: {
    year?: string;
    status?: string;
  }
}

export type MuseumItem =
  | MuseumItemFossil
  | MuseumItemArtifact
  | MuseumItemCoolRock
  | MuseumItemArtwork
  | MuseumItemProject
  | MuseumItemPersonalLife
  | MuseumItemPerson;

  // async function testFileRetrieval() {
  //   const category = 'fossil'; // Use your actual category
  //   const itemID = 'amber-001'; // Use your actual itemID
  //   const path = `${category}/${itemID}`;
  
  //   let { data: images, error: imagesError } = await supabase
  //     .storage
  //     .from('museum-content')
  //     .list(`${path}/images`, { limit: 10, offset: 0 });
  
  //   console.log('Test Data:', images);
  //   console.log('Test Error:', imagesError);
  
  //   // Filter out the placeholder file
  //   const actualImages = images.filter(file => !file.name.includes('.emptyFolderPlaceholder'));
  
  //   // Test the getPublicUrl method for the first actual image (if exists)
  //   if (actualImages.length > 0) {
  //     const firstImage = actualImages[0];
  //     const { publicUrl } = supabase
  //       .storage
  //       .from('museum-content')
  //       .getPublicUrl(`${path}/images/${firstImage.name}`).data;
      
  //     console.log('Public URL for first actual image:', publicUrl);
  //   } else {
  //     console.log('No actual images found to test getPublicUrl');
  //   }
  // }
  
  // testFileRetrieval();

// Function to load media files for a given item
async function loadMediaFiles(itemID: ItemID, category: Category) {
  const path = `${category}/${itemID}`;

  let { data: images } = await supabase
    .storage
    .from('museum-content')
    .list(`${path}/images`, { limit: 100, offset: 0 });

  let { data: videos } = await supabase
    .storage
    .from('museum-content')
    .list(`${path}/videos`, { limit: 100, offset: 0 });

  let { data: models } = await supabase
    .storage
    .from('museum-content')
    .list(`${path}/models`, { limit: 100, offset: 0 });

  // Sort images by the number suffix in their filenames
  const sortedImages = images
    ? images
      .filter(file => !file.name.includes('.emptyFolderPlaceholder') && file.name.match(/\.(jpg|jpeg|png|heic)$/))
      .sort((a, b) => {
        const numberA = parseInt(a.name?.split('-').pop()?.split('.')[0] ?? '0');
        const numberB = parseInt(b.name?.split('-').pop()?.split('.')[0] ?? '0');
        return numberA - numberB;
      })
      .map(file => {
        const { publicUrl } = supabase
          .storage
          .from('museum-content')
          .getPublicUrl(`${path}/images/${file.name}`).data;
        return publicUrl;
      })
    : [];

    if (sortedImages.length === 0) {
      sortedImages.push('https://placehold.co/600x400?text=Images++Pending'); // Replace with your actual placeholder image URL
    }

  // Process videos and models similarly, without sorting
  const videoUrls = videos ? videos
    .filter(file => !file.name.includes('.emptyFolderPlaceholder') && file.name.match(/\.(mp4|avi|mov)$/))
    .map(file => {
      const { publicUrl } = supabase
        .storage
        .from('museum-content')
        .getPublicUrl(`${path}/videos/${file.name}`).data;
      return publicUrl;
    }) : [];

  const modelUrls = models ? models
    .filter(file => !file.name.includes('.emptyFolderPlaceholder') && file.name.match(/\.(obj|fbx)$/))
    .map(file => {
      const { publicUrl } = supabase
        .storage
        .from('museum-content')
        .getPublicUrl(`${path}/models/${file.name}`).data;
      return publicUrl;
    }) : [];

  return {
    images: sortedImages,
    videos: videoUrls,
    threeD_models: modelUrls
  };
}
  

export async function getStaticProps() {
  try {
    const [fossils, artifacts, coolRocks, artwork, projects, personalLife, people] = await Promise.all([
      supabase.from('museum-items').select(`*, details:museum-fossils(*)`).match({category: 'fossil', display: true}).order('id'),
      supabase.from('museum-items').select(`*, details:museum-artifacts(*)`).match({category: 'artifact', display: true}).order('id'),
      supabase.from('museum-items').select(`*, details:museum-cool-rocks(*)`).match({category: 'cool-rock', display: true}).order('id'),
      supabase.from('museum-items').select(`*, details:museum-artwork(*)`).match({category: 'artwork', display: true}).order('id'),
      supabase.from('museum-items').select(`*, details:museum-projects(*)`).match({category: 'project', display: true}).order('id'),
      supabase.from('museum-items').select(`*, details:museum-personal-life(*)`).match({category: 'personal-life', display: true}).order('id'),
      supabase.from('museum-items').select(`*, details:museum-people(*)`).match({category: 'person', display: true}).order('id'),
    ]) as any;

    const museumItems = [
      ...(fossils.data ?? []),
      ...(artifacts.data ?? []),
      ...(coolRocks.data ?? []),
      ...(artwork.data ?? []),
      ...(projects.data ?? []),
      ...(personalLife.data ?? []),
      ...(people.data ?? []),
    ];

    const museumItemsWithMedia = await Promise.all(museumItems.map(async (item) => {
      const mediaFiles = await loadMediaFiles(item.itemID, item.category);
      return { ...item, ...mediaFiles };
    }));

    console.log(museumItemsWithMedia)

    return {
      props: {
        museumItems: museumItemsWithMedia,
      },
      revalidate: 600,
    };
  } catch (error) {
    console.error('Error retrieving museum items:', error);
    return {
      props: {
        museumItems: [],
      },
    };
  }
}
  

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function BlurImage({ museumItem, setOpen, setModalData }: { museumItem: MuseumItem, setOpen: any, setModalData: any, modalData: MuseumItem, open: boolean }) {
  const [isLoading, setLoading] = useState(true);
  const featureImage = museumItem.images[0];

  const urlSlug = stringToSlug(museumItem.title);

  // NOTE: Move this somewhere relevent for modal-based routing
  // const friendlyURLSlug = stringToSlug(museumItem.title);

  function SecondaryLine() {

    if (museumItem.category === 'fossil') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.locationOfOrigin}</p>
      )
    }

    if (museumItem.category === 'artifact') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.locationOfOrigin}</p>
      )
    }

    if (museumItem.category === 'cool-rock') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.locationOfOrigin}</p>
      )
    }

    if (museumItem.category === 'artwork') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.artist}</p>
      )
    }

    if (museumItem.category === 'project') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.year}</p>
      )
    }

    if (museumItem.category === 'personal-life') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.year}</p>
      )
    }

    if (museumItem.category === 'person') {
      return (
        <p className="text-sm text-zinc-500">{museumItem.details.relation}</p>
      )
    }

    else
      return (
        <>
        </>
      )
  }

  return (
    <div className="group hover:cursor-pointer"
      onClick={() => {
        setModalData(museumItem);
        setOpen(true);
        Router.push(`/museum?category=${museumItem.category}&item=${museumItem.itemID}`, undefined, { shallow: true });
      }}
    >
      <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={museumItem.title}
          src={featureImage}
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
            'object-contain w-full h-full max-h-[28rem] bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-90',
            isLoading
              ? 'blur-2xl grayscale'
              : 'blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className='absolute bottom-0 px-2 pb-2 pt-8 w-full text-zinc-300 font-medium opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent to-zinc-900 line-clamp-3'>
          {museumItem.description}
        </div>
      </div>
      <h3 className="mt-4 text-md font-medium text-zinc-900 dark:text-zinc-100">{museumItem.title}</h3>
      <SecondaryLine />
    </div>
  )
}

function MuseumCategoryCounts({ museumItems }: { museumItems: MuseumItem[] }) {

  const categoryCounts = {
    fossilCount: museumItems.filter((museumItem) => museumItem.category === 'fossil').length,
    artifactCount: museumItems.filter((museumItem) => museumItem.category === 'artifact').length,
    coolRockCount: museumItems.filter((museumItem) => museumItem.category === 'cool-rock').length,
    artworkCount: museumItems.filter((museumItem) => museumItem.category === 'artwork').length,
    projectCount: museumItems.filter((museumItem) => museumItem.category === 'project').length,
    personalLifeCount: museumItems.filter((museumItem) => museumItem.category === 'personal-life').length,
    personCount: museumItems.filter((museumItem) => museumItem.category === 'person').length,
  };

  return categoryCounts;
}

export default function Museum({ museumItems }: { museumItems: MuseumItem[] }) {

  
  const [isLoading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [modalData, setModalData]: any = useState<MuseumItem | null>(null);

  // let router = useRouter();

  const categoryCounts = MuseumCategoryCounts({museumItems});

  const router = useRouter();

  useEffect(() => {
    const category = router.query.category;
    const itemID = router.query.item;
    if (category && itemID) {
      // Assuming museumItems is an array of all items
      const itemToShow = museumItems.find(item => item.category === category && item.itemID === itemID);
      if (itemToShow) {
        setModalData(itemToShow);
        setOpen(true);
      }
    }
  }, [router.query, museumItems]);

  const closeModal = () => {
    setOpen(false);
    router.push('/museum', undefined, { shallow: true });
  };

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

          {categoryCounts.fossilCount > 0 &&
            (
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
            )
          }

          {categoryCounts.artifactCount > 0 &&
            (
              <div>
                <SectionTitle
                  emoji="🏺"
                  title="Cultural Artifacts"
                  description="Descriptions"
                />
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
                  {museumItems?.filter((museumItem) => (museumItem.category === 'artifact')).map((museumItem) => (
                    <BlurImage key={museumItem.id} museumItem={museumItem} open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
                  ))}
                </div>
              </div>
            )
          }

          {categoryCounts.coolRockCount > 0 &&
            (
              <div>
                <SectionTitle
                  emoji="🪨"
                  title="Cool Rocks"
                  description="Description"
                />
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
                  {museumItems?.filter((museumItem) => (museumItem.category === 'cool-rock')).map((museumItem) => (
                    <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
                  ))}
                </div>
              </div>
            )
          }

          {categoryCounts.artworkCount > 0 &&
            (
              <div>
                <SectionTitle
                  emoji="🖼"
                  title="Artwork"
                  description="Description"
                />
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
                  {museumItems?.filter((museumItem) => (museumItem.category === 'artwork')).map((museumItem) => (
                    <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
                  ))}
                </div>
              </div>
            )
          }

          {categoryCounts.projectCount > 0 &&
            (
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
            )
          }

          {categoryCounts.personalLifeCount > 0 &&
            (
              <div>
                <SectionTitle
                  emoji="📓"
                  title="Personal Life"
                  description="Description"
                />
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
                  {museumItems?.filter((museumItem) => (museumItem.category === 'personal-life')).map((museumItem) => (
                    <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
                  ))}
                </div>
              </div>
            )
          }

          {categoryCounts.personCount > 0 &&
            (
              <div>
                <SectionTitle
                  emoji="📓"
                  title="People"
                  description="Description"
                />
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-10 sm:grid-cols-1 lg:grid-cols-3">
                  {museumItems?.filter((museumItem) => (museumItem.category === 'person')).map((museumItem) => (
                    <BlurImage key={museumItem.id} museumItem={museumItem}  open={open} setOpen={setOpen} modalData={modalData} setModalData={setModalData}/>
                  ))}
                </div>
              </div>
            )
          }

        </section>

      </section>

      {open && (
        <DetailsModalTesting2 open={open} closeModal={closeModal}  modalData={modalData} />
      )}      
    </>
  )
}
