import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }: {href: any, children: any}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap px-2 sm:px-0 gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/life-list">Life List</NavLink>
                {/* <NavLink href="/museum">Museum</NavLink> */}
                <NavLink href="/films">Films</NavLink>
                <NavLink href="/borrow-my-brain">Borrow My Brain</NavLink>
                <NavLink href="/gallery">Photo Gallery</NavLink>
                <NavLink href="/tools">Tools</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Trevor Campbell. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
