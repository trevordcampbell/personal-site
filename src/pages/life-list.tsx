import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { LegendDisclosure } from '@/components/lifelist/LegendDisclosure'
import { SectionTitle } from '@/components/SectionTitle'
import { ListItem } from '@/components/lifelist/ListItem'

import { supabase } from '@/utils/supabase'

export async function getStaticProps() {
  
  const { data } = await supabase.from('lifelist-demo').select().order('id')
  console.log(data);
  return {
    props: {
      listItems: data,
    },
    revalidate: 600,
  }
}

// TODO: Eventually might want to sort the list items by a specific status order, i.e.

// const statusOrder = ["completed", "in progress", "researching", "untouched", "paused", "nuked"];

// Need to look up sorting Array by another Array to complete this...

type ListItem = {
  id: number
  createdAt: Date
  title: string
  difficulty: string
  status: string
  category: string
}

export default function LifeList({ listItems }: { listItems: ListItem[] }) {

  function ListSection({ emoji, title, description, category }: { emoji: string, title: string, description: string, category: string }) {  
    return (
      <div>
        <SectionTitle emoji={emoji} title={title} description={description} />
        <ul
          role="list"
          className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:gap-x-12 sm:grid-cols-2"
        >
          {listItems?.filter((listItem) => (listItem.category === category)).map((listItem) => (
            <ListItem key={listItem.id} title={listItem.title} status={listItem.status} difficulty={listItem.difficulty} />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Life List - Trevor Campbell</title>
        <meta
          name="description"
          content="A big list of all the things I want to do and experience before I get sucked into a black hole."
        />
      </Head>
      <SimpleLayout
        title="The Life List 🔮"
        intro="Here's big list of a bunch of things I want to do and experience before I get sucked into a black hole."
      >

      <LegendDisclosure className="-mt-12" />

      <section className="mb-32 space-y-32">

        <ListSection 
          category="random"
          emoji="🌪" 
          title="Random Stuff" 
          description="Don't know what to tell ya, this stuff doesn't fit anywhere else."
        />

        <ListSection 
          category="film & cinema" 
          emoji="🎬" 
          title="Film, Photography, & Cinematography" 
          description="The next Stephen Spielberg???"
        />

        <ListSection 
          category="crafts & tinkering" 
          emoji="🛠" 
          title="Crafts & Tinkering" 
          description="Useful and useless things I want to manifest into reality."
        />

        <ListSection 
          category="food" 
          emoji="🍱" 
          title="Cooking, Culinary, & Food" 
          description="This is all the food I Like."
        />

        <ListSection 
          category="travel" 
          emoji="🌎" 
          title="Travel" 
          description="Places I want to go..."
        />

        <ListSection 
          category="business" 
          emoji="💼" 
          title="Business" 
          description="Business goals I want to achieve..."
        />

        <ListSection 
          category="music" 
          emoji="🔊" 
          title="Music" 
          description="Music I want to make..."
        />

        <ListSection 
          category="art" 
          emoji="🎨" 
          title="Art" 
          description="Art I want to make..."
        />

        <ListSection 
          category="coding" 
          emoji="💻" 
          title="Coding & Software" 
          description="I'm not a robot – YOU'RE a robot!"
        />

        <ListSection 
          category="social" 
          emoji="🎩" 
          title="Social Stuff" 
          description="Random stuff I want to achieve in social world."
        />

        <ListSection 
          category="relationships & love" 
          emoji="❤️" 
          title="Relationships & Love" 
          description="Maybe I can recreate a season of 'The Bachelor' to speed up the process?"
        />

        <ListSection 
          category="vehicles" 
          emoji="🏎" 
          title="Vehicles + Transportation" 
          description="There are so many ways to get around in this world... I want to try ALL of them!"
        />

        <ListSection 
          category="writing" 
          emoji="✍️" 
          title="Writing" 
          description="Ernest Hemingway had better stand back!"
        />

        <ListSection 
          category="crypto"
          emoji="⛓" 
          title="Crypto & Web 3" 
          description="Step into the future with me?"
        />

        <ListSection 
          category="people"
          emoji="👤" 
          title="People I Want to Meet" 
          description="I don't care if they're dead or alive, let me have dinner with them!"
        />

      </section>

      </SimpleLayout>
    </>
  )
}
