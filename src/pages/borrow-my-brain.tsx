import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Funderline } from '@/components/Funderline'
import { Button } from '@/components/Button'

export default function BorrowMyBrain() {
  return (
    <>
      <Head>
        <title>Borrow my Brain - Trevor Campbell</title>
        <meta
          name="description"
          content="I'm donating 50% of my brainpower and time to the world at large, to anybody who wants it."
        />
      </Head>
      <SimpleLayout
        title="Borrow my Brain – For Free! 🆓 🧠"
        intro="I'm doing something crazy – I'm making half of my brain public property. What do I mean by this? I'm donating 50% of my brainpower and time to the world at large, to anybody who wants it."
      >
      <section className="max-w-3xl -mt-10 space-y-16 text-zinc-600 dark:text-zinc-400">
        <Button href="https://tally.so/r/mRdK0j" variant="primary" className="-mt-10">
          Request to Borrow my Brain 🧠
        </Button>
      </section>
      <section className="mt-24 space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">See what others have requested:</h2>
        <p className="-my-4 text-zinc-600 dark:text-zinc-400">(You can scroll up / down and left / right inside this Trello container to see full contents)</p>
        <iframe src="https://trello.com/b/pYtYwljY.html" className="w-full min-h-[36rem] bg-zinc-400"></iframe>
      </section>
      <div className="relative my-16">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-zinc-300 dark:border-zinc-500" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white dark:bg-zinc-900 px-3 text-base font-medium leading-6 text-zinc-600 dark:text-zinc-400">More Info About This Initiative</span>
        </div>
      </div>
      <section className="max-w-3xl space-y-16 text-zinc-600 dark:text-zinc-400">
        <div className='space-y-4'>
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Why am I doing this?</h2>
          <p>I enjoy solving seemingly impossible problems for fascinating people. I will work on almost any problem, in any field or subject, <Funderline text="explicitly without pay."></Funderline></p>
          <p>I'm trying to push the boundaries of my knowledge, experience, and capabilities to their limits. This keeps me sharp and always evolving. I have an excellent and multimodal track-record.</p>
        </div>
        <div className='space-y-4'>
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">What kinds of problems am I willing to work on?</h2>
          <p>ANYTHING! Software, plumbing, computer vision, pharma, astronomy, manufacturing, geology, robotics, paint formulation, dinosaurs, food science, hardware, mathematics, or screenwriting. <Funderline text="I will take a crack at it!"></Funderline></p>
          <p>But the problem must be challenging and unsolved.</p>
        </div>
        <div className='space-y-4'>
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">However, there are a few conditions...</h2>
          <ol className='ml-8 -indent-8 space-y-4'>
            <li><span className='font-semibold mr-4'>1)</span>The problem must be challenging and unsolved.</li>
            <li><span className='font-semibold mr-4'>2)</span>The problem must be genuinely interesting.</li>
            <li><span className='font-semibold mr-4'>3)</span>The problem must be actually solvable. None of that "world peace" stuff.</li>
            <li><span className='font-semibold mr-4'>4)</span>The solution to the problem must have tangible, provable, and measurable results.</li>
            <li><span className='font-semibold mr-4'>5)</span><Funderline text="I will not deliver under tight deadlines."/> You have my promise that I will try my hardest to reach a solution as fast as possible. As an informal guideline, I am generally aiming to solve your problem in 30 days or less. There are rare exceptions to this rule for exceptionally compelling and urgent issues.</li>
            <li><span className='font-semibold'><span className="mr-4">6)</span>My solution to anything I work on must be public. NO EXCEPTIONS.</span> Any tool, technique, invention, software, hardware, knowledge, etc. which is produced as a result of free work on this problem by me is produced under the MIT License. It will be public, open source, free to all, not owned by any party. You are free to use it, but so is everyone else!</li>
          </ol>
        </div>
        <div className='space-y-4'>
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">What are you waiting for?</h2>
          <p>You've got nothing to lose; it won't cost you a dime.</p>
          <Button href="https://tally.so/r/mRdK0j" variant="primary" className="">
            Request to Borrow my Brain 🧠
          </Button>
        </div>
      </section>
      </SimpleLayout>
    </>
  )
}
