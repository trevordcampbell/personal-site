import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/badheadshot.jpg'
import { FunLink } from '@/components/FunLink'

function SocialLink({ className, href, children, icon: Icon }: {className: string, href: string, children: any, icon: any}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Trevor Campbell</title>
        <meta
          name="description"
          content="Hey! I’m Trevor Campbell. Welcome to my little internet kingdom!"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                quality={100}
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey! 👋 I’m Trevor Campbell.
            </h1>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Welcome to my little kingdom in the cloud! 🏰 ☁️
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved tinkering and making things for as long as I can remember, and
                used to be a serious science dork back in the day. I'm still a dork now, just with many different flavors!
              </p>
              <p>
                Usually, I spend my time capturing video from my travels around the world and turning them into short films. When I'm not behind the camera, I'm exploring new hobbies, making things with my hands, and vomiting out <span className='italic'>very</span> poorly written code from my brain.
              </p>
              <p>
                If you'd like to explore around my cloud kingdom, feel free to check out my <FunLink href="/gallery" emoji="📷" text="Photo Gallery"></FunLink> or read about some of the wacky things I've been up to in my <FunLink href="/articles" emoji="📚" text="Articles + Other Writings"></FunLink> 
                {/* <Link href="/gallery" className='font-medium hover:text-teal-500'><span>📷 </span><span className='underline underline-offset-2 decoration-wavy'>Photo and Video Gallery</span></Link> */}
              </p>
              <p>
                Right now I'm on a temporary retirement from work to explore the other parts of life and enjoy some globetrotting travel. But in my previous life I was the Head of Product at Vincere Health.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/TrevorCampbell_" icon={TwitterIcon} className="">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/trevor.d.campbell/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/trevordcampbell" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/trevordcampbell/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:thatdude@trevordcampbell.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                thatdude@trevordcampbell.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
