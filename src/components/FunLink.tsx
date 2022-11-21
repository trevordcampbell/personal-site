import Link from 'next/link'

export function FunLink({ href, emoji, text}: {href: any, emoji?: string, text: string}) {

  if (emoji === undefined) return (
    <Link
      href={href}
      className="group whitespace-nowrap font-medium bg-zinc-500/10 dark:bg-zinc-500/20 hover:text-teal-500 hover:bg-teal-500/10 dark:hover:bg-teal-500/10 px-2 py-1 rounded align-baseline"
    >
      <span
        className='underline underline-offset-2 decoration-wavy decoration-zinc-400/75 dark:decoration-zinc-400/50 group-hover:decoration-teal-500'
      >
        {text}
      </span>
    </Link>
  )

  return (
    <Link
      href={href}
      className="group whitespace-nowrap font-medium bg-zinc-500/10 dark:bg-zinc-500/20 hover:text-teal-500 hover:bg-teal-500/10 dark:hover:bg-teal-500/10 px-2 py-1 rounded align-baseline"
    >
      <span className="mr-3">
        {emoji}
      </span>
      <span
        className='underline underline-offset-2 decoration-wavy decoration-zinc-400/75 dark:decoration-zinc-400/50 group-hover:decoration-teal-500'
      >
        {text}
      </span>
    </Link>
  )
}