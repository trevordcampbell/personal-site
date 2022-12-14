// Status Icons

type Status = "completed" | "in progress" | "researching" | "paused" | "nuked" | "untouched" | string;

export function StatusIcon({ status }: { status: Status }) {

  if(status === "completed") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-teal-100 stroke-teal-600 dark:fill-teal-600/40 dark:stroke-teal-400 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
      </svg>
    )
  }

  if(status === "in progress") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 dark:fill-sky-500/40 dark:stroke-sky-400 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
        <path transform="scale(0.7, 0.7),translate(6, 5)" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" stroke-width="3" fill="none"/>
      </svg>
    )
  }

  if(status === "researching") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-purple-100 stroke-purple-500 dark:fill-purple-500/40 dark:stroke-purple-400 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
        <path transform="scale(0.6, 0.6),translate(7, 7)" fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
      </svg>
    )
  }

  if(status === "paused") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none text-amber-600 fill-amber-100 stroke-amber-600 dark:text-amber-500 dark:fill-amber-600/40 dark:stroke-amber-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
        <path transform="scale(0.7, 0.7),translate(5, 5)" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" fillRule="evenodd" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if(status === "nuked") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none text-red-500 fill-red-100 stroke-red-500 dark:text-red-400 dark:fill-red-500/40 dark:stroke-red-400 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
        <path transform="translate(2, 2)" stroke="none" d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" fill="currentColor" />
      </svg>
    )
  }

  if(status === "untouched") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-zinc-50 stroke-zinc-500 dark:fill-zinc-500/50 dark:stroke-zinc-300 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
      </svg>
    )
  }

  else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-none fill-zinc-50 stroke-zinc-500 dark:fill-zinc-500/50 dark:stroke-zinc-300 stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="11" />
      </svg>
    )
  }
}
