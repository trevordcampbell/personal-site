import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoHarvardInnovationLab from '@/images/logos/harvard-innovation-lab.svg'
import logoVincereHealth from '@/images/logos/vincere-health.svg'
import logoRetirement from '@/images/logos/retirement.svg'
import logoBorrowMyBrain from '@/images/logos/borrow-my-brain.svg'


import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { Funderline } from '@/components/Funderline'
import { FunLink } from '@/components/FunLink'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function MailIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }: {article: any}) {
  return (
    <Card className="mx-2 sm:mx-0" as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }: {icon: any, href?: any}) {
  return (
    <Link href={props.href} className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 shadow-lg shadow-zinc-200 dark:shadow-zinc-800/75"
    >
      <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button href="" type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Brain Donor',
      title: 'Borrow my Brain',
      logo: logoBorrowMyBrain,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Temporary Retirement',
      title: 'Chief Enjoyment Officer',
      logo: logoRetirement,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Vincere Health',
      title: 'Product, Founding Team',
      logo: logoVincereHealth,
      start: '2019',
      end: '2022',
    },
    {
      company: 'Harvard Innovation Lab',
      title: 'Advisor + Consultant',
      logo: logoHarvardInnovationLab,
      start: '2018',
      end: '2019',
    },
    {
      company: 'unCHAINed',
      title: 'Co-Founder, Project Lead',
      logo: logoPlanetaria,
      start: '2018',
      end: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 shadow-lg shadow-zinc-200 dark:shadow-zinc-800/75">
      <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">"Real" Work <span className="ml-2 text-sm font-medium opacity-50">(not pretend)</span></span>
      </h2>
      <ol className="mt-6 space-y-4 -ml-2">
        {resume.map((role: any, roleIndex: any) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="Company logo" className="h-8 w-8" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="https://www.linkedin.com/in/trevordcampbell/" variant="secondary" className="group mt-6 w-full">
        Check out my LinkedIn
        <div className="ml-4 group-hover:animate-spin">
          👀
        </div>
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const [isLoading, setLoading] = useState(true)

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className={classNames(
                'absolute inset-0 h-full w-full object-cover bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 ease-in-out',
                isLoading
                  ? 'blur-2xl grayscale'
                  : 'blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({articles}: {articles: any}) {
  return (
    <>
      <Head>
        <title>
          Trevor Campbell - Filmmaker 🎬 Tinkerer 🛠 and real-life Indiana Jones 🤠
        </title>
        <meta
          name="description"
          content="I’m Trevor, a dude based in the Greater Boston Area. I spend my time creating short films, exploring new hobbies, and thinking of outrageously dumb business ideas."
        />
      </Head>
      <Container className="mt-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Tinkerer 🛠 Filmmaker 🎬 and multimodal human being 🤖
          </h1>
          <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400 space-y-6">
            <p className="">
              I’m Trevor, a <span className="italic">dude</span> based in the <Funderline text="Greater Boston Area"/>. I spend my time creating short films, lending my brain to the world, exploring new hobbies, and thinking of outrageously dumb business ideas.
            </p>
            <p className="">
              Currently, I'm making half of my brain public property. <FunLink href="/borrow-my-brain" text="Borrow my Brain" emoji='🧠'></FunLink>
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/TrevorCampbell_"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/trevor.d.campbell/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/trevordcampbell"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/trevordcampbell/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <div className="border-b-2 border-zinc-200 dark:border-zinc-700 pb-5">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">📚 My Latest Writings...</h3>
            </div>
            {articles.map((article: any) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume/>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
