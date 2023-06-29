import React from 'react'
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import VideoItem from '@/components/films/VideoItem'

export type Video = {
  id: number
  title: string
  description: string
  linkEnding: string
  new: boolean
}

const videos: Video[] = [
  {
    id: 1,
    title: "ASIA: Uncovered",
    description: "An all-original travel series spanning the Asian continent. Produced from over 300+ hours of footage across more than 8 months and 15,000+ km traveled.",
    linkEnding: "xQ_3aW0Hn5w",
    new: true
  }
]

export default function Films() {

  return (
    <>
      <Head>
        <title>Films - Trevor Campbell</title>
        <meta
          name="description"
          content="Here's a few of the films and video content I've created."
        />
      </Head>
      <SimpleLayout
        title="Films + Video Content 🔮"
        intro="Here's a few of the films and other video content I've created."
      >
      <ul className="space-y-16">
        {videos.map((video) => (
          // <VideoItem key={video.id} video={video} />
          <React.Fragment key={video.id}>
            <VideoItem video={video} />
          </React.Fragment>
        ))}
      </ul>

      </SimpleLayout>
    </>
  )
}
