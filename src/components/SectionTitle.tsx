export function SectionTitle({ emoji, title, description }: {emoji: string, title: string, description: string, className?:string, children?: any}) {
  
  return (
    <div className="sticky top-0 z-10 border-b-2 border-zinc-200 dark:border-zinc-700 pb-5 pt-20 sm:pt-28 px-4 -mx-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
      <h3 className="text-2xl font-medium leading-6 text-zinc-900 dark:text-zinc-100"><span className='mr-3'>{emoji}</span>{title}</h3>
      <p className="mt-2 max-w-4xl text-sm text-zinc-500 dark:text-zinc-400">
        {description}
      </p>
    </div>
  )
}