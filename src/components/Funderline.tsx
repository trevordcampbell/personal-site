export function Funderline({text}: {text: string}) {

  return (
    <span className="underline underline-offset-1 decoration-wavy decoration-zinc-400/75 dark:decoration-zinc-400/50">
      {text}
    </span>
  )
}