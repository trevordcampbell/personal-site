import { PlayCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import { Video } from "@/pages/films"

export default function VideoItem({ video }: {video: Video}) {

  const href=`https://youtu.be/${video.linkEnding}`
  const src=`https://www.youtube.com/embed/${video.linkEnding}`

  function NewBadge() {
    if (video.new === true) {
      return (
        <span className="inline-flex mb-2 items-center rounded-md bg-green-600/10 dark:bg-green-500/10 px-2 text-xs font-medium text-green-600 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-500/20">
          NEW!
        </span>
      )
    }
    else return (
      <></>
    )
  }


  
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative isolate grid grid-cols-5 gap-y-12 overflow-hidden bg-gray-100 dark:bg-zinc-950 px-6 py-16 shadow-2xl sm:rounded-3xl sm:p-16 md:p-24 lg:gap-x-20 lg:p-16">
        {/* <GradientBackground /> */}
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="col-span-5 lg:col-span-2 mx-auto max-w-md lg:mx-0 lg:text-left">
          <NewBadge />
          <h2 className="tracking-wide text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {video.title}
          </h2>
          <p className="mt-4 text-lg leading-snug text-zinc-600 dark:text-zinc-300">
            {video.description}
          </p>
          <Link
            className="hidden lg:inline-flex items-center gap-x-2 rounded-md bg-red-600 mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            href={href}
          >
            <PlayCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Watch on YouTube
          </Link>
        </div>
        <div className="col-span-5 lg:col-span-3 h-auto">
          <iframe
            className="w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            width="560"
            height="315"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
