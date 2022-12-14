import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import { StatusIcon } from '@/components/icons/lifelist/StatusIcon'

import { LegendDisclosure } from '@/components/icons/lifelist/LegendDisclosure'
import { SectionTitle } from '@/components/SectionTitle'
import { ListItem } from '@/components/icons/lifelist/ListItem'

const listItems = [
  {
    title: 'Eat a Horse',
    category: 'food',
    status: 'complete',
    link: { href: '#', label: '' },
  },
  {
    title: 'Sue Christiano Ronaldo',
    category: 'sports',
    status: 'in progress',
    link: { href: '#', label: '' },
  },
  {
    title: 'Make poop-flavored Ice Cream',
    category: 'food',
    status: 'in progress',
    link: { href: '#', label: '' },
  },
  {
    title: 'Marry Christiano Ronaldos Wife',
    category: 'sports',
    status: 'untouched',
    link: { href: '#', label: '' },
  },
]

export default function LifeList() {

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
        <LegendDisclosure />
      <section className="space-y-32">
        <div className="mt-12">
          <SectionTitle emoji="🍱" title="Food" description="This is all the food I Like"/>
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {listItems?.filter((listItem) => (listItem.category === "food")).map((listItem) => (
              <ListItem title={listItem.title} status={listItem.status} />
            ))}
          </ul>
        </div>
      </section>
      </SimpleLayout>
    </>
  )
}
